/**
 * Created by haozi on 2016/6/19 0019.
 */

import Route from "koa-router";
import mc from "./../../Core/API/mc";
import MSG from "../../tools/message";
import tools from "./../../tools/tools"
var msg = MSG.msg;
let route = Route({
    prefix : "/user"
});

route.post("/register",function (ctx) {
    var apiName = ctx.params.id;
    // ctx.body = JSON.stringify(ctx.params);
    var m = new mc.mc(ctx.params.id);
    var body = "";
    switch (apiName)
    {
        case "getVersion":
            body = m.getVersion();
            break;
        case "crashReport":
            body =  m.crashReport(ctx.request.body);
            break;
        case "clientId":
            body =  msg("success",200,tools.uuid());
            break;
        default:
            body = msg("error",404,"API不存在");
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