"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bb = exports.MCVERSION = exports.FORGEVERSION = exports.VERSION = exports.mc = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by haozi on 2016/6/19 0019.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _message = require("../../tools/message");

var _schemas = require("../../Core/mongodb/schemas");

var schemas = _interopRequireWildcard(_schemas);

var _tools = require("../../tools/tools");

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mc = exports.mc = function mc(apiName) {
    return new MC(apiName);
};
console.log(_message.msg);

var VERSION = exports.VERSION = "0.0.1";
var FORGEVERSION = exports.FORGEVERSION = "1497";
var MCVERSION = exports.MCVERSION = "1.7.10";
var bb = exports.bb = {
    "result": "success",
    "code": 200,
    "data": {
        "version": VERSION,
        "mc": MCVERSION,
        "forge": FORGEVERSION
    }
};
// var m = new schemas.mods({
//     modid: tools.uuid(),
//     display: "mdzz",
//     filename: "mdzz",
//     md5: "qwdwqdwqdwqdwqd",
//     type: ["a","b"],
//     version: "0.0.1",
//     addDate: new Date()
// });

var MC = function () {
    function MC(apiName) {
        _classCallCheck(this, MC);

        this.apiName = apiName;
    }

    _createClass(MC, [{
        key: "getVersion",
        value: function getVersion() {
            return (0, _message.msg)("error", 200, {
                "version": VERSION,
                "mc": MCVERSION,
                "forge": FORGEVERSION
            });
        }
    }, {
        key: "crashReport",
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(body) {
                var m, b;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log(body);
                                m = new schemas.crashReport({
                                    uuid: (0, _tools.uuid)(),
                                    content: body.content,
                                    clientId: body.clientId,
                                    type: body.type,
                                    version: body.version,
                                    addDate: new Date()
                                });
                                _context.next = 4;
                                return m.save();

                            case 4:
                                b = _context.sent;

                                console.log(b);
                                return _context.abrupt("return", (0, _message.msg)("success", 200, {
                                    msg: "日志提交完成",
                                    uuid: b.uuid
                                }));

                            case 7:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function crashReport(_x) {
                return ref.apply(this, arguments);
            }

            return crashReport;
        }()
    }, {
        key: "getModsList",
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.t0 = console;
                                _context2.t1 = JSON;
                                _context2.next = 4;
                                return schemas.mod.find({}).exec();

                            case 4:
                                _context2.t2 = _context2.sent;
                                _context2.t3 = _context2.t1.stringify.call(_context2.t1, _context2.t2);

                                _context2.t0.log.call(_context2.t0, _context2.t3);

                                _context2.t4 = JSON;
                                _context2.next = 10;
                                return schemas.mod.find({}).exec();

                            case 10:
                                _context2.t5 = _context2.sent;
                                _context2.t6 = _context2.t4.stringify.call(_context2.t4, _context2.t5);
                                return _context2.abrupt("return", (0, _message.msg)("success", 200, _context2.t6));

                            case 13:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getModsList() {
                return ref.apply(this, arguments);
            }

            return getModsList;
        }()
    }, {
        key: "putMod",
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(body) {
                var m;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                console.log(body);
                                m = new schemas.mod(body);

                                m.save();
                                return _context3.abrupt("return", (0, _message.msg)("success", 200, JSON.stringify(schemas.mod.find({ _id: m.id }).exec())));

                            case 4:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function putMod(_x2) {
                return ref.apply(this, arguments);
            }

            return putMod;
        }()
    }, {
        key: "upMod",
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(body) {
                var m, b;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                console.log(body);
                                m = new schemas.mod({
                                    uuid: (0, _tools.uuid)(),
                                    modid: body.modid,
                                    display: body.display,
                                    filename: body.filename,
                                    md5: body.md5,
                                    type: [body.type],
                                    version: body.version,
                                    addDate: new Date(),
                                    filePath: body.filePath
                                });
                                _context4.next = 4;
                                return m.save();

                            case 4:
                                b = _context4.sent;

                                console.log(b);
                                _context4.next = 8;
                                return schemas.mod.find({ _id: m.id }).exec();

                            case 8:
                                _context4.t0 = _context4.sent;
                                return _context4.abrupt("return", (0, _message.msg)("success", 200, _context4.t0));

                            case 10:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function upMod(_x3) {
                return ref.apply(this, arguments);
            }

            return upMod;
        }()
    }, {
        key: "delectMod",
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(body) {
                var _this = this;

                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                console.log(body);
                                body.uuid.map(function () {
                                    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(j) {
                                        var i, m;
                                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                            while (1) {
                                                switch (_context5.prev = _context5.next) {
                                                    case 0:
                                                        console.log("删除的ID" + j);
                                                        _context5.next = 3;
                                                        return schemas.mod.findOne({ uuid: j }).exec();

                                                    case 3:
                                                        i = _context5.sent;

                                                        console.log("删除的wenjian " + i);
                                                        _fs2.default.unlinkSync(i.filePath);
                                                        _context5.next = 8;
                                                        return schemas.mod.remove({ uuid: j }).exec();

                                                    case 8:
                                                        m = _context5.sent;

                                                        console.log(m);

                                                    case 10:
                                                    case "end":
                                                        return _context5.stop();
                                                }
                                            }
                                        }, _callee5, _this);
                                    }));

                                    return function (_x5) {
                                        return ref.apply(this, arguments);
                                    };
                                }());
                                return _context6.abrupt("return", (0, _message.msg)("success", 200, {
                                    uuid: body.uuid
                                }));

                            case 3:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function delectMod(_x4) {
                return ref.apply(this, arguments);
            }

            return delectMod;
        }()
    }, {
        key: "getClientID",
        value: function getClientID() {
            return (0, _message.msg)("success", 200, {
                clientID: (0, _tools.uuid)()
            });
        }
    }]);

    return MC;
}();