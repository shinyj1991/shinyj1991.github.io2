<template>
  <ArticleList>
    <ul>
      <li v-for="(article, index) of articles" :key="index">
        <NuxtLink :to="{ path: `/blog${article.path}` }">
          <div class="category">{{ article.dir.replace('/', '') }}</div>
          <div class="subject">{{ article.title }}</div>
          <div class="info">
            <div class="date">{{ article.date }}</div>
            <div class="author">{{ article.author }}</div>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <div class="btn_area" v-if="page < lastPage && !loading">
      <button @click="page++">더보기</button>
    </div>
    <div class="loading" v-if="loading">Loading...</div>
  </ArticleList>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const visibleLength = 10;
    let articles = await $content({ deep: true })
      .sortBy('date', 'desc')
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
      page: 1,
      loading: false
    }
  },
  watch: {
    page: async function(newVal, oldVal) {
      this.loading = true;
      let articles = await this.$content({ deep: true })
        .sortBy('date', 'desc')
        .limit(this.visibleLength)
        .skip(this.visibleLength * oldVal)
        .fetch()

      setTimeout(() => {
        this.loading = false;
        this.articles = [...this.articles, ...articles];
      }, 300);
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