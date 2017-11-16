import { CoreShared } from './shared'
// import { AdWordsIteratorInput } from './interfaces/AdWordsIterator'

export class Iterator extends CoreShared implements AdWordsSelector<AdWordsEntity> {
    public entity: AdWordsSelector<AdWordsEntity>
    public conditions?: Array<string>
    public dateRange?: string
    public order?: Array<string>
    public ids?: Array<number>
    public limit?: (number | undefined)

    // https://github.com/Microsoft/TypeScript/issues/3895
    constructor(input: Partial<GawsIteratorInput> & { entity: AdWordsSelector<AdWordsEntity> }) {
        super()
        this.entity = input.entity || AdWordsApp.campaigns()
        this.conditions = input.conditions || []
        this.dateRange = input.dateRange || 'ALL_TIME'
        this.order = input.order || []
        this.ids = input.ids || []
        this.limit = input.limit
        this.arg = this.select()
    }

    private chainMethods(method: string, arr: Array<string | number>, entity = this.entity): AdWordsSelector<AdWordsEntity> {
        return arr.reduce((_sel: any, _val: string) => {
            return _sel[method](_val)
        }, entity)
    }

    private addConditions(): AdWordsSelector<AdWordsEntity> {
        return this.chainMethods('withCondition', this.conditions)
    }

    private addOrder(): AdWordsSelector<AdWordsEntity> {
        return this.chainMethods('orderBy', this.order, this.addConditions())
    }

    private addIds(): AdWordsSelector<AdWordsEntity> {
        return this.chainMethods('withIds', this.ids, this.addOrder())
    }

    public select(): AdWordsSelector<AdWordsEntity> {
        return this.addIds()
                   .forDateRange(this.dateRange)
                   .withLimit(this.limit)
    }

    public get(): AdWordsIterator<AdWordsEntity> {
        return this.select().get()
    }
}
