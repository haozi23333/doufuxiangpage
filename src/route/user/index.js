/**
 * Created by haozi on 2016/6/19 0019.
 */

import Route from "koa-router";
import User from "../../Core/user/user";

export let userroute = Route({
    prefix : "/user"
});

userroute.post("/register",async function (ctx) {
    var user = new User();
    ctx.body = await user.register(ctx);
});
userroute.post("/login",async function (ctx) {
    var user = new User();
    ctx.body = await user.login(ctx);
});

