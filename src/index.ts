import {Plugin} from "vite";
import {getMessageKeyFromPath} from "./getMessageKeyFromPath.ts";

export type Locale = {
    message: string,
    description?: string,
    placeholders?: Record<string, {
        content: string,
        example?: string
    }>
}

export type PluginOptions = {
    initialLocales?: Record<string, Record<string, Locale>>
}

export default function ({initialLocales = {}}: PluginOptions = {}): Plugin {

    const idToMessagesMap = new Map<string, Record<string, Locale>>()

    return {
        name: 'vite-plugin-vue-chrome-i18n',
        enforce: 'pre',

        transform(code, id) {
            if (!/\.vue\?vue&type=chrome-i18n/.test(id)) {
                return
            }

            idToMessagesMap.set(id, JSON.parse(code))

            return {
                code: `export default Comp => { Comp['chrome-i18n-prefix'] = '${getMessageKeyFromPath(id)}' }`,
                map: {mappings: ''},
            }
        },

        generateBundle() {
            const allLocales = initialLocales

            for (const [id, messages] of idToMessagesMap) {
                const locale = id.match(/(?<=&locale=)[^&]+(?=&)/)?.[0]
                if (!locale) {
                    continue
                }
                const prefix = getMessageKeyFromPath(id)
                allLocales[locale] = {
                    ...(allLocales[locale] || {}),
                    ...Object.fromEntries(
                        Object.entries(messages)
                            .filter(([k]) => !k.startsWith('$'))
                            .map(([key, value]) => {
                                return [ prefix + '_' + key, value]
                            })
                    )
                }
            }

            for (const localeCode in allLocales) {
                this.emitFile({
                    type: 'asset',
                    fileName: `_locales/${localeCode}/messages.json`,
                    source: JSON.stringify(allLocales[localeCode]),
                    needsCodeReference: false
                })
            }

        }
    }
}


