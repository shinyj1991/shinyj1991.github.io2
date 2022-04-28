export default function ({ store, route }) {
  store.commit("close_menu");

  if (route.name === 'blog') {
    // list
    store.commit('set_blog_depth', route.query.category.split('_'));
  }

  if (route.name === 'blog-slug') {
    // detail
    store.commit('set_blog_depth', route.params.slug.split('_'));
  }
}
