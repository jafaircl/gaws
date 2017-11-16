export default function map<T> (callback: Function, t: AdWordsSelector<AdWordsEntity> | AdWordsReport): Array<T> {

    let A, k;
    if (this == null) {
      throw new TypeError('this is null or not defined')
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function')
    }
    let O;
    if ('rows' in t) {
        O = t['rows']()
    } else {
        O = t['get']()
    }
    A = new Array()
    k = 0;
    while(O.hasNext()) {
        const kValue = O.next()
        const mappedValue = callback.call(t, kValue, k, O)
        A[k] = mappedValue
        k++
    }
    return A
}