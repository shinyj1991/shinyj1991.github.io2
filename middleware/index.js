export default function ({ store, route }) {
  store.commit("close_menu");

  // console.log('global middleware', route.name)

  if (route.name === 'article-list-category') {
    // list
    store.commit('set_blog_depth', route.params.category ? route.params.category.split('_') : []);
  }

  if (route.name === 'article-detail-slug') {
    // detail
    store.commit('set_blog_depth', route.params.slug.split('_'));
  }

  if (route.name !== 'article-list-category' && route.name !== 'article-detail-slug') {
    store.commit('set_blog_depth', []);
  }
}
