<template>
    <header class="flex justify-between item-center p-6 bg-opacity-50 relative z-20">
        <div>
            <img src="@\assets\logo.webp" alt="Profile picture TURNACO Jordan" class="w-12 rounded-custom-50">
        </div>
        <div class="md:hidden z-30">
            <button type="button" 
            class="block focus:outline-none" 
            @click="isMenuOpen = !isMenuOpen">
                <span v-if="isMenuOpen" class="text-5xl">
                    <img src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" alt="close" width="50" height="50">
                </span>
                <span v-else class="text-5xl">
                    <img src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png" alt="menu" width="50" height="50">
                </span>
            </button>
        </div>
        <!-- Nav Links-->
        <nav
        :class="['fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row', 
        isMenuOpen ? 'block' : 'hidden']"
        >
            <ul class="flex flex-col items-center space-x-15 space-y-10 md:flex-row md:space-x-5 md:space-y-0">
                <li v-for="item in Menu" :key="item.name">
                    <a 
                      :href="item.link" 
                      class="block text-white pl-5 transition hover:text-Secondary ease-linear text-2xl md:text-lg"
                      @click="scrollToSection(item.link)"
                    >
                      {{item.name}}
                    </a>
                </li>
                <!-- CV Button -->
                <li>
                    <a 
                      href="/cv" 
                      class="px-6 py-2 bg-Secondary text-white rounded-full hover:bg-Tertiary hover:text-Secondary transition ease-linear text-xl md:text-lg"
                    >
                      CV
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import {ref} from 'vue'

const Menu = ref([
    {name: 'About', link: '/about'},
    {name: 'Skills', link: '/skills'},
    {name: 'Projects', link: '/projects'},
    {name: 'Contact', link: '/contact'},
]);

const isMenuOpen = ref(false);

const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>
