'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by haozi on 2016/6/20 0020.
 */

var uuid = exports.uuid = function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
};