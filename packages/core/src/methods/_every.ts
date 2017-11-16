export default function every (callback: Function, thisArg: AdWordsSelector<AdWordsEntity> | AdWordsReport): boolean {

  let T, k;
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }
    let O;
    if ('rows' in thisArg) {
        O = thisArg['rows']()
    } else {
        O = thisArg['get']()
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    if (arguments.length > 1) {
      T = thisArg;
    }

    k = 0;
    while(O.hasNext()) {
        var kValue = O.next();
        var testResult = callback.call(T, kValue, k, O);
        if (!testResult) {
            return false;
        }
        k++;
    }
    return true;
}