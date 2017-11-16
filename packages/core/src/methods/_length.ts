export default function length(thisArg: AdWordsSelector<AdWordsEntity> | AdWordsReport): number {
    let O, i = 0
    if ('rows' in thisArg) {
        O = thisArg['rows']()
    } else {
        O = thisArg['get']()
        return O.totalNumEntities()
    }
    while (O.hasNext()) {
        const k = O.next()
        i++
    }
    return i
}