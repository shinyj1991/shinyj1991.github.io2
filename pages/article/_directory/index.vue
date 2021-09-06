<template>
  <ArticleList>
    <ul>
      <li v-for="article of articles" :key="article.path">
        <NuxtLink :to="{ path: article.url }">
          <div class="category">{{ article.dir.replace('/', '') }}</div>
          <div class="subject">{{ article.title }}</div>
          <div class="info">
            <div class="date">{{ formatDate(article.createdAt) }}</div>
            <div class="author">{{ article.author }}</div>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <div class="btn_area" v-if="page < lastPage">
      <button @click="page++">더보기</button>
    </div>
  </ArticleList>
</template>

<script>
export default {
  /*middleware () {
    console.log('middleware');
  },*/
  async asyncData({ $content, params }) {
    const visibleLength = 10;
    let articles = await $content(params.directory, { deep: true })
      // .only(['title', 'description', 'slug', 'author', 'updatedAt', 'date'])
      .sortBy('createdAt', 'desc')
      .fetch()

    articles = articles.map(article => {
      article.url = '/article';
      article.split = article.path.split('/');
      for (var i = 1; i < article.split.length; i++) {
        var prefix = i < 3 ? '/' : '-';
        article.url += `${prefix}${article.split[i]}`;
      }
      return article;
    });

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
      page: 1
    }
  },
  watch: {
    page: async function(newVal, oldVal) {
      const articles = await this.$content(this.directory)
        .only(['title', 'description', 'slug', 'author', 'updatedAt', 'date'])
        .sortBy('createdAt', 'desc')
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