export default function ({ store, route }) {
  store.commit("close_menu");

  // console.log('global middleware', route.name)

  /*if (process.client) {
    const screeWidth = window.screen.width;
    const minWidth = 600;

    if (screeWidth < minWidth) {
      const ratio = minWidth / screeWidth;
      document.querySelector('meta[name="viewport"]').setAttribute('content', `width=device-width, initial-scale=${ratio}, maximum-scale=${ratio}, minimum-scale=${ratio}, user-scalable=no`);
    } else {
      document.querySelector('meta[name="viewport"]').setAttribute('content', `width=device-width, initial-scale=1, user-scalable=yes`);
    }
  }*/

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
