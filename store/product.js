import https from 'https';

const state = () => ({
  product: {}
});

const mutations = {
  setProduct(state, payload) {
    state.product = payload;
  }
};

const actions = {
  async getProductSingle(store, payload) {
    const res = await this.$axios.$get(`https://dummyjson.com/products/${payload.productId}`, {
      httpsAgent: new https.Agent({ rejectUnauthorized: false })
    });

    store.commit('setProduct', res);
  }
}

export default {
  state,
  mutations,
  actions,
};
