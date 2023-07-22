<!--suppress ALL -->
<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import {getMessage} from 'virtual:chrome-i18n'

</script>

<template>
  <div>
    {{getMessage('title')}}
    <AppHeader/>
  </div>
</template>

<!-- language=json -->
<chrome-i18n lang="json" locale="uk">

{
  "$schema": "https://json.schemastore.org/browser.i18n.json",
  "title": {
    "message": "uk-title"
  }
}

</chrome-i18n>

<!-- language=json -->
<chrome-i18n lang="json" locale="en">

{
  "$schema": "https://json.schemastore.org/browser.i18n.json",
  "title": {
    "message": "en-title"
  }
}

</chrome-i18n>