<template>
  <div class="layout-error">
    <div class="layout-error__inner">
      <h1 v-if="error.statusCode === 404">페이지를 찾을 수 없습니다.</h1>
      <h1 v-else>An error occurred</h1>
      <nuxt-link to="/">메인 페이지 바로가기</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'fullsize'
}
</script>

<style lang="scss" scoped>
.layout-error {
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;

  &__inner {
    display: grid;
    row-gap: 50px;

    a {
      color: #4fb9fe;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>