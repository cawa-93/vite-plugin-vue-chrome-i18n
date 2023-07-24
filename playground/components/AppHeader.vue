<!--suppress JsonStandardCompliance -->
<script setup lang="ts">
import {getMessage} from '../../src/getMessage.ts'
import {getCurrentInstance} from "vue";
console.log(getCurrentInstance())
</script>

<template>
<div>
  header
  {{getMessage('title')}}
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

<!-- language=json -->
<chrome-i18n locale="en">

{
  "$schema": "https://json.schemastore.org/browser.i18n.json",
  "title": {
    "message": "en-title"
  }
}

</chrome-i18n>