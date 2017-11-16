// @gaws specific
interface GawsIteratorInput {
    entity: AdWordsSelector<AdWordsEntity>
    conditions?: Array<string>
    dateRange?: string
    order?: Array<string>
    ids?: Array<number>
    limit?: number | undefined
}

interface GawsReportInput {
    select: Array<string> | string
    from: string
    where?: Array<string> | string
    during?: Array<string> | string
    options?: Object
}

interface GawsCoreSharedMethods {
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

interface GawsComponent {
    render?(): string
}

interface GawsComponentInput {
    tag: string
    props: Object
    content?: string | GawsComponent
}
