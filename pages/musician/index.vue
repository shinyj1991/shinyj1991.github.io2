<template>
  <div class="page-musician">
    <header>
      <tit-h2>🎤 가수 게시판</tit-h2>
      <btn-more tag="nuxt-link" to="/score">모든 악보 보기 +</btn-more>
    </header>
    <list-musician :musicians="musicians" />
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
}
</style>