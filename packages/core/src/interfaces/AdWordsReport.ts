import { CoreSharedInterface } from './CoreSharedInterface'

export interface AdWordsReportInput {
    select: Array<string> | string
    from: string
    where?: Array<string> | string
    during?: Array<string> | string
    options?: Object
}

export interface AdWordsReport extends CoreSharedInterface, AdWordsReportInput {
    awql(): AdWordsReport
}