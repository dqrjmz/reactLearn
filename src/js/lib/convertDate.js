/*
 * @param date:日期对象 format:日期生成的格式[YYYY/MM/DD hh:mm:ss]
 * @return str这个格式的日期字符串
 */
export default function convertDate(date, format) {
    let str = format;
    const o = {
        'M+': date.getMonth() + 1,
        'D+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
    };
    if (/(Y+)/.test(format)) {
        str = str.replace(RegExp.$1,
                (date.getFullYear().toString()).substr(4 - RegExp.$1.length));
    }

    for (const k in o) { // eslint-disable-line
        if (new RegExp(`(${k})`).test(format)) {
            str = str.replace(RegExp.$1,
                (RegExp.$1.length === 1) ?
                o[k] : (`00${o[k]}`.substr((o[k].toString()).length)));
        }
    }

    return str;
}