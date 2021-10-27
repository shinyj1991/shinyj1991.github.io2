import { resolve } from 'path'

export default {
  target: 'static',
  head: {
    title: 'SIMPLIZM',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },
  server: {
    port: 8000
  },
  alias: {
    'images': resolve(__dirname, './assets/images')
  },
  css: [
    '@/assets/css/reset.scss',
    '@/assets/css/common.scss'
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
  ],
  modules: [
    ['nuxt-highlightjs', {style: 'obsidian'}],
    '@nuxt/content',
    '@nuxtjs/axios'
  ],
  styleResources: {
    scss: [
      '~/assets/css/_variable.scss',
      '~/assets/css/_mixin.scss'
    ]
  },
  build: {},
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/index.js',
    {src: '~/plugins/persistedState.js', ssr: true}
  ],
  router: {
    middleware: ['index']
  },
}
