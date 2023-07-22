import {Plugin} from "vite";
import {getMessageKeyFromPath} from "./getMessageKeyFromPath.ts";

export function main(): Plugin {

    const idToMessagesMap = new Map<string, string>()

    return {
        name: 'vite-plugin-vue-chrome-i18n',
        enforce: 'pre',
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