# GAWS

## TypeScript modules for writing powerful AdWords Scripts quickly & efficiently

[![npm](https://img.shields.io/npm/v/@gaws/gaws.svg)](https://npm.im/@gaws/gaws)
[![npm](https://img.shields.io/npm/l/@gaws/gaws.svg)](https://npm.im/@gaws/gaws)
[![npm](https://img.shields.io/npm/dm/@gaws/gaws.svg)](https://npm.im/@gaws/gaws)

## Table of Contents

* [Installation](#installation)
* [Getting Started](#getting-started)

## Installation

```bash
npm install @gaws/gaws
```

---

## Getting Started

The quickest way to get started is to clone [the starter repo](https://github.com/jafaircl/gaws-starter). The starter uses [Rollup](https://github.com/rollup/rollup) to build the bundle. One of rollup's features is tree shaking. Any functions that are not called will be removed from the bundled output. AdWords Scripts require a "main" function to run. To keep this function in your bundled output, you will need to call it. The easiest way to do this is to use an Immediately Invoked Function Expression (IIFE). e.g.

```javascript
(function main(){

  // your code...

})();
```

But, in some cases, IIFEs can cause a script to miss iterations. So, the safest way to make sure you function remains in your bundled output is to call it then remove the call when you move your script to AdWords.

```javascript
function main(){

  // your code

}

main(); // remove this from your bundled output
```

---

## Usage

### Iterators

An iterator takes as an input an object containing the following AdWords selectors as properties:

* `entity`: any AdWords entity i.e. `AdWordsApp.keywords()`, `AdWordsApp.campaigns()`, etc.
* `conditions`: an array of conditions i.e. `['Impressions > 100','Clicks > 0']`
* `dateRange`: either an AdWords date string or object
* `order`: specifies the ordering of the returned entities
* `ids`: adds a collection of IDs as a condition
* `limit`: limits the number of returned entities to the specified value

Only the `entity` property is required. More information on valid inputs for conditions, date ranges, order values and ids can be found [here](https://developers.google.com/adwords/scripts/docs/reference/adwordsapp/adwordsapp_campaignselector).

Methods available for Iterators mirror the following native JavaScript Array methods:

* `every`
* `filter`
* `find`
* `findIndex`
* `forEach`
* `map`
* `reduce`
* `slice`
* `some`

The `length` property is also available. The following is a very basic example which logs the name of each ad group with at least 100 impressions over the last 7 days:

```typescript
import { Iterator } from '@gaws/core'

function main() {
    const iterator = new Iterator({
        entity: AdWordsApp.adGroups(),
        conditions: ['Impressions > 100'],
        dateRange: 'LAST_7_DAYS'
    })

    iterator.forEach(group => Logger.log(group.getName()))
}
main()
```

### Reports

Documentation coming soon. They are very similar to Iterators. The underlying method logic is the same.

### HTML

You can create and import HTML templates for emails (or any other use) and interpolate values similar to handlebars, mustache, etc. Let's set up two html templates and a css file:

```html
<!-- template.html -->
<!doctype html>
<html>
    <head>
        <style>
            {{ style }}
        </style>
    </head>
    <body>
        <table>
            <thead>
                <td>AdGroup</td>
                <td>Clicks</td>
                <td>Impressions</td>
                <td>Conversions</td>
            </thead>
            <tbody>
                {{ rows }}
            </tbody>
        </table>
    </body>
</html>

<!-- row.html -->
<tr>
    <td>{{ name }}</td>
    <td>{{ clicks }}</td>
    <td>{{ impressions }}</td>
    <td>{{ conversions }}</td>
</tr>
```

```css
/* styles.css */
table {
    color: blue
}
```

You can use the following script to fill out your template and send an email with every ad group that has at least one click in the last 7 days:

```typescript
import { Iterator } from '@gaws/core'
import { Template } from '@gaws/html'
import template from './template.html'
import row from './row.html'
import styles from './styles.css'

const dateRange = 'LAST_7_DAYS'

function main() {
    
    const cells = new Iterator({
        entity: AdWordsApp.adGroups(),
        conditions: ['Clicks > 0'],
        dateRange: dateRange
    }).reduce((str, group) => {
        const stats = group.getStatsFor(dateRange)
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
    
    MailApp.sendEmail({
        to: 'example@example.com',
        subject: 'testing',
        htmlBody: html
    })
}
main()
```

### Facebook

You can interact with the Facebook Marketing API to get insights or modify an ad account. You will need an App ID, App Secret and a Marketing API Access Token. More information about the Marketing API is available [here](https://developers.facebook.com/docs/marketing-apis). Here is an example of getting lifetime performance from an ad account:

```typescript
import { Facebook } from '@gaws/facebook'
import { FB_APP_ID, FB_APP_SECRET, FB_MARKETING_API_TOKEN } from './keys'

const FB_AD_ACCOUNT_NUMBER = 'XXXXXXXXXXXXXXXXX'

function main() {

    const fb = new Facebook({
        appId: FB_APP_ID,
        appSecret: FB_APP_SECRET,
        marketingApiAccessToken: FB_MARKETING_API_TOKEN
    });

    const response = fb.getInsights(`act_${FB_AD_ACCOUNT_NUMBER}`, {
        fields: 'impressions,clicks',
        date_preset: 'lifetime'
    })

    Logger.log(response)
    // Do something with the response
}
```

Or get insights for each of the campaigns in an account:

```typescript
const response = fb.getInsights(`act_${FB_AD_ACCOUNT_NUMBER}`, {
    summary: 'insights'
}, 'campaigns')
```