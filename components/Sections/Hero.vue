<script setup>
import { ChevronDown, Menu, Play } from "lucide-vue-next";
import { onMounted } from "vue";

// Ensure video plays properly on all devices
onMounted(() => {
  const video = document.querySelector("video");

  if (video) {
    // Force video to play even on devices with autoplay restrictions
    const playVideo = () => {
      video.play().catch((error) => {
        console.log("Video play error:", error);
        // Add event listener for user interaction to play video
        document.addEventListener(
          "click",
          () => {
            video.play();
          },
          { once: true }
        );
      });
    };

    playVideo();

    // Make sure video is always playing
    video.addEventListener("pause", () => {
      video.play();
    });
  }
});
</script>
<template>
  <div class="relative min-h-screen bg-black overflow-hidden">
    <!-- Full-screen background video -->
    <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
    <video
      class="absolute inset-0 w-full h-full object-cover"
      autoplay
      loop
      muted
      playsinline
    >
      <source
        src="https://a.storyblok.com/f/271652/x/c4a3945939/hero-cut-1.mp4"
        type="video/mp4"
      />
    </video>

    <!-- Navigation -->
    <header class="relative z-20 px-6 py-4 flex justify-between items-center">
      <div class="flex items-center gap-8">
        <!-- Logo -->
        <div class="w-10 text-white text-center font-extrabold flex items-center h-10">
          Z

          <!-- <img src="" alt="Logo" class="w-full h-full" /> -->
        </div>

        <!-- Left Nav Items -->
        <div class="flex items-center gap-4">
          <div class="relative">
            <button
              class="bg-gray-200/90 text-black px-4 py-1.5 rounded-full transition-rounded hover:rounded-sm text-[9px] font-medium flex items-center"
            >
              PRODUCTS
              <ChevronDown class="ml-1 w-4 h-4" />
            </button>
          </div>
          <button
            class="bg-gray-200/90 text-black px-4 py-1.5 rounded-full transition-rounded hover:rounded-sm text-[9px] font-medium flex items-center"
          >
            WHITEPAPER
          </button>
        </div>
      </div>

      <!-- Right Nav Items -->
      <div class="flex items-center gap-2">
        <button
          class="hover:bg-gray-200/90 text-white hover:text-black px-4 py-1.5 rounded-none transition-rounded hover:rounded-full text-[9px] font-bold flex items-center"
        >
          NEXUS
          <ChevronDown class="ml-1 w-4 h-4" />
        </button>
        <button
          class="hover:bg-gray-200/90 text-white hover:text-black px-4 py-1.5 rounded-none transition-rounded hover:rounded-full text-[9px] font-bold flex items-center"
        >
          VAULT
          <ChevronDown class="ml-1 w-4 h-4" />
        </button>
        <button
          class="hover:bg-gray-200/90 text-white hover:text-black px-4 py-1.5 rounded-none transition-rounded hover:rounded-full text-[9px] font-bold flex items-center"
        >
          PROLOGUE
        </button>
        <button
          class="hover:bg-gray-200/90 text-white hover:text-black px-4 py-1.5 rounded-none transition-rounded hover:rounded-full text-[9px] font-bold flex items-center"
        >
          ABOUT
        </button>
        <button
          class="hover:bg-gray-200/90 text-white hover:text-black px-4 py-1.5 rounded-none transition-rounded hover:rounded-full text-[9px] font-bold flex items-center"
        >
          CONTACT
        </button>
        <button class="text-white">
          <Menu class="w-6 h-6" />
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="relative z-20 px-6 pt-2 flex flex-col h-[calc(100vh-80px)]">
      <div class="flex flex-col md:flex-row justify-between items-start h-full">
        <!-- Left Content -->
        <div class="md:w-1/2 mt-8 md:mt-6">
          <h1
            class="text-white text-8xl md:text-[180px] ZENTRY-Regular font-extrabold leading-none"
          >
            REDEFINE
          </h1>
          <div class="mt-2 text-white/90">
            <p class="text-lg">Enter the Metagame</p>
            <p class="text-lg leading-none">Unleash the Play Economy</p>
          </div>
          <button
            class="mt-8 bg-yellow-300/90 text-[10.8px] text-black px-4 py-2 rounded-full font-medium flex items-center hover:bg-yellow-300 transition-colors"
          >
            <Play class="mr-2 w-4 h-4" />
            WATCH TRAILER
          </button>
        </div>

        <!-- Right Content - Character Image -->
        <div class="md:w-1/2 flex justify-end items-end h-full">
          <h2
            class="text-white text-8xl md:text-[180px] ZENTRY-Regular font-extrabold leading-none"
          >
            GAMING
          </h2>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
html,
body {
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
  background: #000;
}

/* Custom animation for the character */
.character-animation {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
