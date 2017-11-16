export default function reduce<Accumulator>(callback: Function, initialValue: Accumulator, thisArg: AdWordsSelector<AdWordsEntity> | AdWordsReport): Accumulator {
    if (this == null) {
        throw new TypeError('Array.prototype.reduce called on null or undefined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    var t, len,
        k = 0,
        value;

    if ('rows' in thisArg) {
        t = thisArg['rows']()
    } else {
        t = thisArg['get']()
    }
    if (arguments.length >= 2) {
        value = arguments[1];
    } else {
        while (t.hasNext()) {
            k++;
        }
        value = t.next();
    }
    while (t.hasNext()) {
        value = callback(value, t.next(), k, t);
        k++;
    }
    return value;
}