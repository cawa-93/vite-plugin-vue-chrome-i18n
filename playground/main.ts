import {createApp} from 'vue'
import App from './App.vue'

// @ts-expect-error
globalThis.chrome = {
    i18n: {
        // @ts-expect-error
        getMessage(m) {
            return m
        }
    } as any
}

createApp(App).mount('#app')

