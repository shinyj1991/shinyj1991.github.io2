<template>
  <ul class="list-score">
    <li v-for="(article, index) of articles" :key="index">
      <button type="button" @click="delayRouter(article.path)">
        <div class="category">{{ article.dir.replace('/', '') }}</div>
        <div class="subject">{{ article.musician }} - {{ article.title }}</div>
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

      this.$router.push({path: `/article/detail/${path.slice(1).replace(/\//gi, '_')}`})
    },
  }
})
</script>

<style lang="scss">
.list-score {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 15px;
  column-gap: 15px;

  li {
    button {
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

@media screen and (max-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
}}
</style>