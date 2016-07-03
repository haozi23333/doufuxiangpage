/**
 * Created by haozi on 2016/6/19 0019.
 */

import Route from "koa-router";
import MSG from "../../tools/message";
let route = Route({
    prefix : "/user"
});

route.post("/register",function (ctx) {

    ctx.body = body;
});
route.post("/login",function (ctx) {

    ctx.body = body;
});

export default route;