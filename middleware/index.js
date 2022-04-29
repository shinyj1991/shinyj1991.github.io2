export default function ({ store, route }) {
  store.commit("close_menu");

  console.log(route.name)

  if (route.name === 'blog-list-category') {
    // list
    store.commit('set_blog_depth', route.params.category ? route.params.category.split('_') : []);
  }

  if (route.name === 'blog-detail-slug') {
    // detail
    store.commit('set_blog_depth', route.params.slug.split('_'));
  }

  if (route.name !== 'blog-list-category' && route.name !== 'blog-detail-slug') {
    store.commit('set_blog_depth', []);
  }
}
