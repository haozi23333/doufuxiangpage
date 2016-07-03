/**
 * Created by haozi on 2016/6/8 0008.
 */
require("babel-core/register");
require("babel-polyfill");
import redis from "ioredis";



(async function () {
    var r = new redis();
    var f = await r.set("qdqwdqwdqwdqwdqw",JSON.stringify({userId:"qdwqdqwdqwd",clientId:"qwdqwdwqd"}));
    console.log("f"+f);
    var b = await r.get("2");
    if(!b)
    {
        console.log("2333")
    }
})();