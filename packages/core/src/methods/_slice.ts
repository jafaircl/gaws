
export default function slice(thisArg: AdWordsSelector<AdWordsEntity> | AdWordsReport, begin?: number, end?: number): Array<AdWordsEntity | AdWordsReportRow> {
    let i = 0, len = 0, tGetter, t, arr

    if ('rows' in thisArg) {
        tGetter = 'rows'
    } else {
        tGetter = 'get'
    }
    t = thisArg[tGetter]()
    while(t.hasNext()) {
        const n = t.next()
        len++
    }
    t = thisArg[tGetter]()
    // Handle negative value for "begin"
    let start = begin || 0;
        start = (start >= 0) ? start : Math.max(0, len + start);

    // Handle negative value for "end"
    let upTo = (typeof end == 'number') ? Math.min(end, len) : len;
    if (end !== undefined && end < 0) {
        upTo = len + end;
    }
    const size = upTo - start
    arr = []
    while (t.hasNext() && i < upTo) {
        const k = t.next()
        if (i >= start) {
            arr.push(k)
        }
        i++
    }
    return arr
}