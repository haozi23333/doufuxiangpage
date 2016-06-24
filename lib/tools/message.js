"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by haozi on 2016/6/20 0020.
 */
var msg = exports.msg = function msg(result, code, data) {
    return JSON.stringify({
        "result": result || "success",
        "code": code || 200,
        "data": data
    });
};

var errorCode = exports.errorCode = {
    "Success": 200,
    "NotFound": 400,
    "CallMethodError": 500
};