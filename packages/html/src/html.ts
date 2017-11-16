
export class Template {
    public str: string

    constructor(template: string) {
        this.str = template
    }

    public render(o) {
        return this._interpolate(this.str)(o)
    }

    private _interpolate(str) {
        return function (o) {
            return str.replace(/\{{2}\s*((\w|\.)+)\s*\}{2}/g, (a, b) => {
                const r = o[b]
                return typeof r === 'string' || typeof r === 'number' ? r : a
            });
        }
    }
}
export const selfClosing = [
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
]

export function forEach (arr: Array<any>, tag?: string, attr?: Object) {
    if(!tag){ tag = 'div' }
    let attrStr = ''
    if(attr){
        for (const i in attr) {
            attrStr += `${i}="${attr[i]}"`
        }
    }
    if(selfClosing.indexOf(tag) > -1) {
        return arr.reduce((sum, i) => {
            return sum + `<${tag} ${i}${attrStr !== '' ? ' ' + attrStr : ''}>`
        }, '')
    } else {
        return arr.reduce((sum, i) => {
            return sum + `<${tag}${attrStr !== '' ? ' ' + attrStr : ''}>${i}</${tag}>`
        }, '')
    }
    
}

/* Example:
import { Template } from '@gaws/html'
import { Iterator } from '@gaws/core'
import template from './template.html'
import row from './row.html'
import styles from './styles.css'

function main() {
    
    const cells = new Iterator({
        entity: AdWordsApp.adGroups(),
        conditions: ['Clicks > 0'],
        dateRange: 'LAST_7_DAYS'
    }).reduce((str, group) => {
        const stats = group.getStatsFor('LAST_7_DAYS')
        return str + new Template(row).render({
            name: group.getName(),
            clicks: stats.getClicks(),
            impressions: stats.getImpressions(),
            conversions: stats.getConversions()
        })
    }, '')

    const html = new Template(template).render({
        style: styles,
        rows: cells
    })

    Logger.log(html);
    
    MailApp.sendEmail({
        to: 'jfaircloth@cocg.co',
        subject: 'testing',
        htmlBody: html
    })
}
*/