<template>
  <div class="page-blog-detail">
    <config-head
      :title="pageTitle"
    />
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
    async asyncData({ $content, params, store }) {
      const article = await $content(params.slug.replace(/_/gi, '/'), params.id).fetch()

      console.log(article);

      return {
        pageTitle: `SIMPLIZM | ${article.title}`,
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
.page-blog-detail {
  padding: 50px 50px 100px;
  max-width: 1000px;

  @media screen and (max-width: 1200px) {
    padding: 50px 20px 50px;
  }
}
</style>