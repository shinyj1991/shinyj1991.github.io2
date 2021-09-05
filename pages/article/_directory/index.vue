<template>
  <div class="blog_index">
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ path: `/article/${directory}/${article.slug}` }">
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
  </div>
</template>

<script>
export default {
  /*middleware () {
    console.log('middleware');
  },*/
  async asyncData({ $content, params }) {

  console.log('async', $content);
    const visibleLength = 10;
    const articles = await $content(params.directory)
      // .only(['title', 'description', 'slug', 'author', 'updatedAt', 'date'])
      .sortBy('createdAt', 'desc')
      .fetch()

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

<style lang="scss" scoped>
.blog_index {padding: 50px 50px 100px; max-width: 1000px;
  ul {
    li {
      a {padding: 12px 24px; display: block;
        &:hover {background: #2c343e;}
        .subject {font-weight: 700; font-size: 16px;}
        .info {display: flex; margin-top: 10px; font-size: 12px;
          .author {margin-left: 15px;}
        }
      }
    }
  }
  .btn_area {margin-top: 30px;
    button {padding: 12px 30px; background: #f7f7f7; transition: all 300ms;
      &:hover {background: #3273eb; color: #ffffff;}
    }
  }
}
</style>