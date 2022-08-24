<template>
  <ul class="list-score">
    <li v-for="(article, index) of articles" :key="index">
      <nuxt-link :to="`/score/${article.path.replace('/score/', '').replace(/\//gi, '_')}`">
        <div class="category">{{ article.dir.replace('/', '') }}</div>
        <div class="subject">{{ article.musician }} - {{ article.title }}</div>
        <div class="info">
          <div class="date">{{ article.date }}</div>
          <div class="author">{{ article.author }}</div>
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  props: {
    articles: Array,
  },
  computed: {
    ...mapState({
      is_loading: state => state.is_loading
    })
  },
})
</script>

<style lang="scss">
.list-score {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 15px;
  column-gap: 15px;

  li {
    flex: 1 0 auto;
    overflow: hidden;

    a {
      display: block;
      width: 100%;
      padding: 12px 24px;
      border: 1px solid #ccc;
      text-align: left;

      &:hover {
        background: #f7f7f7;
      }
      .category {
        margin-bottom: 5px;
        font-size: 12px;
      }
      .subject {
        width: 100%;
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .info {
        display: flex;
        column-gap: 15px;
        margin-top: 10px;
        font-size: 12px;
      }
    }
  }

@media screen and (max-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
}}
</style>