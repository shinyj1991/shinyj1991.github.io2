<template>
  <article-list 
    :articles="articles" 
    :page.sync="page" 
    :lastPage="lastPage"
    @incrementPage="page++" 
  />
</template>

<script>
export default {
  async asyncData({ $content, query }) {
    const visibleLength = 10;
    const path = query.category ? query.category.replace(/_/gi, '/') : '/';
    const totalArticles = await $content(`${path}`, { deep: true }).only([]).fetch();
    const lastPage = Math.ceil(totalArticles.length / visibleLength);

    let articles = await $content(`${path}`, { deep: true })
      .limit(visibleLength)
      .sortBy('date', 'desc')
      .fetch()

    return {
      visibleLength,
      lastPage,
      category: query.category,
      articles: articles
    }
  },
  data() {
    return {
      page: 1
    }
  },
  computed: {
    path: function() {
      return this.$route.query.category ? this.$route.query.category.replace(/_/gi, '/') : '/'
    }
  },
  watchQuery: ['category'],
  watch: {
    page: async function(newVal, oldVal) {
      let articles = await this.$content(this.path, { deep: true })
        .sortBy('date', 'desc')
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