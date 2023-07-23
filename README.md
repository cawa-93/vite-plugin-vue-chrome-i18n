[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner-direct-single.svg)](https://stand-with-ukraine.pp.ua)

---

...


## Terms of use<sup>[[?]](https://github.com/Tyrrrz/.github/blob/master/docs/why-so-political.md)</sup>

By using this project or its source code, for any purpose and in any shape or form, you grant your **implicit agreement** to all the following statements:

- You **condemn Russia and its military aggression against Ukraine**
- You **recognize that Russia is an occupant that unlawfully invaded a sovereign state**
- You **support Ukraine's territorial integrity, including its claims over temporarily occupied territories of Crimea and Donbas**
- You **reject false narratives perpetuated by Russian state propaganda**


## Installation

```bash
npm i -D vite-plugin-vue-chrome-i18n
```

## Usage

```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueChromeI18n from "vite-plugin-vue-chrome-i18n";

export default defineConfig({
    plugins: [
        vue(),
        VueChromeI18n(),
    ],
})
```

```vue
<!-- Any vue single file component -->
<script setup>
import {getMessage} from "virtual:chrome-i18n";
</script>

<chrome-i18n lang="json" locale="uk">
{
"$schema": "https://json.schemastore.org/browser.i18n.json",
    "title": {
        "message": "uk-title"
    }
}
</chrome-i18n>

<chrome-i18n lang="json" locale="en">
{
    "$schema": "https://json.schemastore.org/browser.i18n.json",
    "title": {
        "message": "en-title"
    }
}
</chrome-i18n>

<template>
  <div>{{ getMessage('title') }}</div>
</template>
```

### TypeScrip

... 
### Why vite
