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
  async asyncData({ $content, params, store }) {
    const path = params.category ? params.category.replace(/_/gi, '/') : '/';
    const visibleLength = 10;
    const totalArticles = await $content(path, { deep: true }).only([]).fetch();
    const lastPage = Math.ceil(totalArticles.length / visibleLength);

    let articles = await $content(path, { deep: true })
      .limit(visibleLength)
      .sortBy('date', 'desc')
      .fetch()

    console.log(articles);

    return {
      visibleLength,
      lastPage,
      articles,
      page: 1,
    }
  },
  watch: {
    page: async function(newVal, oldVal) {
      let articles = await this.$content(this.path, { deep: true })
        .sortBy('date', 'desc')
        .limit(this.visibleLength)
        .skip(this.visibleLength * oldVal)
        .fetch()

      this.articles = [...this.articles, ...articles];
    }
  }
}
</script>