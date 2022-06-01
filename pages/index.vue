<template>
  <div class="page-index">
    <ul class="link-list">
      <li><nuxt-link to="/article/list/music" class="link">🎼 악보 게시판</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.page-index {
  padding: 50px;

  .link-list {
    li {
      a {
        font-size: 24px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>