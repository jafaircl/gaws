export class Builder {
    entity: any
    props: Object

    constructor (entity, input?: Object) {
        this.entity = entity
        this.props = input
    }

    create() {
        let builder = this.entity
        for (let i in this.props) {
            if (i.slice(0, 4) === 'with') {
                builder = builder[i](this.props[i])
            } else {
                const method = i[0].toUpperCase() + i.slice(1)
                builder = builder['with' + method](this.props[i])
            }
        }
        return builder
    }

    build() {
        return this.create().build()
    }

    result() {
        return this.build().getResult()
    }
}

export function blobFromUrl(url: string): GoogleAppsScript.Base.Blob {
    return UrlFetchApp.fetch(url).getBlob()
}

export function formatMediaFromUrl(url, name, method){
  return AdWordsApp.adMedia()[method]()
    .withName(name)
    .withData(blobFromUrl(url))
    .build()
    .getResult();
}