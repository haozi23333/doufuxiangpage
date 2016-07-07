/**
 * Created by haozi on 2016/6/23 0023.
 */
import {uuid} from "./../tools/tools"
import {se} from "./../Core/mongodb/schemas";
import Redis from "ioredis";


/**
 *  Session 分析 中间件
 *  获取用户的ClientID 验证Session的有效性
 * @param ctx       ctx对象
 * @param next      async next
 */
export var session = async function (ctx,next) {
    var redis = new Redis();
    ctx.auth = {};

    //get cookie session
    console.log(!(ctx.cookies.get("ClientId") == undefined));

    if (!(ctx.cookies.get("ClientId") == undefined)) {
        ctx.auth.ClientId = ctx.cookies.get("ClientId");
        console.log("get cookie1")
    } else if (!(ctx.request.body.ClientId == undefined )) {
        ctx.auth.ClientId = ctx.request.body.ClientId;
        console.log("get cookie2")
    } else {
        ctx.cookies.set("ClientId", uuid());
        console.log("set Cookie")
    }
    if (ctx.auth.ClientId == null)
    {}    else
    {
        if (!(ctx.cookies.get("DFDFXSESSION") == undefined)) {
            ctx.auth.DFDFXSESSION = ctx.cookies.get("DFDFXSESSION");
            console.log("getSession1")
        }else if(!(ctx.request.body.DFDFXSESSION == undefined) ){
            ctx.auth.DFDFXSESSION = ctx.request.body.DFDFXSESSION;
            console.log("getSession2")
        }
        if(ctx.auth.DFDFXSESSION==null)
        {}
        else
        {
            var sj = await redis.get(ctx.auth.DFDFXSESSION);
            console.log(sj);
            if (sj) {
                sj = JSON.parse(sj);
                if (sj.ClientId == ctx.auth.ClientId && (new Date(sj.time).getTime() + (7 * 3600 * 24 * 1000)) > new Date().getTime()) {
                    ctx.auth.UserId = sj.UserId;
                }
            }
            else
                ctx.auth.UserId = false;
        }
    }
    await next();
}