<template>
  <div class="layout-default">
    <config-head :title="title" :description="description" :keywords="keywords" />
    <!-- <aside-wrap /> -->
    <the-header />
    <main class="container">
      <nuxt />
    </main>
    <!-- <loader v-if="isLoading" /> -->
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
  // padding: 70px 0 0;
  color: #000;

  .container {
    max-width: 1000px;
    margin: 0 auto;
    height: 100%;
    padding: 50px 50px 100px;
  }

@media screen and (max-width: 768px) {
  .container {
    padding: 20px 20px 50px;
  }
}

@media print {
  .container {
    padding: 50px 0 0;
    -webkit-print-color-adjust: exact;
  }
}}
</style>