<template>
  <div class="page-music-list">
    <config-head
      :title="pageTitle"
    />
    <article-list
      :articles="articles"
      :page.sync="page"
      :lastPage="lastPage"
      @incrementPage="page++"
    />
    <div class="btn_area">
      <button 
        type="button" 
        v-if="page < lastPage && !is_loading" 
        @click="more_articles"
      >더보기</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  async asyncData({ $content, params, store }) {
    const path = params.category ? params.category.replace(/_/gi, '/') : '/';
    const visibleLength = 10;
    const totalArticles = await $content(path, { deep: true }).only([]).fetch();
    const lastPage = Math.ceil(totalArticles.length / visibleLength);

    let articles = await $content(path, { deep: true })
      .limit(visibleLength)
      .sortBy('date', 'desc')
      .fetch();

    return {
      pageTitle: `EXIT 5 | ${params.category ? params.category.replace(/_/gi, ' ').toUpperCase() : 'MUSIC'}`,
      visibleLength,
      lastPage,
      articles,
      page: 1,
    }
  },
  computed: {
    ...mapState({
      is_loading: state => state.is_loading
    })
  },
  watch: {
    page: async function(newVal, oldVal) {
      let articles = await this.$content(this.path, { deep: true })
        .sortBy('date', 'desc')
        .limit(this.visibleLength)
        .skip(this.visibleLength * oldVal)
        .fetch();

      this.articles = [...this.articles, ...articles];
    }
  },
  methods: {
    more_articles() {
      this.$store.commit('set_loading', true);

      setTimeout(() => {
        this.$store.commit('set_loading', false);
        this.page++;
      }, 300);
    }
  }
}
</script>

<style lang="scss" scoped>
.page-music-list {
  padding: 50px 50px 100px;
  max-width: 1000px;

  .btn_area {
    height: 40px;
    margin-top: 30px;

    button {
      height: 40px;
      padding: 0 30px;
      transition: all 300ms;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 50px 20px 50px;
  }
}
</style>