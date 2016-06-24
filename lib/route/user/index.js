"use strict";

var _koaRouter = require("koa-router");

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _mc = require("./../../Core/API/mc");

var _mc2 = _interopRequireDefault(_mc);

var _message = require("../../tools/message");

var _message2 = _interopRequireDefault(_message);

var _tools = require("./../../tools/tools");

var _tools2 = _interopRequireDefault(_tools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by haozi on 2016/6/19 0019.
 */

var msg = _message2.default.msg;
var route = (0, _koaRouter2.default)({
    prefix: "/user"
});

route.post("/register", function (ctx) {
    var apiName = ctx.params.id;
    // ctx.body = JSON.stringify(ctx.params);
    var m = new _mc2.default.mc(ctx.params.id);
    var body = "";
    switch (apiName) {
        case "getVersion":
            body = m.getVersion();
            break;
        case "crashReport":
            body = m.crashReport(ctx.request.body);
            break;
        case "clientId":
            body = msg("success", 200, _tools2.default.uuid());
            break;
        default:
            body = msg("error", 404, "API不存在");
            break;
    }
    ctx.body = body;
});
//
// route.get("/mc/:id",function (ctx) {
//     var apiName = ctx.params.id;
//     var m = new mc.mc(ctx.params.id);
//     var body = "";
//     switch (apiName)
//     {
//         case "getVersion":
//             body = m.getVersion();
//             break;
//         case "crashReport":
//             body =  msg("error",MSG.errorCode.CallMethodError,"此不允许Get请求");
//             break;
//         default:
//             body = msg("error",404,"API不存在");
//             break;
//     }
//     ctx.body = body;
// });
exports.module = route;