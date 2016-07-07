/**
 * Created by haozi on 2016/6/20 0020.
 */
import {msg} from "../../tools/message"
import {user} from "../../Core/mongodb/schemas"
import {uuid} from "../../tools/tools"
import fs from "fs";
import redis from "ioredis";

//启动器的appid windows
const qidongqi = "2FCE29CF-6FC7-4975-B93C-860C738A6496";
//网页的appid
const wangye   = "CB5C92AC-28C5-43F9-8596-B61CBECF5A1F";


export default class User{
    constructor (userID){
        if(userID)
            this.userID = userID;
    }
    async register(ctx){
        if(ctx.auth.ClientId==null||ctx.auth.ClientId=="")
            return msg("error",200,{
                msg:"你没有权限"
            });

        let body = ctx.request.body;

        let _u = await user.findOne({
            username        : body.username
        });
        try {
            if (_u.uuid != undefined)
                return msg("error", 0, {
                    msg: "用户名已经被注册"
                });
        }catch (e) {
            let u = new user({
                username: body.username,
                password: body.password,
                registerDate: new Date(),
                ClientId: [],
                faceId: "",
                state: "",
                uuid: uuid()
            });
            await await u.save();
            return msg("success", 200, {
                msg: "注册成功"
            });
        }
    }

    /**
     * login
     * @param   username    {String}    post
     * @param   password    {String}    post
     * @param   ClientId    {String}    cookie/post
     */
    async login(ctx) {

        if (ctx.auth.ClientId == null || ctx.auth.ClientId == "")
            return msg("error", 200, {
                msg: "你没有权限"
            });
        let body = ctx.request.body;
        let u = await user.findOne({
            username: body.username,
            password: body.password
        });
        try {
            console.log(u.uuid);
            var Redis = new redis();
            let DFDFXSESSION = ctx.auth.DFDFXSESSION|| uuid() + uuid();
            ctx.cookies.set("DFDFXSESSION", DFDFXSESSION);
            ctx.cookies.set("UserId", u.uuid);
            await Redis.set(DFDFXSESSION, JSON.stringify({
                DFDFXSESSION: DFDFXSESSION,
                ClientId: ctx.auth.ClientId,
                UserId: u.uuid,
                time: new Date().getTime(),
                appid: body.appid
            }));
            if (u.ClientId.length == 5) {
                u.ClientId.shift();
                u.ClientId.push(ctx.auth.ClientId);
            }
            return msg("success", 200, {
                msg: "登录成功",
                "DFDFXSESSION": DFDFXSESSION,
                "UUID": u.uuid,
                "ClientId": ctx.auth.ClientId
            });

        } catch (e) {
                return msg("error", 0, {
                    msg: "登陆失败，账户或密码错误"
                });
        }
    }
}



