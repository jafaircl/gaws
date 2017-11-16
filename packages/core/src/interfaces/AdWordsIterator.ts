import { CoreSharedInterface } from './CoreSharedInterface'

export interface AdWordsIteratorInput {
    entity: AdWordsSelector<AdWordsEntity>
    conditions?: Array<string>
    dateRange?: string
    orderBy?: Array<string>
    ids?: Array<number>
    limit?: number | undefined
}