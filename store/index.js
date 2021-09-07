const state = () => ({
  app_load: false,
  params: '',
  id: ''
});

const mutations = {
  APP_LOADED(state) {
    state.app_load = true;
  },
  SET_PARAMS(state, params) {
    state.params = params;
  },
  SET_ID(state, id) {
    state.id = id;
  }
}

export default {
  state,
  mutations
}