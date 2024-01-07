<script setup>
import { ref } from 'vue'
import { useJsonPrettier } from '../composables/prettier.js'
import data from '../info/contact.json'
// const info = ref(JSON.stringify(data, null, 2))

var str = JSON.stringify(data, undefined, 4)
const info = useJsonPrettier(str)
</script>
<template>
  <div>
    <p class="text-xs leading-7 whitespace-pre" v-html="info"></p>
  </div>
</template>
