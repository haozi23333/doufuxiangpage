"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.apiroute = undefined;

var _koaRouter = require("koa-router");

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _mc = require("./../../Core/API/mc");

var MC = _interopRequireWildcard(_mc);

var _message = require("../../tools/message");

var _tools = require("./../../tools/tools");

var _tools2 = _interopRequireDefault(_tools);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Created by haozi on 2016/6/19 0019.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var apiroute = exports.apiroute = (0, _koaRouter2.default)({
    prefix: "/api"
});

apiroute.post("/mc/:id", function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx) {
        var apiName, _body, mc, body;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        apiName = ctx.params.id;
                        _body = ctx.request.body;
                        mc = new MC.mc(ctx.params.id);

                        console.log(apiName);
                        body = "";
                        _context.t0 = apiName;
                        _context.next = _context.t0 === "getVersion" ? 8 : _context.t0 === "crashReport" ? 10 : _context.t0 === "clientId" ? 14 : _context.t0 === "upMod" ? 16 : _context.t0 === "getModsList" ? 20 : _context.t0 === "upload" ? 24 : _context.t0 === "delectMod" ? 26 : _context.t0 === "getClientID" ? 30 : 32;
                        break;

                    case 8:
                        ctx.body = mc.getVersion();
                        return _context.abrupt("break", 34);

                    case 10:
                        _context.next = 12;
                        return mc.crashReport(ctx.request.body);

                    case 12:
                        ctx.body = _context.sent;
                        return _context.abrupt("break", 34);

                    case 14:
                        ctx.body = (0, _message.msg)("success", 200, _tools2.default.uuiud());
                        return _context.abrupt("break", 34);

                    case 16:
                        _context.next = 18;
                        return mc.upMod(_body);

                    case 18:
                        ctx.body = _context.sent;
                        return _context.abrupt("break", 34);

                    case 20:
                        _context.next = 22;
                        return mc.getModsList();

                    case 22:
                        ctx.body = _context.sent;
                        return _context.abrupt("break", 34);

                    case 24:
                        ctx.body = "233";
                        return _context.abrupt("break", 34);

                    case 26:
                        _context.next = 28;
                        return mc.delectMod(_body);

                    case 28:
                        ctx.body = _context.sent;
                        return _context.abrupt("break", 34);

                    case 30:
                        ctx.body = mc.getClientID();
                        return _context.abrupt("break", 34);

                    case 32:
                        ctx.body = (0, _message.msg)("error", 404, "API不存在");
                        return _context.abrupt("break", 34);

                    case 34:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return ref.apply(this, arguments);
    };
}());

apiroute.get("/mc/:id", function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, next) {
        var apiName, _body, mc;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        console.log("OK"); //chengg     jujue
                        apiName = ctx.params.id;
                        _body = ctx.request.body;
                        // ctx.body = JSON.stringify(ctx.params);

                        mc = new mc(ctx.params.id);

                        console.log("OK");
                        _context2.t0 = apiName;
                        _context2.next = _context2.t0 === "getVersion" ? 8 : _context2.t0 === "crashReport" ? 10 : _context2.t0 === "getMod" ? 12 : _context2.t0 === "getModsList" ? 16 : 20;
                        break;

                    case 8:
                        ctx.body = mc.getVersion();
                        return _context2.abrupt("break", 22);

                    case 10:
                        ctx.body = (0, _message.msg)("error", MSG.errorCode.CallMethodError, "此不允许Get请求");
                        return _context2.abrupt("break", 22);

                    case 12:
                        _context2.next = 14;
                        return mc.putMod(_body);

                    case 14:
                        ctx.body = _context2.sent;
                        return _context2.abrupt("break", 22);

                    case 16:
                        _context2.next = 18;
                        return mc.getModsList();

                    case 18:
                        ctx.body = _context2.sent;
                        return _context2.abrupt("break", 22);

                    case 20:
                        ctx.body = (0, _message.msg)("error", 404, "API不存在");
                        return _context2.abrupt("break", 22);

                    case 22:
                        ctx.body = "2333";

                    case 23:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function (_x2, _x3) {
        return ref.apply(this, arguments);
    };
}());