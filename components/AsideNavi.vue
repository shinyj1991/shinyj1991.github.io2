<template>
  <div class="aside_navi">
    <h1 class="logo"><NuxtLink to="/">SIMPLIZM</NuxtLink></h1>
    <ul class="gnb">
      <li v-for="category of categories" :key="category" :class="{on: params === category}"><NuxtLink :to="`/article/${category}`">{{ category }}</NuxtLink></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      params: state => state.params
    })
  },
  async fetch() {
    const contents = await this.$content({ deep: true }).only(['path']).fetch();
    this.categories = contents.map(content => {
      return content.path.split('/')[1]
    });
    this.categories = new Set(this.categories);
    this.categories = [...this.categories].sort();
  },
  data() {
    return {
      categories: []
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
      > a {display: block; padding: 8px 5px; font-size: 15px; text-align: center;
        &:hover {text-decoration: underline;}
      }
      &.on > a {font-weight: 700; background: #2c343e;}
    }
  }
}
</style>