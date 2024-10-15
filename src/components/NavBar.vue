<template>
    <header class="flex justify-between item-center p-6 bg-opacity-50 relative z-20">
        <div>
            <img src="@\assets\logo.webp" alt="Profile picture TURNACO Jordan" class="w-12 rounded-custom-50">
        </div>
        <div class="md:hidden z-30">
            <button type="button" 
            class="block focus:outline-none" 
            @click="isMenuOpen = !isMenuOpen" 
            >
                <span v-if="isMenuOpen" class="text-5xl" >
                    <img src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" alt="close" width="50" h="50">
                </span>
                <span v-else class="text-5xl">
                    <img src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png" alt="menu" width="50" h="50">
                </span>
            </button>
        </div>
        <!-- Nav Links-->
        <nav
        :class="['fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row', 
        isMenuOpen ? 'block' : 'hidden']"
 f
        >
            <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                <li v-for="item in Menu" :key="item.name">
                    <a :href="item.link" class="block text-white transition hover:text-Primary ease-linear text-2xl md:text-lg"
                    click="scrollToSection(item.href)"
                    >{{item.name}}</a>
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
    {name: 'CV', link: '/cv'}

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
