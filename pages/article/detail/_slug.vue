<template>
  <article class="page-music-detail">
    <config-head :title="title" :keywords="keywords" />
    <score-head :music="music" />
    <div class="score-contents">
      <!-- <banner-adsense /> -->
      <div v-for="(score, index) in music.score" :key="index">
        <score-tab v-if="score.type === 'tab'" :score="score" :measure="music.measure" />
        <score-image v-if="score.type === 'image'" :src="score.src" />
        <score-chord v-if="score.type === 'chord'" :measure="music.measure" :score="score" />
      </div>
      <!-- <banner-coupang /> -->
      <div class="btn-area">
        <btn-more @click="$router.push(`/article/list/score_${musicianEng}`)">{{ musicianKor }} 악보 게시판 +</btn-more>
      </div>
    </div>
    <config-reply />
  </article>
</template>

<script>
import musicians from '@/utils/musician';
import meta from '@/utils/meta';

export default {
  async asyncData({ $content, params, store }) {
    const music = await $content(params.slug.replace(/_/gi, '/'), params.id).fetch();
    const arrayParams = params.slug.split('_');
    const musicianKor = musicians.find(m => m.eng === arrayParams[1])['kor'];
    const musicianEng = arrayParams[1];
    const title = `${musicianKor} - ${music.title} 악보, 가사, 코드`;
    const keywords = `${musicianKor}, ${music.title}, ${meta.keywords}`;

    return {
      music,
      title,
      keywords,
      musicianKor,
      musicianEng
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ko', options)
    }
  },
}
</script>

<style lang="scss" scoped>
.page-music-detail {
  .score-contents {
    display: grid;
    row-gap: 100px;
  }
@media print {
  .score-contents {
    .btn-area {
      display: none;
    }
  }
}}
</style>