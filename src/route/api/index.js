/**
 * Created by haozi on 2016/6/19 0019.
 */
import Route from "koa-router";
import * as MC from "./../../Core/API/mc";
import {msg} from "../../tools/message";
import tools from "./../../tools/tools";
import fs from "fs";

export let apiroute = Route({
    prefix : "/api"
});

apiroute.post("/mc/:id",async function (ctx) {
    // if(ctx.auth.UserId)
        // console.log(ctx.auth.UserId);
    var apiName = ctx.params.id;
    var _body = ctx.request.body;
    var mc = new MC.mc(ctx.params.id);
    console.log(apiName);
    switch (apiName)
    {
        case "getVersion":
            ctx.body  = mc.getVersion();
            break;
        case "crashReport":
            ctx.body  = await mc.crashReport(ctx.request.body);
            break;
        case "clientId":
            ctx.body  =  msg("success",200,tools.uuid());
            break;
        case "upMod":
            ctx.body = await mc.upMod(_body);
            break;
        case "getModsList":
            ctx.body = await mc.getModsList();
            break;
        case "delectMod":
            ctx.body = await mc.delectMod(_body);
            break;
        case "getClientID":
            ctx.body = await mc.getClientID();
            break;
        case "getServerstate":
            ctx.body = await mc.getServerstate();
            break;
        case "getAuth":
            ctx.body = await mc.getAuth(ctx);
            break;
        default:
            ctx.body = msg("error",404,"API不存在");
            break;
    }
});

apiroute.get("/mc/:id",async (ctx,next)=> {
    console.log("OK");          //chengg     jujue
    var apiName = ctx.params.id;
    var _body = ctx.request.body;
    var mc = new MC.mc(ctx.params.id);
    console.log("OK")
    switch (apiName) {
        case "getVersion":
            ctx.body = mc.getVersion();
            break;
        case "crashReport":
            ctx.body = msg("error", MSG.errorCode.CallMethodError, "此不允许Get请求");
            break;
        case "getModsList":
            ctx.body = await mc.getModsList();
            break;
        case "getServerstate":
            ctx.body = mc.getServerstate();
            break;
        default:
            ctx.body = msg("error", 404, "API不存在");
            break;
    }
});

