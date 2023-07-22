import {Plugin} from "vite";

export function main (): Plugin {
    return {
        name: 'vite-plugin-vue-chrome-i18n',
        generateBundle() {
            console.log('HELLO UKR')
        }
    }
}