const state = () => ({
  is_menu: false,
  app_loaded: false,
  blog_depth: []
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
  set_blog_depth(state, payload) {
    state.blog_depth = payload;
  }
};

const actions = {
  async nuxtServerInit(store, { app }) {
    // console.log('nuxtServerInit');
  }
}

export default {
  state,
  mutations,
  actions,
};
