<script setup>
import About from './About.vue'
import Contact from './Contact.vue'
import { ref } from 'vue'

const currentTab = ref('About')

const tabs = {
  About,
  Contact
}
</script>

<template>
  <div class="flex flex-col rounded-md bg-primary overflow-hidden">
    <div class="flex bg-[#4D565F] pt-1 rounded-t-md text-[11px]">
      <div class="w-10 px-1 flex justify-around items-center">
        <div class="rounded-full w-2 h-2 bg-red-500"></div>
        <div class="rounded-full w-2 h-2 bg-yellow-500"></div>
        <div class="rounded-full w-2 h-2 bg-green-500"></div>
      </div>
      <button
        v-for="(_, tab) in tabs"
        :key="tab"
        class="transition-all pr-10 py-2 hover:bg-gray-500 rounded-t-[5px] px-2"
        :class="{ 'bg-primary  hover:bg-primary ': currentTab === tab }"
        @click="currentTab = tab"
      >
        {{ tab + '.json' }}
      </button>
    </div>

    <component :is="tabs[currentTab]" class="w-full h-full p-4 font-custom"></component>
  </div>
</template>
