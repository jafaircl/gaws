import { CoreSharedInterface } from './interfaces/CoreSharedInterface'
import every from './methods/_every'
import filter from './methods/_filter'
import find from './methods/_find'
import findIndex from './methods/_findIndex'
import forEach from './methods/_forEach'
import length from './methods/_length'
import map from './methods/_map'
import reduce from './methods/_reduce'
import some from './methods/_some'
import slice from './methods/_slice'

export class CoreShared implements GawsCoreSharedMethods {
    arg: AdWordsSelector<AdWordsEntity> | AdWordsReport

    public get length(): number {
        return length(this.arg)
    }
    /**
     * The every() method tests whether all elements in the iterator pass the test implemented by the provided function.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
     * 
     * @param {Function} callback 
     * @returns {boolean} 
     * @memberof Iterator
     */
    public every (callback: Function): boolean {
        return every(callback, this.arg)
    }

    /**
     * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
     * 
     * @param {Function} callback 
     * @returns {Array<AdWordsScripts.AdWordsEntity | AdWordsScripts.AdWordsApp.ReportRow>} 
     * @memberof Iterator
     */
    public filter (callback: Function): Array<AdWordsEntity | AdWordsReportRow> {
        return filter(callback, this.arg)
    }

    /**
     * The find() method returns the value of the first element in the iterator that satisfies the provided testing function. Otherwise undefined is returned.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
     * 
     * @param {Function} callback 
     * @returns {AdWordsScripts.AdWordsEntity} 
     * @memberof Iterator
     */
    public find (callback: Function): AdWordsEntity | AdWordsReportRow {
        return find(callback, this.arg)
    }

    /**
     * The findIndex() method returns the index of the first element in the iterator that satisfies the provided testing function. Otherwise -1 is returned.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
     * 
     * @param {Function} callback 
     * @returns {(Number | undefined)} 
     * @memberof Iterator
     */
    public findIndex (callback: Function): (Number | undefined) {
        return findIndex(callback, this.arg)
    }

    /**
     * The forEach() method executes a provided function once for each iterator element.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
     * 
     * @param {Function} callback 
     * @returns {void} 
     * @memberof Iterator
     */
    public forEach (callback: Function): void {
        return forEach(callback, this.arg)
    }

    /**
     * The map() method creates a new array with the results of calling a provided function on every element in the calling iterator.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
     * 
     * @param {Function} callback 
     * @returns {Array<any>} 
     * @memberof Iterator
     */
    public map<T> (callback: Function): Array<T> {
        return map(callback, this.arg)
    }
    
    /**
     * The reduce() method applies a function against an accumulator and each element in the iterator (from left to right) to reduce it to a single value.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
     * 
     * @param {Function} callback 
     * @param {*} initialValue 
     * @returns {*} 
     * @memberof CoreShared
     */
    public reduce<Accumulator> (callback: Function, initialValue: Accumulator): Accumulator {
        return reduce(callback, initialValue, this.arg)
    }

    /**
     * The slice() method returns a shallow copy of a portion of an iterator into a new array object selected from begin to end (end not included). The original iterator will not be modified.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
     * 
     * @param {number} [start=0] 
     * @param {number} [end] 
     * @returns {(Array<AdWordsScripts.AdWordsEntity | AdWordsScripts.AdWordsApp.ReportRow>)} 
     * @memberof CoreShared
     */
    public slice (start = 0, end?: number): Array<AdWordsEntity | AdWordsReportRow> {
        return slice(this.arg, start, end)
    }

    /**
     * The some() method tests whether some element in the iterator passes the test implemented by the provided function.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
     * 
     * @param {Function} callback 
     * @returns {boolean} 
     * @memberof Iterator
     */
    public some (callback: Function): boolean {
        return some(callback, this.arg)
    }
}