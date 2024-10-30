<template>
  <section class="projects-section py-12 ">
    <div v-if="currentProject" class="project flex items-center justify-between mb-12">
      <div class="project-details w-1/2">
        <h2 class="text-5xl font-bold text-white mb-4">{{ currentProject.id < 10 ? '0' + currentProject.id : currentProject.id }}</h2>
        <h3 class="text-3xl font-semibold text-white mb-2">{{ currentProject.title }}</h3>
        <p class="text-gray-400 text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.
        </p>
        <p class="text-Secondary text-lg mb-6">
          {{ currentProject.technologies }}
        </p>
        <div class="flex gap-4">
          <a :href="currentProject.linkLive" target="_blank" class="project-btn flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full">
            <i class="fas fa-arrow-right text-xl text-white"></i>
          </a>
          <a :href="currentProject.linkGit" target="_blank" class="project-btn flex items-center justify-center w-12 h-12 bg-Tertiary rounded-full">
            <i class="devicon-github-original text-3xl text-white"></i>
          </a>
        </div>
      </div>
      <div class="project-image w-1/2">
        <img :src="currentProject.image" :alt="currentProject.title" class="w-full h-auto object-cover rounded-lg shadow-lg" />
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <button @click="prevProject" class="prev-btn w-10 h-10 bg-Secondary flex items-center justify-center rounded-lg" :disabled="index === 0">
        <i class="fas fa-chevron-left text-white"></i>
      </button>
      <button @click="nextProject" class="next-btn w-10 h-10 bg-Secondary flex items-center justify-center rounded-lg ml-2" :disabled="index === projects.length - 1">
        <i class="fas fa-chevron-right text-white"></i>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import TestImage from '../assets/Test.png';
import TestImage2 from '../assets/logo.webp';

const projects = [
  {
    id: 1,
    title: 'Frontend Project',
    description: 'Creative Home Simplify Your Furniture',
    technologies: 'Html 5, Css 3, Javascript',
    image: TestImage,
    linkGit: 'https://github.com/project1',
    linkLive: 'https://liveproject1.com'
  },
  {
    id: 2,
    title: 'Frontend Project',
    description: 'Creative Home Simplify Your Furniture',
    technologies: 'Html 5, Css 3, Javascript',
    image: TestImage2,
    linkGit: 'https://github.com/project1',
    linkLive: 'https://liveproject1.com'
  },
];

const index = ref(0);

const currentProject = computed(() => projects[index.value]);

const prevProject = () => {
  if (index.value > 0) {
    index.value--;
  }
};

const nextProject = () => {
  if (index.value < projects.length - 1) {
    index.value++;
  }
};
</script>

<style scoped>
.projects-section {
  padding: 12rem;
}

.project-details h2 {
  font-size: 5rem;
  color: #fff;
}

.project-details h3 {
  font-size: 3rem;
  color: #fff;
}

.project-btn {
  width: 48px;
  height: 48px;
}

.project-image img {
  border-radius: 1rem;
}

.prev-btn, .next-btn {
  width: 40px;
  height: 40px;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
