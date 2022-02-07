<template>
  <div id="wrap">
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
#wrap {position: relative; min-width: 320px; min-height: 100vh; background: #ffffff; color: #000000; margin: 0 auto;
  @media screen and (max-width: 1200px) {padding: 50px 0 0;}
}
</style>