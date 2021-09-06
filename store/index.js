const state = () => ({
  app_load: false,
  params: ''
});

const mutations = {
  APP_LOADED(state) {
    state.app_load = true;
  },
  SET_PARAMS(state, params) {
    state.params = params;
  }
}

export default {
  state,
  mutations
}