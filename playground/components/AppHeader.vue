<!--suppress JsonStandardCompliance -->
<script setup lang="ts">

import {getMessage} from 'virtual:chrome-i18n'
</script>

<template>
<div>
  header
  {{getMessage('title')}}
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