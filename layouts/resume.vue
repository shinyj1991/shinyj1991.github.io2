<template>
  <div id="resumeWrap">
    <div class="resumeInner">
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
#resumeWrap {background: #f7f7f7; min-height: 100vh;
  .resumeInner {width: 794px; margin: 0 auto;}
}
</style>