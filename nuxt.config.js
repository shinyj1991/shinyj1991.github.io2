import { resolve } from "path";

export default {
  target: "static",
  head: {
    title: "EXIT 5",
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "감성 힐링 출구, 5번 출구" },
      { name: "keyword", content: "기타, 악보, 코드" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  loading: {
    color: "#ffffff",
    height: "2px",
    throttle: 500,
  },
  server: {
    port: 8000,
  },
  alias: {
    images: resolve(__dirname, "./assets/images"),
  },
  css: ["@/assets/css/reset.scss"],
  components: true,
  buildModules: ["@nuxt/typescript-build"],
  modules: [
    ["nuxt-highlightjs", { style: "obsidian" }],
    "@nuxt/content",
    "@nuxtjs/axios",
  ],
  content: {
    dir: 'content/public'
  },
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content');

      const articles = await $content('/music', {
        deep: true
      }).only(['path']).fetch();

      const categories = [];
      const result = [];

      articles.map(article => {
        let directories = article.path.split('/');

        directories.shift();
        directories.pop();

        let depth = directories.length;
        let path = '';

        result.push(`/article/detail/${article.path.replace(/\//gi, '_').slice(1)}`);
  
        for (let i = 0; i < depth; i++) {
          path += i > 0 ? '_' + directories[i] : directories[i];
          if (!categories.includes(path)) {
            categories.push(path);
            result.push(`/article/list/${path}`);
          }
        }

        result.push('/article/list');
      });

      return result
    }
  },
  styleResources: {
    scss: ["~/assets/css/_variable.scss", "~/assets/css/_mixin.scss"],
  },
  build: {},
  plugins: ["~/plugins/index.js"],
  router: {
    middleware: ["index"],
  }
};
