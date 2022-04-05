<template>
  <div id="wrap">
    <aside-navi />
    <div id="container">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // transition: 'none'
})
</script>

<style lang="scss" scoped>
#wrap {position: relative; min-width: 320px; min-height: 100vh; padding: 0 0 0 240px; background: #000000; color: #ffffff;
  @media screen and (max-width: 1200px) {padding: 50px 0 0;}
}
</style>