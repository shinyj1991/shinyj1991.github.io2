<template>
  <div class="page-musician">
    <header>
        <tit-h2>🎤 가수 게시판</tit-h2>
    </header>
    <list-musician :musicians="musicians" />
    <div class="btn-area">
      <btn-more tag="nuxt-link" to="/article/list/score">모든 악보 보기 +</btn-more>
    </div>
  </div>
</template>

<script>
import musicians from '@/utils/musician';

export default {
  data: () => ({
    musicians: musicians.sort((a, b) => a.kor < b.kor ? -1 : a.kor > b.kor ? 1 : 0),
  }),
}
</script>

<style lang="scss" scoped>
.page-musician {
  header {
    margin-bottom: 20px;
  }
  .btn-area {
    display: flex;
    column-gap: 10px;
    margin-top: 30px;
  }
}
</style>