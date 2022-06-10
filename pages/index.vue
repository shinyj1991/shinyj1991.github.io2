<template>
  <div class="page-index">
    <section>
      <header>
        <tit-h2>🎤 가수 게시판</tit-h2>
        <btn-more tag="nuxt-link" to="/musician">더보기 +</btn-more>
      </header>
      <list-musician :musicians="musicians" />
    </section>
    <section>
      <header>
        <tit-h2>🎼 악보 게시판</tit-h2>
        <btn-more tag="nuxt-link" to="/article/list/score">더보기 +</btn-more>
      </header>
      <list-score :articles="articles" />
    </section>
    <section>
      <header>
        <tit-h2><nuxt-link to="/chord">🎶 코드표 보러 가기</nuxt-link></tit-h2>
      </header>
    </section>
    <section>
      <header>
        <tit-h2><nuxt-link to="/request">💌 악보 신청 하기</nuxt-link></tit-h2>
      </header>
    </section>
  </div>
</template>

<script>
import musicians from '@/utils/musician';

export default {
  async asyncData({ $content, params, store }) {
    let articles = await $content('/score', { deep: true }).limit(12).sortBy('date', 'desc').fetch();

    return {
      articles,
    }
  },
  data: () => ({
    // musicians: musicians.sort((a, b) => a.kor < b.kor ? -1 : a.kor > b.kor ? 1 : 0), ㄱㄴㄷ 순
    musicians: musicians.sort(() => Math.random() - 0.5),
  }),
}
</script>

<style lang="scss" scoped>
.page-index {
  display: grid;
  row-gap: 50px;

  > section {
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      .tit-h2 {
        a {
          &:hover {
            background: #f7f7f7;
          }
        }
      }
    }
  }
  .list-musician {
    overflow: hidden;
    max-height: 107px;
  }
}
</style>