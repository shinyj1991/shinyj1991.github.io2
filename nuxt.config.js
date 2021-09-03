import { resolve } from 'path'

export default {
  target: 'static',
  head: {
    title: 'shinyj1991.github.io',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  alias: {
    'images': resolve(__dirname, './assets/images')
  },
  css: [
    '@/assets/css/reset.scss',
    '@/assets/css/common.scss'
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
  ],
  modules: [
    ['nuxt-highlightjs', {style: 'obsidian'}],
    '@nuxt/content'
  ],
  styleResources: {
    scss: [
      '~/assets/css/_variable.scss',
      '~/assets/css/_mixin.scss'
    ]
  },
  build: {}
}
