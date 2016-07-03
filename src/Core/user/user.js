/**
 * Created by haozi on 2016/6/20 0020.
 */
import {msg} from "../../tools/message"
import {user} from "../../Core/mongodb/schemas"
import {uuid,check} from "../../tools/tools"
import fs from "fs";
import redis from "ioredis";

//启动器的appid windows
const qidongqi = "2FCE29CF-6FC7-4975-B93C-860C738A6496";
//网页的appid
const wangye   = "CB5C92AC-28C5-43F9-8596-B61CBECF5A1F";
export default class User{
    constructor (userID){

    }
    async register(body){
        let r = {
            username:[String,true],
            password:[String,true]
        };
        var jg = check(r,body);
        if(jg !== true)
            return msg("error",0,{
                msg:jg
            });
        let u = new user({
            username        : body.username,
            password        : body.password,
            registerDate    : Date,
            clentId         : [],
            faceId          : "",
            state           : ""
        });
        await u.save();
        return msg("success",200,{
            msg:"注册成功"
        });
    }
    async login(body){
        let r = {
            username:[String,true],
            password:[String,true],
            clentId:[String,true]
        };
        var jg = check(r,body);
        if(jg !== true)
            return msg("error",0,{
                msg:jg
            });
        let u = user.findOne({
            username        : body.username,
            password        : body.password
        });
        await u.save();
        return msg("success",200,{
            msg:"登录成功",
            "DFDFXSESSION":"",
            "UUID":u._id
        });
    }
}



