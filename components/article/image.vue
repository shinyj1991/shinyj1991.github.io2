<template>
  <div class="article-image">
    <img :src="dynamicImage" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false
    }
  },
  computed: {
    dynamicImage() {
      return require(`~/assets/images/content${this.src}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.article-image {
  margin: 30px 0;
  padding: 0 30px;

  img {
    max-width: 100%;
  }
}
</style>