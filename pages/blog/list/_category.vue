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
  data() {
    return {
      page: 1,
      visibleLength: 0,
      lastPage: 0,
      category: null,
      articles: []
    }
  },
  computed: {
    path: function() {
      return this.$route.params.category ? this.$route.params.category.replace(/_/gi, '/') : '/'
    }
  },
  watch: {
    path: async function() {
      this.get_articles()
    },
    page: async function(newVal, oldVal) {
      let articles = await this.$content(this.path, { deep: true })
        .sortBy('date', 'desc')
        .limit(this.visibleLength)
        .skip(this.visibleLength * oldVal)
        .fetch()

      this.articles = [...this.articles, ...articles];
    }
  },
  created() {
    console.log('created', this.path)
    this.get_articles()
  },
  methods: {
    async get_articles() {
      const path = this.$route.params.category ? this.$route.params.category.replace(/_/gi, '/') : '/';
      const visibleLength = 10;
      const totalArticles = await this.$content(path, { deep: true }).only([]).fetch();

      // console.log(totalArticles.map(file => `/blog/${file.path.replace(/\//gi, '_').slice(1)}`))

      let articles = await this.$content(path, { deep: true })
        .limit(visibleLength)
        .sortBy('date', 'desc')
        .fetch()

      this.visibleLength = visibleLength;
      this.lastPage = Math.ceil(totalArticles.length / visibleLength);
      this.articles = articles;
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ko', options)
    }
  }
}
</script>