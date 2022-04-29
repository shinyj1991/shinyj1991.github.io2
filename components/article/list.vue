<template>
  <ul class="article-list">
    <li v-for="(article, index) of articles" :key="index">
      <button type="button" @click="delayRouter(article.path)">
        <div class="category">{{ article.dir.replace('/', '') }}</div>
        <div class="subject">{{ article.title }}</div>
        <div class="info">
          <div class="date">{{ article.date }}</div>
          <div class="author">{{ article.author }}</div>
        </div>
      </button>
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
  methods: {
    delayRouter(path) {
      this.$store.commit('set_loading', true)

      this.$router.push({path: `/blog/detail/${path.slice(1).replace(/\//gi, '_')}`})
    },
  }
})
</script>

<style lang="scss">
.article-list {
  display: grid;
  row-gap: 24px;

  li {

    button {
      display: block;
      width: 100%;
      padding: 12px 24px;
      border-left: 3px solid #222;
      text-align: left;

      &:hover {
        background: #222;
      }
      .category {
        margin-bottom: 5px;
        font-size: 12px;
      }
      .subject {
        font-size: 16px;
      }
      .info {
        display: flex;
        column-gap: 15px;
        margin-top: 10px;
        font-size: 12px;
      }
    }
  }
}
</style>