"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.session = undefined;

var _tools = require("./../tools/tools");

var _schemas = require("./../Core/mongodb/schemas");

var _ioredis = require("ioredis");

var _ioredis2 = _interopRequireDefault(_ioredis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Created by haozi on 2016/6/23 0023.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var session = exports.session = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
        var redis;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        redis = new _ioredis2.default();

                        ctx.auth = {};
                        if (ctx.cookies.get("DFDFXSESSION") == null) {
                            ctx.cookies.set("DFDFXSESSION", (0, _tools.uuid)());
                        } else {
                            ctx.auth.DFDFXSESSION = ctx.cookies.get("DFDFXSESSION");
                        }
                        next();

                    case 4:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function session(_x, _x2) {
        return ref.apply(this, arguments);
    };
}();