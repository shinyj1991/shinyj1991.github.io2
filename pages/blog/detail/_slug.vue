<template>
  <div class="page-blog-detail">
    <div v-if="article.extension === '.md'">
      <config-head :title="pageTitle" />
      <article-head>
        <h1>{{ article.title }}</h1>
        <div class="info">
          <div class="date">작성일 : {{ article.date }}</div>
        </div>
      </article-head>
      <article-body>
        <nuxt-content :document="article" />
      </article-body>
    </div>

    <div v-if="article.contentType === 'MUSIC_SCORE'">
      <config-head :title="`EXIT 5 | ${article.singer} - ${article.title}`" />
      <article-head>
        <h1>{{ article.singer }} - {{ article.title }}</h1>
        <div class="info">
          <div class="date">작성일 : {{ article.date }}</div>
        </div>
      </article-head>
      <score-chord :music="article" />
    </div>
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