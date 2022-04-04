<template>
  <header
    class="max-w-[1280px] mx-auto px-2 h-20 flex items-center justify-between"
  >
    <nuxt-link to="/" class="flex items-center group">
      <img
        src="/logo.svg"
        class="w-[32px] h-[32px] sm:w-[52px] sm:h-[52px] sm:mr-3 mr-2 group-hover:scale-110 transition-transform"
      />
      <span class="text-[18px] sm:text-[20px] leading-none font-bold"
        >Є - Спокій</span
      >
    </nuxt-link>
    <button
      class="rounded-full bg-[#2E81FF] px-5 py-2 text-xs sm:text-base text-white hover:scale-105 transition-transform"
    >
      Отримати допомгу
    </button>
  </header>
</template>
