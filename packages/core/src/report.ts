import { CoreShared } from './shared'

export class Report extends CoreShared implements AdWordsReport {
    public select: Array<string> | string
    public from: string 
    public where?: Array<string> | string
    public during?: Array<string> | string
    public options?: Object

    // https://github.com/Microsoft/TypeScript/issues/3895
    constructor(input: Partial<GawsReportInput> & { select: Array<string> | string, from: string }) {
        super()
        this.select = this.variableType(input.select, ', ') // input.select && isArray(input.select) ? input.select.join(', ') : input.select
        this.from = input.from
        this.where = this.variableType(input.where, ' AND ') // input.where && isArray(input.where) ? input.where.join(' AND ') : input.where
        this.during = this.variableType(input.during, ',') // input.during && isArray(input.during) ? input.during.join(',') : input.during
        this.options = input.options
        this.arg = this.awql()
    }

    private variableType(val: Array<string> | string | undefined, joiner): string {
        if (val instanceof Array) {
            return val.join(joiner)
        } else {
            return val || ''
        }
    }

    public awql(): AdWordsReport {
        let query = `SELECT ${this.select} FROM ${this.from}`
        if (this.where !== undefined) {
            query += ` WHERE ${this.where}`
        }
        if (this.during !== undefined) {
            query += ` DURING ${this.during}`
        }
        if (this.options !== undefined) {
            return AdWordsApp.report(query, this.options)
        } else {
            return AdWordsApp.report(query)
        }
    }

    public rows(): AdWordsReportRowIterator {
        return this.awql().rows()
    }

    public exportToSheet(sheet: GoogleAppsScript.Spreadsheet.Sheet): void {
        return this.awql().exportToSheet(sheet)
    }

    public getColumnHeader(columnName: string): any {
        return this.awql().getColumnHeader(columnName)
    }
}
