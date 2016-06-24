"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ioredis = require("ioredis");

var _ioredis2 = _interopRequireDefault(_ioredis);

var _koaSession = require("koa-session2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by haozi on 2016/6/19 0019.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var RedisStore = function (_Store) {
    _inherits(RedisStore, _Store);

    function RedisStore() {
        _classCallCheck(this, RedisStore);

        console.log("mdzz");

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RedisStore).call(this));

        _this.redis = new _ioredis2.default();
        return _this;
    }

    _createClass(RedisStore, [{
        key: "get",
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sid) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.redis.get("DFSESSIONID:" + sid);

                            case 2:
                                return _context.abrupt("return", _context.sent);

                            case 3:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function get(_x) {
                return ref.apply(this, arguments);
            }

            return get;
        }()
    }, {
        key: "set",
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(session, opts) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (!opts.sid) {
                                    opts.sid = this.getID(24);
                                }
                                _context2.next = 3;
                                return this.redis.set("DFSESSIONID:" + opts.sid, session);

                            case 3:
                                console.log(opts);
                                return _context2.abrupt("return", opts.sid);

                            case 5:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function set(_x2, _x3) {
                return ref.apply(this, arguments);
            }

            return set;
        }()
    }, {
        key: "destroy",
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sid) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this.redis.del("DFSESSIONID:" + sid);

                            case 2:
                                return _context3.abrupt("return", _context3.sent);

                            case 3:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function destroy(_x4) {
                return ref.apply(this, arguments);
            }

            return destroy;
        }()
    }]);

    return RedisStore;
}(_koaSession.Store);

exports.default = RedisStore;