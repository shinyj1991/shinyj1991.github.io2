<template>
  <div class="aside_navi">
    <h1 class="logo"><NuxtLink to="/">SIMPLIZM</NuxtLink></h1>
    <ul class="gnb">
      <li><NuxtLink to="/article/cate">Cate</NuxtLink></li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const visibleLength = 10;
    const articles = await $content(params.directory)
      .sortBy('createdAt', 'desc')
      .fetch()

    const totalArticles = articles.length;
    const lastPage = Math.ceil(totalArticles / visibleLength);

    const firstArticles = articles.slice(0, visibleLength);

    return {
      visibleLength,
      lastPage,
      directory: params.directory,
      articles: firstArticles
    }
  }
}
</script>

<style lang="scss" scoped>
.aside_navi {position: absolute; top: 0; left: 0; width: 240px; min-height: 100%; border-right: 1px solid #555555; padding: 50px 12px;
  .logo {margin-bottom: 30px; padding: 0 12px; text-align: center;
    a {display: block; font-weight: 700; font-size: 32px;}
  }
  .gnb {
    > li {
      > a {display: block; padding: 8px 5px; font-size: 13px;
        &:hover {background: #2c343e;}
      }
    }
  }
}
</style>