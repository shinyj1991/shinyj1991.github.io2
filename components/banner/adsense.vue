<template>
  <div class="adsense-box pb-4">
    <ins class="adsbygoogle"></ins>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$root.$nextTick(() => {
      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (error) {
        console.error('Adsbygoogle error is ', error)
      }
    });
  }
}
</script>