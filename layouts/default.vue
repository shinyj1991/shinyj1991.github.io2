<template>
  <div class="layout-default">
    <config-head :title="title" :description="description" :keywords="keywords" />
    <aside-wrap />
    <main class="container">
      <nuxt />
    </main>
    <loader v-if="isLoading" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import meta from '@/utils/meta';

export default {
  data: () => ({
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  }),
  computed: {
    ...mapState({
      isLoading: state => state.is_loading
    })
  },
}
</script>

<style lang="scss" scoped>
.layout-default {
  padding: 0 0 0 240px;
  color: #000;

  .container {
    height: 100%;
  }

  @media screen and (max-width: 1200px) {
    padding: 70px 0 0;
  }
}
</style>