<template>
  <div class="article-list">
    <ul>
      <li v-for="(article, index) of articles" :key="index">
        <button type="button" @click="delay_router(article.path)">
          <div class="category">{{ article.dir.replace('/', '') }}</div>
          <div class="subject">{{ article.title }}</div>
          <div class="info">
            <div class="date">{{ article.date }}</div>
            <div class="author">{{ article.author }}</div>
          </div>
        </button>
      </li>
    </ul>
    <div class="btn_area">
      <button type="button" v-if="page < lastPage && !is_loading" @click="more_articles">더보기</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  props: {
    articles: Array,
    page: Number,
    lastPage: Number
  },
  computed: {
    ...mapState({
      is_loading: state => state.is_loading
    })
  },
  methods: {
    delay_router(path) {
      this.$router.push({path: `/blog/${path.slice(1).replace(/\//gi, '_')}`})
    },
    more_articles() {
      this.$store.commit('set_loading', true)

      setTimeout(() => {
        this.$store.commit('set_loading', false)
        this.$emit('update:page', this.page + 1)
      }, 300)
    }
  }
})
</script>

<style lang="scss">
.article-list {
  padding: 50px 50px 100px;
  max-width: 1000px;

  ul {
    display: grid;
    row-gap: 24px;

    li {

      button {
        display: block;
        width: 100%;
        padding: 12px 24px;
        border-left: 3px solid #2c343e;
        text-align: left;

        &:hover {
          background: #2c343e;
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
  .btn_area {
    height: 40px;
    margin-top: 30px;

    button {
      height: 40px;
      padding: 0 30px;
      transition: all 300ms;

      &:hover {
        text-decoration: underline;
      }
    }
  }
  .loading {
    margin-top: 30px;
    padding: 12px 30px;
  }

  @media screen and (max-width: 1200px) {
    padding: 50px 20px 50px;
  }
}
</style>