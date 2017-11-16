export default function some (callback: Function, thisArg: AdWordsSelector<AdWordsEntity> | AdWordsReport): boolean {

    if (this == null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError();
    }
    var t
    if ('rows' in thisArg) {
        t = thisArg['rows']()
    } else {
        t = thisArg['get']()
    }
    var i = 0
    while(t.hasNext()) {
        if(callback.call(thisArg, t.next(), i, t)){
            return true
        }
        i++
    }
    return false
}