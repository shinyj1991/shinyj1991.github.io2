<template>
  <article-list 
    :articles="articles" 
    :page="page" 
    :lastPage="lastPage" 
    :loading.sync="loading" 
    @incrementPage="page++" 
  />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const visibleLength = 10;
    const totalArticles = await $content(params.category).only([]).fetch();
    const lastPage = Math.ceil(totalArticles.length / visibleLength);

    let articles = await $content(params.category, { deep: true })
      .limit(visibleLength)
      .sortBy('date', 'desc')
      .fetch()

    return {
      visibleLength,
      lastPage,
      category: params.category,
      articles: articles
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
      let articles = await this.$content(this.category)
        .sortBy('date', 'desc')
        .limit(this.visibleLength)
        .skip(this.visibleLength * oldVal)
        .fetch()

      setTimeout(() => {
        this.loading = false;
        this.articles = [...this.articles, ...articles];
      }, 500);
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