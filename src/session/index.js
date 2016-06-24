/**
 * Created by haozi on 2016/6/19 0019.
 */
import Redis from "ioredis";
import {Store} from "koa-session2";

export default class RedisStore extends Store {
    constructor() {
        console.log("mdzz");
        super();
        this.redis = new Redis();
    }

    async get(sid) {
        return await this.redis.get(`DFSESSIONID:${sid}`);
    }

    async set(session, opts) {
        if(!opts.sid) {
            opts.sid = this.getID(24);
        }
        await this.redis.set(`DFSESSIONID:${opts.sid}`, session);
        console.log(opts)
        return opts.sid;
    }

    async destroy(sid) {
        return await this.redis.del(`DFSESSIONID:${sid}`);
    }
}