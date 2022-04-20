import { resolve } from "path";

export default {
  target: "static",
  head: {
    title: "SIMPLIZM",
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "" },
      {
        name: "keyword",
        content: "프론트엔드, 프론트엔드개발자, 웹퍼블리셔, SIMPLIZM, 심플리즘",
      },
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
  styleResources: {
    scss: ["~/assets/css/_variable.scss", "~/assets/css/_mixin.scss"],
  },
  build: {},
  plugins: ["~/plugins/index.js"],
  router: {
    middleware: ["index"],
  },
};
