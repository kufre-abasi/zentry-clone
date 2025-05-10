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
        <div class="w-10 h-10">
          <img src="" alt="Logo" class="w-full h-full" />
        </div>

        <!-- Left Nav Items -->
        <div class="flex items-center gap-4">
          <div class="relative">
            <button
              class="bg-gray-200/90 text-black px-4 py-1.5 rounded-full text-sm font-medium flex items-center"
            >
              PRODUCTS
              <ChevronDown class="ml-1 w-4 h-4" />
            </button>
          </div>
          <button
            class="bg-transparent border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium"
          >
            WHITEPAPER
          </button>
        </div>
      </div>

      <!-- Right Nav Items -->
      <div class="flex items-center gap-6">
        <button class="text-white text-sm font-medium flex items-center">
          NEXUS
          <ChevronDown class="ml-1 w-4 h-4" />
        </button>
        <button class="text-white text-sm font-medium flex items-center">
          VAULT
          <ChevronDown class="ml-1 w-4 h-4" />
        </button>
        <button class="text-white text-sm font-medium">PROLOGUE</button>
        <button class="text-white text-sm font-medium">ABOUT</button>
        <button class="text-white text-sm font-medium">CONTACT</button>
        <button class="text-white">
          <Menu class="w-6 h-6" />
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="relative z-20 px-6 pt-16 flex flex-col h-[calc(100vh-80px)]">
      <div class="flex flex-col md:flex-row justify-between items-start h-full">
        <!-- Left Content -->
        <div class="md:w-1/2 mt-8 md:mt-10">
          <h1
            class="text-white text-8xl md:text-[150px] font-extrabold tracking-tighter leading-none"
          >
            REDEFINE
          </h1>
          <div class="mt-4 text-white/90">
            <p class="text-xl">Enter the Metagame</p>
            <p class="text-xl">Unleash the Play Economy</p>
          </div>
          <button
            class="mt-8 bg-yellow-300/90 text-black px-6 py-3 rounded-full font-medium flex items-center hover:bg-yellow-300 transition-colors"
          >
            <Play class="mr-2 w-5 h-5" />
            WATCH TRAILER
          </button>
        </div>

        <!-- Right Content - Character Image -->
        <div class="md:w-1/2 flex justify-end items-end h-full">
          <img
            src=" "
            alt="Game character"
            class="character-animation max-h-[80vh] object-contain z-10"
          />
          <h2
            class="text-white text-7xl md:text-[150px] font-extrabold tracking-tighter absolute bottom-4 right-6"
          >
            GAMING
          </h2>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="relative z-20 px-6 py-2 text-white/60 text-sm">
      <a href="https://zentry.com/whitepaper" class="hover:text-white transition-colors">
        https://zentry.com/whitepaper
      </a>
    </footer>
  </div>
</template>

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

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");

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
