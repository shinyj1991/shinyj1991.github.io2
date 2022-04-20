<template>
  <div class="article-list">
    <ul>
      <li v-for="(article, index) of articles" :key="index">
        <button type="button" @click="delayLink(article.path)">
          <div class="category">{{ article.dir.replace('/', '') }}</div>
          <div class="subject">{{ article.title }}</div>
          <div class="info">
            <div class="date">{{ article.date }}</div>
            <div class="author">{{ article.author }}</div>
          </div>
        </button>
      </li>
    </ul>
    <div class="btn_area" v-if="page < lastPage && !loading">
      <button @click="$emit('incrementPage')">더보기</button>
    </div>
    <loader v-if="loading" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    articles: Array,
    page: Number,
    lastPage: Number,
    loading: Boolean
  },
  methods: {
    delayLink(path: string) {
      this.$emit('update:loading', true)
      setTimeout(() => {
        this.$router.push({path: path})
      }, 500)
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
      border-left: 3px solid #2c343e;

      button {
        display: block;
        width: 100%;
        padding: 12px 24px;
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
    margin-top: 30px;

    button {
      padding: 12px 30px;
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