/**
 * Created by haozi on 2016/6/19 0019.
 */
import {msg} from "../../tools/message"
import * as schemas from "../../Core/mongodb/schemas"
import {uuid} from "../../tools/tools"
import fs from "fs";
export const mc =function (apiName) {
    return new MC(apiName);
};
console.log(msg);

export const VERSION  = "7.0.0";
export const FORGEVERSION = "1497";
export const MCVERSION ="1.7.10";
export const bb = {
    "result":"success",
    "code":200,
    "data": {
        "version":  VERSION,
        "mc":       MCVERSION,
        "forge":    FORGEVERSION
    }
};

class MC{
    constructor(apiName){
        this.apiName = apiName;
    }
     getVersion () {
        return msg("success",200,{
            "version":  VERSION,
            "mc":       MCVERSION,
            "forge":    FORGEVERSION,
            "cdn":  "http://df.mokeyjay.com"
        });
    }
     async crashReport (body) {
         console.log(body);
         var m = new schemas.crashReport({
             uuid            : uuid(),
             content         : body.content,
             clientId        : body.clientId,
             type            : body.type,
             version         : body.version,
             addDate         : new Date()
         });
         var b = await m.save();
         console.log(b);
         return msg("success",200,{
             msg:"日志提交完成",
             uuid:b.uuid
         });
    }
    async getModsList(){
        return msg("success",200,JSON.stringify( await schemas.mod.find({}).exec()));
    }
    async putMod(body) {
        console.log(body);
        var m = new schemas.mod(body);
        m.save();
        return msg("success",200,JSON.stringify(await schemas.mod.find({_id:m.id}).exec()));
    }
    async upMod(body) {
        console.log(body);
        var m = new schemas.mod({
            uuid :          uuid(),
            modid:          body.modid,
            display:        body.display,
            filename:       body.filename,
            md5:            body.md5,
            type:           [body.type],
            version:        body.version,
            addDate:        new Date(),
            filePath:       body.filePath
        });
        var b = await m.save();
        console.log(b);
        return msg("success",200,await schemas.mod.find({_id:m.id}).exec());
    }
    async delectMod(body){
        console.log(body);
        body.uuid.map(async (j)=>{
            console.log("删除的ID"+j);
            var i = await schemas.mod.findOne({uuid:j}).exec();
            console.log("删除的wenjian "+i);
            fs.unlinkSync(i.filePath);
            var m = await schemas.mod.remove({uuid:j}).exec();
            console.log(m);
        });
        return msg("success",200,{
            uuid:body.uuid
        });
    }
    getClientID(){
        return msg("success",200,{
            clientID:uuid()
        });
    }
    getServerstate(){
        return msg("success",200,{
            state:"online",
            player:20,
            msg:"欢迎进入"
        });
    }
    async getAuth(ctx){
        console.log(ctx.auth);
        return msg("error",200,ctx.auth);
    }
}
