export default function forEach(callback: Function, thisArg: AdWordsSelector<AdWordsEntity> | AdWordsReport): void {
  let k, O;
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }
    if ('rows' in thisArg) {
        O = thisArg['rows']()
    } else {
        O= thisArg['get']()
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    k = 0;
    while(O.hasNext()) {
        const kValue = O.next();
        callback.call(thisArg, kValue, k, O);
        k++;
    }
}