<template>
  <div v-if="false" />
</template>

<script>
import meta from '@/utils/meta';

export default {
  props: {
    title: {
      type: String,
      required: true,
      default: meta.title
    },
    description: {
      type: String,
      required: false,
      default: meta.description
    },
    keywords: {
      type: String,
      required: false,
      default: meta.keywords
    },
    image: {
      type: String,
      required: false,
      default: null
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.title
        },
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title
        }
      ]
    }
  }
}
</script>
