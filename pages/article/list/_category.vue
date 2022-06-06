<template>
  <div class="page-music-list">
    <header>
      <h2 v-if="singer">🎼 {{ singer }} - 악보 게시판</h2>
      <h2 v-else>🎼 악보 게시판</h2>
    </header>
    <config-head :title="title" :keywords="keywords" />
    <list-score
      :articles="articles"
      :page.sync="page"
      :lastPage="lastPage"
      @incrementPage="page++"
    />
    <div class="btn_area">
      <button 
        type="button" 
        v-if="page < lastPage && !is_loading" 
        @click="moreArticles"
      >더보기</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import singers from '@/utils/singer';
import meta from '@/utils/meta';

export default {
  async asyncData({ $content, params, store }) {
    const path = params.category ? params.category.replace(/_/gi, '/') : '/';
    const visibleLength = 24;
    const totalArticles = await $content(path, { deep: true }).only([]).fetch();
    const lastPage = Math.ceil(totalArticles.length / visibleLength);
    const arrayParams = params.category.split('_');
    const singer = singers.get(arrayParams[1]) ?? false;
    const title = singer ? `EXIT5 | ${singer} - 악보 자료실` : meta.title;
    const keywords = `${singer}, ${meta.keywords}`;

    let articles = await $content(path, { deep: true })
      .limit(visibleLength)
      .sortBy('date', 'desc')
      .fetch();

    return {
      singer,
      title,
      keywords,
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
    moreArticles() {
      this.$store.commit('set_loading', true);

      setTimeout(() => {
        this.$store.commit('set_loading', false);
        this.page++;
      }, 300);
    }
  },
  created() {
    this.$store.commit('set_loading', false)
  }
}
</script>

<style lang="scss" scoped>
.page-music-list {
  header {
    margin-bottom: 20px;

    h2 {
      font-size: 24px;
    }
  }
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
}
</style>