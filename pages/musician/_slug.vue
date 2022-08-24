<template>
  <div class="page-music-list">
    <header>
      <tit-h2 v-if="musician">🎼 {{ musician }} - 악보 게시판</tit-h2>
      <tit-h2 v-else>🎼 악보 게시판</tit-h2>
      <btn-more tag="nuxt-link" v-if="musician" to="/musician">다른가수 보기 +</btn-more>
      <btn-more tag="nuxt-link" v-else to="/musician">가수별로 보기 +</btn-more>
    </header>
    <config-head :title="title" :keywords="keywords" />
    <list-score
      :articles="articles"
      :page.sync="page"
      :lastPage="lastPage"
      @incrementPage="page++"
    />
    <div class="btn-area">
      <btn-more tag="button" v-if="page < lastPage && !is_loading" @click="page++">더보기 +</btn-more>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import musicians from '@/utils/musician';
import meta from '@/utils/meta';

export default {
  async asyncData({ $content, params }) {
    const path = params.slug ? `score/${params.slug}` : '/';
    const visibleLength = 24;
    const totalArticles = await $content(path, { deep: true }).fetch();
    const lastPage = Math.ceil(totalArticles.length / visibleLength);
    const arrayParams = params.slug.split('_');
    const musician = arrayParams[1] ? musicians.find(m => m.eng === arrayParams[1])['kor'] : false;
    const title = musician ? `EXIT5 | ${musician} - 악보 자료실` : meta.title;
    const keywords = `${musician}, ${meta.keywords}`;

    let articles = await $content(path, { deep: true })
      .limit(visibleLength)
      .sortBy('date', 'desc')
      .fetch();

    return {
      path,
      musician,
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
}
</script>

<style lang="scss" scoped>
.page-music-list {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .btn-area {
    display: flex;
    column-gap: 10px;
    margin-top: 30px;
  }
}
</style>