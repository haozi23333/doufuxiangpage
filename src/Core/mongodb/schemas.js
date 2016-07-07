/**
 * Created by haozi on 2016/6/20 0020.
 */
import mongoose from "mongoose";
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username        : String,
    password        : String,
    registerDate    : Date,
    ClientId         : Array,
    faceId          : String,
    state           : String,
    uuid:           String
});


var crashReportSchema = new Schema({
    uuid            : String,
    content          : String,
    clientId        : String,
    type            : String,
    version         : String,
    addDate         : Date
});

var modSchema = new Schema({
    uuid:           String,
    modid:          String,
    display:        String,
    filename:       String,
    md5:            String,
    type:           [String],
    version:        String,
    addDate:        Date,
    filePath:       String,
    note:           String
});

export const user = mongoose.model("user",userSchema);
export const crashReport = mongoose.model("crashReport",crashReportSchema);
export const mod = mongoose.model("mod",modSchema);

