import { createApp } from 'vue'
import App from './App.vue'
globalThis.chrome = {
    i18n: {
        getMessage(m) {
            return m
        }
    }
}

createApp(App).mount('#app')

