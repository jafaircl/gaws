export default function findIndex (callback: Function, thisArg: AdWordsSelector<AdWordsEntity> | AdWordsReport): (Number | undefined) {

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    let o;
    if ('rows' in thisArg) {
        o = thisArg['rows']()
    } else {
        o = thisArg['get']()
    }
    let k = 0;
    while (o.hasNext()) {
        var kValue = o.next();
        if (callback.call(thisArg, kValue, k, o)) {
            return k;
        }
        k++;
    }
    return undefined;
}