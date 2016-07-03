/**
 * Created by haozi on 2016/6/23 0023.
 */
import {uuid} from "./../tools/tools"
import {se} from "./../Core/mongodb/schemas";
import Redis from "ioredis";
export const  session = async function (ctx,next) {
    var redis = new Redis();
    ctx.auth = {};
    console.log("233");
    if(ctx.cookies.get("DFDFXSESSION")==null||ctx.cookies.get("DFDFXSESSION")=="")
        next();
    if(ctx.cookies.get("UserId")==null||ctx.cookies.get("UserId")=="")
        next();
    if(ctx.cookies.get("ClientId")==null||ctx.cookies.get("ClientId")=="")
        next();
    else {
        let DFDFXSESSION = ctx.cookies.get("DFDFXSESSION");
        let UserId = ctx.cookies.get("UserId");
        let ClientId = ctx.cookies.get("ClientId");
        var sj = await redis.get(DFDFXSESSION);
        if(sj)
        {
            sj = JSON.parse(sj);
            if(sj.userId == UserId&&sj.ClientId==UserId)
                ctx.auth.UserId = UserId;
        }
    }
    next();
};
