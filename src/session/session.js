/**
 * Created by haozi on 2016/6/23 0023.
 */
import {uuid} from "./../tools/tools"
import {se} from "./../Core/mongodb/schemas";
import Redis from "ioredis";
export const  session = async function (ctx,next) {
    var redis = new Redis();
    ctx.auth = {};
    if(ctx.cookies.get("DFDFXSESSION")==null)
    {
        ctx.cookies.set("DFDFXSESSION",uuid());
    }
    else
    {
        ctx.auth.DFDFXSESSION = ctx.cookies.get("DFDFXSESSION");
    }
    next();
}