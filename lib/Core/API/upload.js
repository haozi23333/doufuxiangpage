"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.upload = undefined;

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _message = require("../../tools/message");

var _md = require("md5");

var _md2 = _interopRequireDefault(_md);

var _multiparty = require("multiparty");

var _multiparty2 = _interopRequireDefault(_multiparty);

var _ioredis = require("ioredis");

var _ioredis2 = _interopRequireDefault(_ioredis);

var _tools = require("../../tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Created by haozi on 2016/6/22 0022.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var redis = new _ioredis2.default();

var upload = exports.upload = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
        var req, res, ff, url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        ff = function ff() {
                            return new Promise(function (s, e) {
                                var form = new _multiparty2.default.Form();
                                try {
                                    var f = _fs2.default.statSync("/var/haozi/mc/" + url.slice(2).join("/"));
                                } catch (e) {
                                    _fs2.default.mkdirSync("/var/haozi/mc/" + url.slice(2).join("/"));
                                }
                                console.log(f);
                                form.uploadDir = "/var/haozi/mc/" + url.slice(2).join("/");
                                form.onPart = function (part) {
                                    console.log(part);
                                    part.addListener('data', function (a) {
                                        console.log(a);
                                    });
                                };
                                form.parse(req, function (err, fields, files) {
                                    if (err) {
                                        res.end((0, _message.msg)("error", 200, err));
                                        return;
                                    }
                                    res.writeHead(200, { 'content-type': 'text/plain;charset=UTF-8' });
                                    var newpath = "/var/haozi/mc/" + url.slice(2).join("/") + files.file[0].originalFilename;
                                    _fs2.default.renameSync(files.file[0].path, newpath);
                                    var _file = _fs2.default.readFileSync(newpath);
                                    s((0, _message.msg)("success", 200, {
                                        folder: url.slice(2).join("/"),
                                        filename: files.file[0].originalFilename,
                                        md5: (0, _md2.default)(_file),
                                        path: newpath
                                    }));
                                });
                            });
                        };

                        req = ctx.req;
                        res = ctx.res;

                        console.log(req.url);
                        url = req.url.split("/").slice(1);

                        if (!(url[0] === "api" && url[1] === "upload" && req.method === 'POST')) {
                            _context.next = 11;
                            break;
                        }

                        _context.next = 8;
                        return ff();

                    case 8:
                        ctx.body = _context.sent;
                        _context.next = 12;
                        break;

                    case 11:
                        next();

                    case 12:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function upload(_x, _x2) {
        return ref.apply(this, arguments);
    };
}();