<script setup>
import Editor from '../components/Editor.vue'
import Project from '../components/Project.vue'
import { ref, reactive } from 'vue'
import info from '../info/projects.json'

const projects = reactive(info)
</script>
<template>
  <div class="bg-[#21262A] text-white">
    <div class="max-w-[1000px] mx-auto px-7 py-10">
      <div class="flex items-end">
        <span class="font-bold text-3xl font-mono"> Aung Moe Myint Thu </span>
        <div class="ml-2 w-5 h-2 bg-white animate-fade-cursor"></div>
      </div>
      <div class="my-10 opacity-70 text-sm">
        Hi, I'm a web developer passionate about building full-stack applications. Check out my side
        projects below.
      </div>
      <Editor class="w-full min-h-[400px]"></Editor>
      <div class="w-full flex flex-col justify-center my-3">
        <span class="text-lg text-center font-bold my-3 underline">Projects</span>
        <Project
          v-for="project in projects"
          :title="project.title"
          :body="project.body"
          :tags="project.tags"
          :source="project.source"
        ></Project>
      </div>
      <div class="text-xs font-extralight text-center w-full mt-3">Made by aungmoe © 2024</div>
    </div>
  </div>
</template>
