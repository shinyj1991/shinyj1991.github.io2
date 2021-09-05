<template>
  <div id="wrap">
    <AsideNavi/>
    <div id="container">
      <Nuxt />
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
#wrap {position: relative; min-width: 1200px; min-height: 100vh; padding: 0 0 0 240px; background: #000000; color: #ffffff;}
</style>