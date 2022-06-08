<template>
  <div class="page-index">
    <section>
      <header>
        <h2>🎤 가수 게시판</h2>
      </header>
      <list-musician 
        :musicians="musicians"
      />
    </section>
    <section>
      <header>
        <h2>🎼 악보 게시판</h2>
        <nuxt-link to="/article/list/score" class="btn-more">더보기 +</nuxt-link>
      </header>
      <list-score
        :articles="articles"
      />
    </section>
    <section>
      <header>
        <h2><nuxt-link to="/chord">🎶 코드표 보러 가기</nuxt-link></h2>
      </header>
    </section>
    <section>
      <header>
        <h2><nuxt-link to="/request">💌 악보 신청 하기</nuxt-link></h2>
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
    musicians: musicians.sort((a, b) => a.kor < b.kor ? -1 : a.kor > b.kor ? 1 : 0),
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

      h2 {
        font-size: 24px;

        a {
          &:hover {
            background: #f7f7f7;
          }
        }
      }
      .btn-more {
        border: 1px solid #ccc;
        padding: 5px 10px;

        &:hover {
          background: #f7f7f7;
        }
      }
    }
  }
}
</style>