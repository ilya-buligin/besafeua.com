<template>
  <div class="w-full">
    <div class="py-10 sm:px-10 px-2 mb-10 bg-[#EFF5FF]">
      <div
        v-if="article"
        class="flex flex-col sm:flex-row justify-between items-center max-w-[1280px] mx-auto px-2"
      >
        <h1
          class="text-2xl sm:text-5xl max-w-[300px] sm:max-w-none font-semibold mr-2 sm:mr-7 mb-4 sm:mb-0"
        >
          {{ this.article.title }}
        </h1>
        <img class="max-w-[300px] sm:max-w-[350px]" :src="article.img" />
      </div>
    </div>
    <article class="prose w-full max-w-[1280px] mx-auto px-2 md:pr-96">
      <RichTextRenderer v-if="article" :document="article.content" />
    </article>
  </div>
</template>

<script>
import RichTextRenderer from "contentful-rich-text-vue-renderer";

export default {
  components: {
    RichTextRenderer,
  },
  async fetch() {
    const rawData = await fetch(
      "https://cdn.contentful.com/spaces/h3esem346nk5/environments/master/entries?access_token=4rWD-EHrzp2ysdEAcD5jlxwH36nXBOPLd15BOeapFDQ"
    ).then((r) => r.json());

    const articles = rawData.items.map((item) => {
      const img = rawData.includes.Asset.find(
        ({ sys }) => sys.id === item.fields.img.sys.id
      );

      return {
        ...item.fields,
        img: img.fields.file.url.replace("//", "https://"),
        id: item.sys.id,
      };
    });

    this.article = articles.find(
      ({ slug }) => slug === this.$route.params.slug
    );
  },
  data() {
    return {
      article: null,
    };
  },
};
</script>
