<!--suppress ALL -->
<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import {getMessage} from '../src/getMessage.ts'

</script>

<template>
  <div>
    {{getMessage('title')}}
    <AppHeader/>
  </div>
</template>

<chrome-i18n locale="uk">
{
  "$schema": "https://json.schemastore.org/browser.i18n.json",
  "title": {
    "message": "uk-title"
  }
}

</chrome-i18n>

<chrome-i18n locale="en">
{
  "$schema": "https://json.schemastore.org/browser.i18n.json",
  "title": {
    "message": "en-title"
  }
}

</chrome-i18n>