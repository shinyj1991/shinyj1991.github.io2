export default function({ store, route }) {
  store.commit('SET_PARAMS', route.params.directory);
  store.commit('SET_ID', route.params.id);
  store.commit('close_menu');
}