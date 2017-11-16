
export interface CoreSharedInterface {
    arg: AdWordsSelector<AdWordsEntity> | AdWordsReport
    length: number
    every(cb: Function): boolean
    filter(cb: Function): Array<AdWordsEntity | AdWordsReportRow>
    find(cb: Function): AdWordsEntity | AdWordsReportRow
    findIndex(cb: Function): (Number | undefined)
    forEach(cb: Function): void
    map<T>(cb: Function): Array<T>
    reduce<A>(cb: Function, iv: A): A
    slice(b: number, e: number): Array<AdWordsEntity | AdWordsReportRow>
    some(cb: Function): boolean
}