<template>
  <ArticleList>
    <ul>
      <li v-for="article of articles" :key="article.path">
        <NuxtLink :to="{ path: `/article${article.path}` }">
          <div class="category">{{ article.dir.replace('/', '') }}</div>
          <div class="subject">{{ article.title }}</div>
          <div class="info">
            <div class="date">{{ formatDate(article.createdAt) }}</div>
            <div class="author">{{ article.author }}</div>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <div class="btn_area" v-if="page < lastPage">
      <button @click="page++">더보기</button>
    </div>
  </ArticleList>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const visibleLength = 10;
    const articles = await $content({ deep: true })
      .sortBy('createdAt', 'desc')
      .fetch()

    const totalArticles = articles.length;
    const lastPage = Math.ceil(totalArticles / visibleLength);

    const firstArticles = articles.slice(0, visibleLength);

    return {
      visibleLength,
      lastPage,
      directory: params.directory,
      articles: firstArticles
    }
  },
  data() {
    return {
      page: 1
    }
  },
  watch: {
    page: async function(newVal, oldVal) {
      const articles = await this.$content(this.directory)
        .only(['title', 'description', 'slug', 'author', 'updatedAt', 'date'])
        .sortBy('createdAt', 'desc')
        .limit(this.visibleLength)
        .skip(this.visibleLength * oldVal)
        .fetch()

      this.articles = [...this.articles, ...articles];
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ko', options)
    }
  }
}
</script>

<style lang="scss" scoped>
.index {padding: 50px;}
</style>