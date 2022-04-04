<template>
  <div
    class="w-full max-w-[1280px] mx-auto py-8 md:py-12 bg-[#EFF5FF] xl:rounded-3xl px-10 bg-no-repeat bg-right flex flex-col sm:flex-row justify-between"
    style="background-image: url(/banner.webp)"
  >
    <div>
      <h1
        class="font-bold text-2xl md:text-4xl leading-tight max-w-[500px] mb-4 [text-shadow:0_0_8px_rgb(255,255,255)]"
      >
        Психологічна підтримка від психотерапевтів-волонтерів для українців.
      </h1>
      <span
        class="block text-lg max-w-[360px] font-semibold mb-4 [text-shadow:0_0_8px_rgb(255,255,255)]"
      >
        Професійна психологічна допомога надається українською мовою.
      </span>
      <button
        @click.prevent="clickHandler"
        class="rounded-full bg-[#2E81FF] px-5 py-2 text-white w-max transition-transform hover:scale-105"
      >
        Отримати допомгу
      </button>
    </div>
    <ul class="bg-white px-4 py-3 h-max rounded-lg mt-5 sm:-mt-6 sm:-mx-5">
      <li><a class="hover:underline" href="tel:+380947124706">+380 94 712 4706</a></li>
      <li><a class="hover:underline" href="tel:+380947124879">+380 94 712 4879</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    clickHandler() {
      window.zE("messenger", "open");
    },
  },
};
</script>
