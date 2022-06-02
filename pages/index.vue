<template>
  <div class="page-index">
    <ul class="link-list">
      <li><nuxt-link to="/article/list/music" class="link">🎼 악보 게시판</nuxt-link></li>
      <li><nuxt-link to="/chord" class="link">🎶 코드표</nuxt-link></li>
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
    display: grid;
    row-gap: 20px;

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