export default function({ store, route }) {
  store.commit('SET_PARAMS', route.params.directory);

  console.log(store.state.params);
}