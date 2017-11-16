export default function filter (callback: Function, thisArg: AdWordsSelector<AdWordsEntity> | AdWordsReport): Array<AdWordsEntity | AdWordsReportRow> {

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    var O, res = new Array(),
        c = 0, i = 0;
    if ('rows' in thisArg) {
        O = thisArg['rows']()
    } else {
        O = thisArg['get']()
    }
    if (thisArg === undefined) {
        while (O.hasNext()) {
            var val = O.next();
            if (callback(val, i, O)) {
                res[c++] = val;
            }
            i++;
        }
    } else {
        while (O.hasNext()) {
            var val = O.next();
            if (callback.call(thisArg, val, i, O)) {
                res[c++] = val;
            }
            i++;
        }
    }
    res.length = c;
    return res;
}