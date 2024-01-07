<script setup>
import { ref } from 'vue'
import { useJsonPrettier } from '../composables/prettier.js'
import data from '../info/about.json'

var str = JSON.stringify(data, undefined, 4)
const info = useJsonPrettier(str)
</script>
<template>
  <div>
    <p class="text-xs leading-7 whitespace-pre" v-html="info"></p>
  </div>
</template>

