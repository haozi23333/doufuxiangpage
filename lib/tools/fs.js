"use strict";

/**
 * Created by haozi on 2016/6/8 0008.
 */

var md5 = require("md5");
var fs = require("fs");
var _fs = {};

/**
 * 获取文件MD5
 * @param path
 * @return {Promise}
 */
// return new Promise(function (resolve, reject) {
//     console.log(1)
//     fs.readFile(path, function(err, buf) {
//         if(err)
//             reject(err);
//         console.log(md5(buf));
//         resolve(md5(buf));
//     });
// });
_fs.getFileMd5 = function (path) {
  var file = fs.readFileSync(path);
  return md5(file);
};

/**
 *获取路径下面全部文件名
 * @param path
 * @return {Promise}
 */
// _fs.getDir = function (path) {
//     return new Promise(function (resolve, reject) {
//     fs.readdir(path,function (err,files) {
//             if(err)
//                 reject(err);
//             resolve(files);
//         });
//     });
// }

_fs.mapFile = function (path) {};

// url = "G:\\1.7.10 SAO整合 9.8\\东方豆腐乡 六周目\\.minecraft\\mods";
//
// mapDir(url);

module.exports = _fs;