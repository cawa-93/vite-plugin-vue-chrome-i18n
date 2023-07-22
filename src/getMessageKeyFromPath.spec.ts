import {expect, test} from 'vitest'
import {getMessageKeyFromPath} from "./getMessageKeyFromPath.ts";


const cases = [
    {
        input: 'C:/Users/kozac/dev/vite-plugin-vue-chrome-i18n/playground/AppHeader.vue?vue&type=chrome-i18n&index=1&locale=en&lang.json',
        expected: 'AppHeader_vue',
        root: 'C:/Users/kozac/dev/vite-plugin-vue-chrome-i18n/playground',
    },
    {
        input: 'C:/Users/kozac/dev/vite-plugin-vue-chrome-i18n/playground/AppHeader.vue?vue&type=chrome-i18n&index=1&locale=en&lang.json',
        expected: 'AppHeader_vue',
        root: 'C:\\Users\\kozac\\dev\\vite-plugin-vue-chrome-i18n\\playground'
    },
    {
        input: 'C:/Users/kozac/dev/vite-plugin-vue-chrome-i18n/playground/components/AppHeader.vue?vue&type=chrome-i18n&index=1&locale=en&lang.json',
        expected: 'components_AppHeader_vue',
        root: 'C:/Users/kozac/dev/vite-plugin-vue-chrome-i18n/playground',
    },
    {
        input: 'C:/Users/kozac/dev/vite-plugin-vue-chrome-i18n/playground/components/AppHeader.vue?vue&type=chrome-i18n&index=1&locale=en&lang.json',
        expected: 'components_AppHeader_vue',
        root: 'C:\\Users\\kozac\\dev\\vite-plugin-vue-chrome-i18n\\playground'
    }
]


test('getMessageKeyFromPath', () => {
    for (const {expected, input, root} of cases) {
        expect(getMessageKeyFromPath(input, root)).toBe(expected)
    }
})
