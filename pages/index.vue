<template>
  <div class="w-full">
    <Banner class="mb-10" />
    <section class="w-full max-w-[1280px] mx-auto px-2 mb-10">
      <h2 class="text-3xl font-semibold mb-4">Наші публікації 📚</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <li v-for="article in articles" :key="article.id">
          <nuxt-link
            :to="article.slug"
            class="flex flex-col font-semibold group"
          >
            <img :src="article.img" class="mb-2" />
            <span class="block text-xl group-hover:underline">{{
              article.title
            }}</span>
          </nuxt-link>
        </li>
      </ul>
    </section>
    <section class="py-10 bg-[#EFF5FF]">
      <div class="max-w-[1280px] mx-auto px-2">
        <h2 class="text-3xl font-semibold mb-6">Екстрені служби ☎️</h2>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          <li class="bg-white rounded-xl px-6 py-5 flex flex-col">
            <h4 class="text-xl font-semibold mb-3">
              Тяжкі розлади у дітей та дорослих
            </h4>
            <p class="mb-3">
              Анонімна пітримка і поради щодо проблем в особистих стосунках,
              булінгу, непорозумінь з батьками, насильства чи жорсткого
              поводження.
            </p>
            <a
              href="tel:+380675949446"
              class="text-lg text-[#2E81FF] hover:underline font-semibold"
              >(067) 594 94 46</a
            >
            <a
              href="tel:+380675949446"
              class="text-lg text-[#2E81FF] hover:underline font-semibold"
              >(067) 594 94 46</a
            >
          </li>
          <li class="bg-white rounded-xl px-6 py-5 flex flex-col">
            <h4 class="text-xl font-semibold mb-3">
              Домашнє насильство та гендерна дискримінація
            </h4>
            <p class="mb-3">
              Національна гаряча лінія із запобігання домашнім насильствам,
              торгівлі людьми та гендерної дискримінації.
            </p>
            <a
              href="tel:0800500335"
              class="text-lg text-[#2E81FF] hover:underline font-semibold"
              >0 800 500 335</a
            >
            <a
              href="tel:116123"
              class="text-lg text-[#2E81FF] hover:underline font-semibold"
              >116 123</a
            >
          </li>
          <li class="bg-white rounded-xl px-6 py-5 flex flex-col">
            <h4 class="text-xl font-semibold mb-3">
              Національна лінія підтримки для дітей
            </h4>
            <p class="mb-3">
              Анонімна пітримка і поради щодо проблем в особистих стосунках,
              булінгу, непорозумінь з батьками, насильства чи жорсткого
              поводження.
            </p>
            <a
              href="tel:0800500225"
              class="text-lg text-[#2E81FF] hover:underline font-semibold"
              >0 800 500 225</a
            >
            <a
              href="tel:116 111"
              class="text-lg text-[#2E81FF] hover:underline font-semibold"
              >116 111</a
            >
          </li>
          <li class="bg-white rounded-xl px-6 py-5 flex flex-col">
            <h4 class="text-xl font-semibold mb-3">
              Національна лінія запобігання суїцидам 24/7
            </h4>
            <p class="mb-3">
              Національна професійна цілодобова лінія з питань запобігання
              самогубств та профілактики психічного здоров’я «Lifeline Ukraine».
            </p>
            <a
              href="tel:7333"
              class="text-lg text-[#2E81FF] hover:underline font-semibold"
              >7333</a
            >
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async fetch() {
    const rawData = await fetch(
      "https://cdn.contentful.com/spaces/h3esem346nk5/environments/master/entries?access_token=4rWD-EHrzp2ysdEAcD5jlxwH36nXBOPLd15BOeapFDQ"
    ).then((r) => r.json());

    this.articles = rawData.items.map((item) => {
      const img = rawData.includes.Asset.find(
        ({ sys }) => sys.id === item.fields.img.sys.id
      );

      return {
        ...item.fields,
        img: img.fields.file.url.replace("//", "https://"),
        id: item.sys.id,
      };
    });
  },
  fetchOnServer: false,
  data() {
    return {
      articles: [],
    };
  },
};
</script>
