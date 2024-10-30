<template>
    <section 
        class="mt-14 min-h-screen bg-gray-900 text-white py-12 px-8" 
        data-aos="zoom-in" 
        data-aos-duration="1000"
    >
        <div class="container mx-auto flex flex-col max-w-screen-lg md:flex-row gap-12 justify-center  p-8 ">
            <div class="w-full md:w-1/3">
                <h2 class="text-4xl font-bold">My Journey</h2>
                <p class="mt-4 text-gray-400">
                    Discover me by clicking on the different elements
                </p>
                <div class="mt-8 flex flex-col space-y-4">
                    <button 
                        v-for="(tab, index) in tabs"
                        :key="index"
                        @click="setActiveTab(index)"
                        :class="{'bg-Secondary text-Tertiary': activeTab === index, 'bg-gray-800': activeTab !== index }"
                        class="px-6 py-3 rounded-md focus:outline-none transition-colors"
                    >
                        {{ tab }}
                    </button>
                </div>
            </div>

            <div class="w-full md:w-2/3">
                <h2 class="text-4xl font-bold">{{ tabs[activeTab] }}</h2>
                <p class="mt-4 text-gray-400">
                    Discover my journey and skills by navigating through the sections.
                </p>

                <!-- Experiences and Education -->
                <transition name="fade">
                    <div v-if="activeTab === 0 || activeTab === 1" class="scrollable-content mt-8">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div 
                                v-for="(item, index) in activeItems" 
                                :key="item.id" 
                                class="bg-gray-800 p-6 rounded-lg"
                                :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'" 
                                :data-aos-delay="index * 100"
                                data-aos-duration="500" 
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                            >
                                <span class="text-sm text-Secondary">{{ item.date }}</span>
                                <h3 class="mt-2 text-xl font-bold">{{ item.title || item.name }}</h3>
                                <p class="mt-2 text-gray-400">{{ item.company }}</p>
                            </div>
                        </div>
                    </div>
                </transition>

                <!-- Skills -->
                <transition name="fade">
                    <div v-if="activeTab === 2" class="scrollable-content mt-8">
                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            <div 
                                v-for="(skill, index) in activeItems" 
                                :key="skill.id" 
                                class="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center"
                                :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'" 
                                :data-aos-delay="index * 100"
                                data-aos-duration="500" 
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                            >
                                <span class="text-sm text-Tertiary">{{ skill.name }}</span>
                                <i :class="skill.image" class="text-4xl mt-2"></i>
                            </div>
                        </div>
                    </div>
                </transition>

                <!-- About Me -->
                <transition name="fade">
                    <div v-if="activeTab === 3" class="scrollable-content mt-8">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div class="bg-gray-800 p-6 rounded-lg" data-aos="fade-up">
                                <h3 class="text-xl font-bold">Full Name</h3>
                                <p class="mt-2 text-gray-400">{{ aboutMe.fullName }}</p>
                            </div>
                            <div class="bg-gray-800 p-6 rounded-lg" data-aos="fade-up">
                                <h3 class="text-xl font-bold">Nationality</h3>
                                <p class="mt-2 text-gray-400">{{ aboutMe.nationality }}</p>
                            </div>
                            <div class="bg-gray-800 p-6 rounded-lg" data-aos="fade-up">
                                <h3 class="text-xl font-bold">Phone</h3>
                                <p class="mt-2 text-gray-400">{{ aboutMe.phone }}</p>
                            </div>
                            <div class="bg-gray-800 p-6 rounded-lg" data-aos="fade-up">
                                <h3 class="text-xl font-bold">Email</h3>
                                <p class="mt-2 text-gray-400">{{ aboutMe.email }}</p>
                            </div>
                            <div class="bg-gray-800 p-6 rounded-lg" data-aos="fade-up">
                                <h3 class="text-xl font-bold">Languages Spoken</h3>
                                <p class="mt-2 text-gray-400">{{ aboutMe.languages }}</p>
                            </div>
                            <div class="bg-gray-800 p-6 rounded-lg" data-aos="fade-up">
                                <h3 class="text-xl font-bold">Looking For</h3>
                                <p class="mt-2 text-gray-400">{{ aboutMe.lookingFor }}</p>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const tabs = ['Experience', 'Education', 'Skills', 'About Me'];
const activeTab = ref(0);

const experiences = [
    { id: 1, date: 'April - June 2024', title: 'Web Development Internship', company: 'Minkey' },
];

const educations = [
    { id: 1, date: '2023 - Present', title: 'Bachelor 2', company: 'EPSI - LaDefense' },
    { id: 2, date: '2020 - 2023', title: 'Baccalaureate Specialization: Math, N.S.I, S.I', company: 'Lycée Van Dongen - Lagny s/ marne ' },
];

const skills = [
    { id: 1, image: "devicon-html5-plain colored", name: "HTML" },
    { id: 2, image: "devicon-css3-plain colored", name: "CSS" },
    { id: 3, image: "devicon-javascript-plain colored", name: "JavaScript" },
    { id: 4, image: "devicon-php-plain colored", name: "PHP" },
    { id: 5, image: "devicon-react-original colored", name: "React" },
    { id: 6, image: "devicon-react-original colored", name: "React Native" },
    { id: 7, image: "devicon-python-plain colored", name: "Python" },
    { id: 8, image: "devicon-c-plain colored", name: "C" },
    { id: 9, image: "devicon-dart-plain colored", name: "Dart" },
    { id: 10, image: "devicon-flutter-plain colored", name: "Flutter" },
    { id: 11, image: "devicon-tailwindcss-plain colored", name: "Tailwind CSS" },
    { id: 12, image: "devicon-mysql-plain colored", name: "SQL" },
    { id: 13, image: "devicon-firebase-plain colored", name: "Firebase" },
    { id: 14, image: "devicon-github-original colored", name: "GitHub" }
];

// Personal information
const aboutMe = {
    fullName: 'Turnaco Jordan',
    nationality: 'French',
    phone: '+33 6 12 30 20 68',
    email: 'jordanturnaco@gmail.com',
    languages: 'French, English',
    lookingFor: 'Internship and Apprenticeship',
};

// Compute active items based on the active tab
const activeItems = computed(() => {
    if (activeTab.value === 0) return experiences;
    if (activeTab.value === 1) return educations;
    if (activeTab.value === 2) return skills;
    return [];
});

// Initialize AOS on component mount
onMounted(() => {
    AOS.init();
});

// Function to set the active tab
const setActiveTab = (index) => {
    activeTab.value = index;
};
</script>

<style>
    .fade-enter-active, .fade-leave-active {
    transition: opacity 0.1s ease;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .scrollable-section {
        max-height: 300px;  
        overflow-y: auto;
        overflow-x: hidden;
        padding-right: 8px;
    }

    .shadow-custom {
        box-shadow: 0px 0px 10px 5px #9302ec;
    }
</style>
