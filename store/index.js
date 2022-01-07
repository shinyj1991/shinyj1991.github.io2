const state = () => ({
  is_menu: false,
  app_load: false,
  params: '',
  id: ''
});

const mutations = {
  toggle_menu(state) {
    state.is_menu = !state.is_menu;
  },
  close_menu(state) {
    state.is_menu = false;
  },
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