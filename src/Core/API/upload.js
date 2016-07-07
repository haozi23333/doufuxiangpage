/**
 * Created by haozi on 2016/6/22 0022.
 */

import http from "http";
import fs from "fs";
import {msg} from "../../tools/message"
import md5 from "md5";
import multiparty from "multiparty"
import Redis from "ioredis";
import {uuid} from "../../tools"


var redis = new Redis();

export const upload = async function (ctx,next) {
    var req = ctx.req;
    var res = ctx.res;
    console.log(req.url);
    function ff() {
        return new Promise(function (s, e) {
            var form = new multiparty.Form();
            try {
                var f = fs.statSync("/var/haozi/mc/" + url.slice(2).join("/"));
            }catch (e)
            {
                fs.mkdirSync("/var/haozi/mc/" + url.slice(2).join("/"));
            }
            console.log(f);
            form.uploadDir = "/var/haozi/mc/" + url.slice(2).join("/");
            form.onPart = function (part) {
                console.log(part)
                part.addListener('data', function (a) {
                    console.log(a)
                });
            }
            form.parse(req, function (err, fields, files) {
                if (err) {
                    res.end(msg("error", 200, err));
                    return;
                }
                console.log("" +
                    "filename"+JSON.stringify());
                console.log(files);
                res.writeHead(200, {'content-type': 'text/plain;charset=UTF-8'});
                var newpath = "/var/haozi/mc/" + url.slice(2).join("/") +"/"+ fields.filename[0];
                fs.renameSync(files.file[0].path, newpath);
                var _file = fs.readFileSync(newpath);
                s(msg("success", 200, {
                    folder: url.slice(2).join("/"),
                    filename: fields.filename[0],
                    md5: md5(_file),
                    path: newpath
                }));
            });
        })
    }

    var url = req.url.split("/").slice(1);
    if (url[0] === "api" && url[1] === "upload" && req.method === 'POST')
        ctx.body = await ff();
    else
       await next();
}