<template>
  <ArticleList 
    :articles="articles" 
    :page="page" 
    :lastPage="lastPage" 
    :loading="loading" 
    @incrementPage="page++" 
  />
</template>

<script>
export default {
  /*middleware () {
    console.log('middleware');
  },*/
  async asyncData({ $content, params }) {
    const visibleLength = 10;
    const totalArticles = await $content(params.directory).only([]).fetch();
    const lastPage = Math.ceil(totalArticles.length / visibleLength);

    let articles = await $content(params.directory, { deep: true })
      .limit(visibleLength)
      .sortBy('date', 'desc')
      .fetch()

    return {
      visibleLength,
      lastPage,
      directory: params.directory,
      articles: articles
    }
  },
  /*beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  fetch() {
    console.log('fetch');
  },*/
  mounted() {
    // console.log('mounted', this.articles);
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
      let articles = await this.$content(this.directory)
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