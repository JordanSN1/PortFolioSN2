<template>
  <section class="relative w-full" data-aos="fade-up" data-aos-duration="1000">
    <div class="absolute top-0 inset-x-0 h-64 flex items-start" data-aos="fade-down">
      <div class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl invisible opacity-40"></div>
      <div class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] opacity-40 blur-2xl"></div>
    </div>
    <div class="w-full px-5 sm:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
      <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-10 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
        <div class="lg:py-6" data-aos="fade-right">
          <div class="text-center lg:text-left">
            <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
              Hello, I am <span class="animated-text">TURNACO Jordan</span>
            </h1>
          </div>
          
          <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl typing-text text-base md:text-lg" data-aos="fade-left">
              Turnaco Jordan - 20 years old

Passionate about technology, I dedicate myself to programming and exploring the challenges offered by the digital world. My goal is to specialize in cybersecurity, combining my development skills with expertise in pentesting. I am constantly looking for new opportunities to learn and grow in this fascinating field.
          </p>

          <div class="flex items-center gap-3 pt-9 flex-col lg:mx-0 sm:flex-row sm:w-max sm:ml-0 md:flex-row md:justify-center md:self-center md:mx-auto" data-aos="zoom-in">
            <button class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center mr-3">
              <span class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-Secondary border-2 border-transparent"></span>
              <span class="relative flex items-center justify-center text-Tertiary font-bold">Hire Me</span>
            </button>
            <button class="border border-Secondary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
              <div class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative">
                <div class="svg-container">
                  <svg class="download-icon" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="download-arrow" d="M13 9L9 13M9 13L5 9M9 13V1" 
                          stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 
                          21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                          stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  <div class="download-loader text-white hidden"></div>
                </div>
                <a href="/CV.pdf" download="CV.pdf" class="pl-2 text-Tertiary">Download my CV</a>
              </div>
            </button>
          </div>
        </div>
        <div class="lg:h-full md:full" data-aos="fade-up">
          <div class="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative">
            <div class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 -[calc(80% + 20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to Primary blur-2xl"></div>
            <div class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-full shadow-lg border border-Tertiary">
              <img src="../assets/jordanpdp.jpeg" alt="Hero Picture" width="500" height="auto" loading="lazy" class="w-full h-full rounded-full object-cover">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animated-text {
    background: linear-gradient(90deg, #f59e0b, #570cac, #f59e0b );
    background-size: 250%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-animation 3s linear infinite;
}

@keyframes gradient-animation {
  0% {
      background-position: 0% 60%;
  }
  50% {
      background-position: 100% 20%;
  }
  100% {
      background-position: 0% 20%;
  }
}
</style>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
</script>
