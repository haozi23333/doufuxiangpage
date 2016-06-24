"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mod = exports.crashReport = exports.user = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema; /**
                                         * Created by haozi on 2016/6/20 0020.
                                         */


var userSchema = new Schema({
    username: String,
    password: String,
    registerDate: Date,
    clentId: Array,
    faceId: String
});

var crashReportSchema = new Schema({
    uuid: String,
    content: String,
    clientId: String,
    type: String,
    version: String,
    addDate: Date
});

var modSchema = new Schema({
    uuid: String,
    modid: String,
    display: String,
    filename: String,
    md5: String,
    type: [String],
    version: String,
    addDate: Date,
    filePath: String,
    note: String
});

var user = exports.user = _mongoose2.default.model("user", userSchema);
var crashReport = exports.crashReport = _mongoose2.default.model("crashReport", crashReportSchema);
var mod = exports.mod = _mongoose2.default.model("mod", modSchema);