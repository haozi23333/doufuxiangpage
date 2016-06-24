/**
 * Created by haozi on 2016/6/20 0020.
 */
import mongoose from "mongoose";

mongoose.connect("mongodb://haozi.moe/mc");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log("mdzz connect success");
});