<template>
  <div id="wrap">
    <aside-wrap />
    <div id="container">
      <nuxt />
    </div>
    <loader v-if="isLoading" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      isLoading: state => state.is_loading
    })
  }
}
</script>

<style lang="scss" scoped>
#wrap {
  min-width: 360px;
  padding: 0 0 0 240px;
  color: #ffffff;

  @media screen and (max-width: 1200px) {
    padding: 50px 0 0;
  }
}
</style>