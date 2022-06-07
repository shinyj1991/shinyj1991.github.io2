<template>
  <article class="page-music-detail">
    <config-head :title="title" :keywords="keywords" />
    <score-head :music="music" />
    <div class="score-contents">
      <div v-for="(score, index) in music.score" :key="index">
        <score-tab v-if="score.type === 'tab'" :score="score" :measure="music.measure" />
        <score-image v-if="score.type === 'image'" :src="score.src" />
        <score-chord v-if="score.type === 'chord'" :measure="music.measure" :score="score" />
      </div>
      <config-adsense />
    </div>
  </article>
</template>

<script>
import musicians from '@/utils/musician';
import meta from '@/utils/meta';

export default {
  async asyncData({ $content, params, store }) {
    const music = await $content(params.slug.replace(/_/gi, '/'), params.id).fetch();
    const arrayParams = params.slug.split('_');
    const musician = musicians.find(m => m.eng === arrayParams[1])['kor'];
    const title = `${musician} - ${music.title} 악보, 가사, 코드`;
    const keywords = `${musician}, ${music.title}, ${meta.keywords}`;

    return {
      music,
      title,
      keywords
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ko', options)
    }
  },
  created() {
    this.$store.commit('set_loading', false)
  }
}
</script>

<style lang="scss" scoped>
.page-music-detail {
  .score-contents {
    display: grid;
    row-gap: 100px;
  }

@media screen and (max-width: 1200px) {
  .score-contents {
    row-gap: 50px;
  }
}}
</style>