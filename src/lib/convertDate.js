'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * @param date:日期对象 format:日期生成的格式[YYYY/MM/DD hh:mm:ss]
 * @return str这个格式的日期字符串
 */
function convertDate(date, format) {
    var str = format;
    var o = {
        'M+': date.getMonth() + 1,
        'D+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    if (/(Y+)/.test(format)) {
        str = str.replace(RegExp.$1, date.getFullYear().toString().substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        // eslint-disable-line
        if (new RegExp('(' + k + ')').test(format)) {
            str = str.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(o[k].toString().length));
        }
    }

    return str;
}
/**
 * 获取连续天数的日期
 * @param { num}  第几天离开
 */
function loopTwoDays(num) {
    var date = new Date(),
        leaveDateObj = new Date(date.getTime() + 3600 * 24 * 1000 * num),
        startTime = convertDate(date, 'YYYY-MM-DD'),
        leaveTime = convertDate(leaveDateObj, 'YYYY-MM-DD');

    return startTime + '&' + leaveTime;
}

exports.convertDate = convertDate;
exports.loopTwoDays = loopTwoDays;