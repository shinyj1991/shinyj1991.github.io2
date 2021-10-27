const state = () => ({
  val: 0
});

const mutations = {
  increment(state) {
    state.val++;
  }
}

export default {
  state,
  mutations
}