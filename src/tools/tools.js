/**
 * Created by haozi on 2016/6/20 0020.
 */


export const uuid =function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}
export const isnull = function () {
    
}

//
// export const check = function (rules,checked) {
//     for (let i in rules){
//         if(!checked[i]&&rules[i][1])
//             return `${i}不存在`;
        // if()
        //     if (!(typeof (checked[i] == )) && rules[i][1])
        //         return `${i}类型不正确`;
    //
    // }
    // return true;
// }