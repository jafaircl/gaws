export default function find (callback: Function, thisArg: AdWordsSelector<AdWordsEntity> | AdWordsReport): AdWordsEntity | AdWordsReportRow {

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    var o;
    if ('rows' in thisArg) {
        o = thisArg['rows']()
    } else {
        o = thisArg['get']()
    }
    var k = 0;
    while (o.hasNext()) {
        var kValue = o.next();
        if (callback.call(thisArg, kValue, k, o)) {
            return kValue;
        }
        k++;
    }
    throw new Error('Error in Iterator.find(): Undefined')
}