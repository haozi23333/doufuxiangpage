"use strict";

var _message = require("../../../tools/message");

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msg = _message2.default.msg; /**
                                  * Created by haozi on 2016/6/19 0019.
                                  */


exports.mc = function (apiName) {
    return new MC(apiName);
};
console.log(msg);

var VERSION = "0.0.1";
var FORGEVERSION = "1497";
var MCVERSION = "1.7.10";
var bb = {
    "result": "success",
    "code": 200,
    "data": {
        "version": VERSION,
        "mc": MCVERSION,
        "forge": FORGEVERSION
    }
};

var MC = function MC(apiName) {
    this.getVersion = function () {
        return msg("error", 200, {
            "version": "0.0.1",
            "mc": "1.7.10",
            "forge": "1745"
        });
    };
    this.exec = function () {};
    this.crashReport = function (body) {
        return msg("success", 200, {
            233: body
        });
    };
};