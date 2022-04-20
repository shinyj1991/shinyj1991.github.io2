<template>
  <div class="article_wrap">
    <article-head>
      <h1>{{ article.title }}</h1>
      <div class="info">
        <div class="date">작성일 : {{ article.date }}</div>
        <div class="writer">작성자 : {{ article.author }}</div>
      </div>
    </article-head>
    <article-body>
      <nuxt-content :document="article" />
    </article-body>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content(params.category, params.id).fetch()
      return {
        article
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
.article_wrap {padding: 50px 50px 100px; max-width: 1000px;
  @media screen and (max-width: 1200px) {padding: 50px 20px 50px;}
}
</style>