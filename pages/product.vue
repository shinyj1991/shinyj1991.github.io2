<template>
  <div class="page-product">
    <h1>Data Fetch Refresh</h1>
    <div class="flex-box">
      <input type="text" v-model="productId" @keypress.enter="$router.push({query: { productId }});">
      <nuxt-link :to="{query: { productId }}">query change</nuxt-link>
    </div>
    <div>
      <p>{{ product.id }}</p>
      <p>{{ product.title }}</p>
      <p>{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  middleware: () => {
    // onsole.log('index page middleware')
  },
  async asyncData({ query, store }) {
    if (query.productId && query.productId !== '0') {
      await store.dispatch('product/getProductSingle', {
        productId: query.productId
      });
    }

    return {
      productId: query.productId || 0
    }
  },
  computed: {
    ...mapState({
      product: state => state.product.product
    })
  },
  watch: {
    $route: {
      deep: true,
      handler() {
        this.$nuxt.refresh()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-product {
  padding: 50px;

  .flex-box {
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-bottom: 20px;

    input {
      width: 200px;
    }
  }
}
</style>