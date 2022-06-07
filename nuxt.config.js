import { resolve } from "path";

export default {
  target: "static",
  head: {
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      { charset: "utf-8" },
      // { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "viewport", content: "width=600, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ],
    script: [
      { defer: true, hid: 'adsense', src: '/adsense.js' }
    ]
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
  buildModules: [
    "@nuxt/typescript-build",
    ['@nuxtjs/google-gtag', {
      id: 'G-7K43G97QC2',
      config: {
        anonymize_ip: true, // anonymize IP 
        send_page_view: false, // might be necessary to avoid duplicated page track on page reload
        linker: {
          domains: ['exit5.co.kr']
        }
      },
      debug: true, // enable to track in dev mode
      disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
    }],
  ],
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

      const articles = await $content('/score', {
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
