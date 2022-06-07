<template>
  <div class="banner-coupang">
    <iframe 
      src="https://ads-partners.coupang.com/widgets.html?id=587213&template=carousel&trackingCode=AF7769340&subId=&width=900&height=140"
      frameborder="0"
      scrolling="no"
      referrerpolicy="unsafe-url"
    ></iframe>
  </div>
</template>

<script>
export default {
  head: () => ({
    script: [
      {
        hid: 'coupang',
        src: 'https://ads-partners.coupang.com/g.js',
        defer: true
      }
    ]
  }),
  data: () => ({
    banner: null
  }),
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.banner-coupang {
  iframe {
    width: 100%;
  }
}
</style>