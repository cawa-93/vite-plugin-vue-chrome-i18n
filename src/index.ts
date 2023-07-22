import {Plugin} from "vite";
import {getMessageKeyFromPath} from "./getMessageKeyFromPath.ts";

export function main(): Plugin {

    const idToMessagesMap = new Map<string, string>()

    return {
        name: 'vite-plugin-vue-chrome-i18n',
        enforce: 'pre',

        resolveId(source, importer) {
            if (source !== 'virtual:chrome-i18n') {
                return
            }

            const importerFile = importer?.split('?')[0] + '?virtual-chrome-i18n'

            return {id: `\0${importerFile}`}
        },

        load(id) {
            if (!id.endsWith('?virtual-chrome-i18n')) {
                return
            }

            const importer = id.replaceAll('\0', '').split('?').at(0) as string
            console.log({importer})
            const messageScope = getMessageKeyFromPath(importer)

            return `export const getMessage = m => chrome.i18n.getMessage('${messageScope}_'+m)`
        },

        transform(code, id) {
            if (!/\.vue\?vue&type=chrome-i18n/.test(id)) {
                return
            }

            idToMessagesMap.set(id, JSON.parse(code))
        },

        generateBundle() {
            const allLocales: Record<string, any> = {}

            for (const [id, messages] of idToMessagesMap) {
                const locale = id.match(/(?<=&locale=)[^&]+(?=&)/)?.[0]
                if (!locale) {
                    continue
                }
                allLocales[locale] = {
                    ...(allLocales[locale] || {}),
                    ...Object.fromEntries(
                        Object.entries(messages)
                            .filter(([k]) => !k.startsWith('$'))
                            .map(([key, value]) => {
                                return [getMessageKeyFromPath(id) + '_' + key, value]
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