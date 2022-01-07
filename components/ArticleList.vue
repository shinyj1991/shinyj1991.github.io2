<template>
  <div class="article_list">
    <ul>
      <li v-for="(article, index) of articles" :key="index">
        <NuxtLink :to="{ path: `/blog${article.path}` }">
          <div class="category">{{ article.dir.replace('/', '') }}</div>
          <div class="subject">{{ article.title }}</div>
          <div class="info">
            <div class="date">{{ article.date }}</div>
            <div class="author">{{ article.author }}</div>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <div class="btn_area" v-if="page < lastPage && !loading">
      <button @click="$emit('incrementPage')">더보기</button>
    </div>
    <div class="loading" v-if="loading">Loading...</div>
  </div>
</template>

<script>
export default {
  props: {
    articles: Array,
    page: Number,
    lastPage: Number,
    loading: Boolean
  }
}
</script>

<style lang="scss">
.article_list {padding: 50px 50px 100px; max-width: 1000px;
  ul {
    li {border-left: 3px solid #2c343e;
      &:not(:first-child) {margin-top: 24px;}
      a {padding: 12px 24px; display: block;
        &:hover {background: #2c343e;}
        .category {margin-bottom: 5px; font-size: 12px;}
        .subject {font-size: 16px;}
        .info {display: flex; margin-top: 10px; font-size: 12px;
          .author {margin-left: 15px;}
        }
      }
    }
  }
  .btn_area {margin-top: 30px;
    button {padding: 12px 30px; transition: all 300ms;
      &:hover {text-decoration: underline;}
    }
  }
  .loading {margin-top: 30px; padding: 12px 30px;}

  @media screen and (max-width: 1200px) {padding: 50px 20px 50px;}
}
</style>