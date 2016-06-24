/**
 * Created by haozi on 2016/6/20 0020.
 */
export const msg = function (result,code,data) {
    return JSON.stringify({
        "result" : result || "success",
        "code"   : code   || 200,
        "data"   : data
    })
}

export var errorCode={
    "Success":200,
    "NotFound" : 400,
    "CallMethodError":500
}