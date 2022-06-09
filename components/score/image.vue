<template>
  <div class="score-image">
    <!-- <img :src="dynamicImage" :alt="alt" /> -->
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
      // return require(`~/assets/images/tab${this.src}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.score-image {
  text-align: center;

  img {
    max-width: 100%;
  }
}
</style>