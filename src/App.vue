<template>
  <div class="bg-[#111827] min-h-screen">
    <NavBar />
    <CustomScrollbar style="height: 100vh;">
      <HeroSection />
      <Skills />
      <Projects />
    </CustomScrollbar>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const NavBar = defineAsyncComponent(() => import('./components/NavBar.vue'));
const HeroSection = defineAsyncComponent(() => import('./components/HeroSection.vue'));
const Skills = defineAsyncComponent(() => import('./components/skills.vue'));
const Projects = defineAsyncComponent(() => import('./components/projects.vue'));
</script>

<style>
/* Styles globaux si nécessaire */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #111827; /* Darker background for the track */
}

::-webkit-scrollbar-thumb {
  background-color: #f59e0b; /* Blue color for the thumb */
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #f59e0b; /* Darker blue on hover */
}
</style>
