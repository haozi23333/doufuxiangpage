import koa  from "koa";
import Route from "koa-router";
import bodyParser from "koa-bodyparser";
import {upload} from "./lib/Core/API/upload"
import {apiroute} from "./lib/route/api"
import {userroute} from "./lib/route/user"
const  app= new koa();
import mongoose from "mongoose";
import {session} from "./lib/session/session"

//     key:"DFSESSIONID",
//     store:new Store()
// }));
// .use(session)
mongoose.connect("mongodb://haozi.moe/mc",()=>console.log("mongodb is connected"));
const router  = new Route();
// console.log(apiroute);
app.use(bodyParser())
	.use(session)
    .use(apiroute.routes())
	.use(userroute.routes())
    .use(router.allowedMethods())
    .use(require("koa-static")("./public/"))
    .use(upload);

app.listen(3000,()=>console.log(2333));
