<template>
  <article class="page-music-detail">
    <!-- <div v-if="article.extension === '.md'">
      <config-head :title="`EXIT5 | ${article.title}`" />
      <article-head>
        <h1>{{ article.title }}</h1>
        <div class="info">
          <div class="date">작성일 : {{ article.date }}</div>
        </div>
      </article-head>
      <article-body>
        <nuxt-content :document="article" />
      </article-body>
    </div> -->
    <config-head :title="title" :description="description" :keywords="keywords" />
    <score-head :music="music" />
    <div class="score-contents">
      <div v-for="(score, index) in music.score" :key="index">
        <score-tab v-if="score.type === 'tab'" :score="score" :measure="music.measure" />
        <score-image v-if="score.type === 'image'" :src="score.src" />
        <score-chord v-if="score.type === 'chord'" :measure="music.measure" :score="score" />
      </div>
    </div>
  </article>
</template>

<script>
import singer from '@/utils/singer'

export default {
  async asyncData({ $content, params, store }) {
    const music = await $content(params.slug.replace(/_/gi, '/'), params.id).fetch();
    const arrayParams = params.slug.split('_');
    const musicSinger = singer.get(arrayParams[1]);
    const title = `${musicSinger} - ${music.title} 악보, 가사, 코드`;
    const description = `${music.year}년도에 발매된 ${musicSinger}의 곡 ${music.title} 악보, 가사, 코드`;
    const keywords = `${musicSinger}, ${music.title}, 기타, 통기타, 어쿠스틱기타, 기타악보, 코드악보, 7080, 8090, 악보, 자료실, 포크송, 발라드, 타브악보`;

    return {
      music,
      title,
      description,
      keywords
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
.page-music-detail {
  padding: 50px 50px 100px;
  max-width: 1000px;

  .score-contents {
    display: grid;
    row-gap: 100px;
  }

@media screen and (max-width: 1200px) {
  padding: 50px 20px 50px;

  .score-contents {
    row-gap: 50px;
  }
}}
</style>