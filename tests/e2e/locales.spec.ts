import {expect, it} from 'vitest'
import {readFile} from 'node:fs/promises'

const locales = ['en', 'uk']


for (const locale of locales) {
    it(locale, async () => {
        const messagesContent = await readFile(`./playground/dist/_locales/${locale}/messages.json`, {encoding: 'utf-8'})
        await expect(messagesContent).toMatchFileSnapshot(`./snapshots/${locale}/messages.snapshots.json`)
    })
}
