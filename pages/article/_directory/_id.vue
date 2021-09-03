<template>
  <div class="article_wrap">
    <ArticleHead>
      <h1>{{ article.title }}</h1>
      <div class="info">
        <div class="date">마지막 수정 : {{ formatDate(article.createdAt) }}</div>
        <div class="writer">작성자 : {{ article.author }}</div>
      </div>
    </ArticleHead>
    <ArticleBody>
      <nuxt-content :document="article" />
    </ArticleBody>
  </div>
</template>

<script>
  export default {
    /*middleware () {
      console.log('middleware');
    },*/
    async asyncData({ $content, params, query }) {
      const article = await $content(params.directory, params.id).fetch()
      return {
        article
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
    },
    mounted() {
      console.log('mounted');
    },*/
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('ko', options)
      }
    }
  }
</script>

<style lang="scss" scoped>
.article_wrap {padding: 50px 50px 100px; max-width: 1000px;}
</style>