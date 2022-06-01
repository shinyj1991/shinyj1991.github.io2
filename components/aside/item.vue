<template>
  <ul v-if="categories.length > 0">
    <li v-for="category in categories" :key="category.path" :class="{on: blog_depth[category.depth] === category.name}">
      <nuxt-link :to="`/article/list/${category.path}`">{{ category.name }}</nuxt-link>
      <aside-item :class="`depth-${category.depth + 1}`" :categories="category.child" />
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    categories: Array,
  },
  computed: {
    ...mapState({
      blog_depth: state => state.blog_depth,
      params: state => state.params,
      id: state => state.id
    })
  },
}
</script>