const state = () => ({
  is_menu: false,
  app_loaded: false,
  is_loading: false,
});

const mutations = {
  toggle_menu(state) {
    state.is_menu = !state.is_menu;
  },
  close_menu(state) {
    state.is_menu = false;
  },
  app_loaded(state) {
    state.app_loaded = true;
  },
  set_loading(state, payload) {
    state.is_loading = payload;
  },
};

export default {
  state,
  mutations,
};
