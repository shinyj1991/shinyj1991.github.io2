<template>
  <ul v-if="categories.length > 0">
    <li v-for="category in categories" :key="category.path" :class="{on: active[category.depth] === category.name}">
      <nuxt-link :to="`/blog?category=${category.path}`">{{ category.name }}</nuxt-link>
      <aside-item :class="`depth-${category.depth + 1}`" :categories="category.child" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    categories: Array,
  },
  computed: {
    active: function() {
      console.log(this.$route.query)
      console.log(this.$route.params)
      let active = []

      if (this.$route.path.split('/')[1] === 'blog') {
        if (this.$route.params.slug) {
          // 상세
          active = this.$route.params.slug.split('_')
        } else {
          // 목록
          if (this.$route.query.category) {
            active = this.$route.query.category.split('_')
          }
        }
      }

      return active
    }
  },
}
</script>