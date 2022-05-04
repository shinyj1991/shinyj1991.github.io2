const state = () => ({
  count: false,
});

const mutations = {
  setCount(state, payload) {
    state.count = payload;
  },
};

const actions = {
  async setCount({ commit }, payload) {
    setTimeout(() => {
      const res = payload;
  
      commit('setCount', res);

      return res;
    }, 300)
  }
}

export default {
  state,
  mutations,
  actions,
};
