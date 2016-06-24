/**
 * Created by haozi on 2016/6/17 0017.
 */


var _ = require("./src/tools/fs");
var fs = require("fs");
var md5 = require("md5");


console.log(_.getFileMd5("G:\\1.7.10 SAO整合 9.8\\东方豆腐乡 六周目\\.minecraft\\mods\\fastcraft-1.21.jar"));

var xinxi = {
    "version":"0.0.1",
    mods:[]
};
var url = "G:\\1.7.10 SAO整合 9.8\\东方豆腐乡 六周目\\.minecraft\\";

function a(path,callback) {
    fs.readdir(url+path,(err,files)=>{
        if(err)
            throw err;
        files.map((i,j)=>{
            fs.stat(url+path+"\\"+i,(err,stat)=>{
                if(err)
                    throw  err;
                if(stat.isDirectory())
                    a(path+"\\"+i,callback);
                else
                    fs.readFile(url+path+"\\"+i,(err,file)=>{
                        if(err)
                            throw err;
                        callback(file,i,path);
                    })
            });
        });
    });
}
var _i =0;
// console.log(`${i}:${path}`)
console.log(a("mods",(file,i,path)=>{
    xinxi.mods.push({
        "modid":split(i),
        "display":"mdzz",
        "filename":i,
        "path":path,
        "md5":md5(file),
        "type":"core"
    });
    if(_i++ == 31)
    {
        fs.writeFile("xinxi.json",JSON.stringify(xinxi),()=>console.log("OK"))
    }
}))

var c = {
    "modid":"fastcraft-1.21.jar",
    "filename":"fastcraft-1.21.jar",
    "display":"mdzz",
    "path":"mods",
    "md5":"f1f33a007d6a78d68e6bb217a6ffdb9e",
    "type":"core"
}

function split(name) {
    return name.split(".").map((j,i)=>{return i!=name.split(".").length-1?j:""}).join(".");
}