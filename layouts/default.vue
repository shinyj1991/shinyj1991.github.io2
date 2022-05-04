<template>
  <div class="layout-default">
    <aside-wrap />
    <div class="container">
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
  },
  middleware: (context) => {
    // console.log('layout middleware')
  }
}
</script>

<style lang="scss" scoped>
.layout-default {
  width: 100%;
  height: 100%;
  min-width: 360px;
  padding: 0 0 0 240px;
  color: #ffffff;

  .container {
    height: 100%;
  }

  @media screen and (max-width: 1200px) {
    padding: 50px 0 0;
  }
}
</style>