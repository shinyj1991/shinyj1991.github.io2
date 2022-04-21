<template>
  <div id="wrap">
    <aside-wrap />
    <div id="container">
      <nuxt />
    </div>
    <loader v-if="is_loading" />
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      is_loading: state => state.is_loading
    })
  }
}
</script>

<style lang="scss" scoped>
#wrap {position: relative; min-width: 320px; min-height: 100vh; padding: 0 0 0 240px; background: #000000; color: #ffffff;
  @media screen and (max-width: 1200px) {padding: 50px 0 0;}
}
</style>