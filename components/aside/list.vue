<template>
  <nav class="aside-list">
   <aside-item class="depth-0" :categories="category_list" />
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      is_menu: state => state.is_menu,
      params: state => state.params,
      id: state => state.id
    })
  },
  async fetch() {
    const category_list = [];
    const categories = [];
    const articles = await this.$content({ deep: true }).only(['path']).fetch();

    articles.map(article => {
      let directories = article.path.split('/');
      directories.shift();
      directories.pop();

      if (directories[0].charAt(0) === '_') {
        // 1depth 폴더명이 '_'로 시작하면 스킵
        return false;
      }

      let depth = directories.length;
      var path = '';

      for (let i = 0; i < depth; i++) {
        let parent = i > 0 ? categories.find(obj => obj.name === directories[i - 1]).child : category_list;

        path += i > 0 ? '_' + directories[i] : directories[i];

        if (!categories.find(obj => obj.name === directories[i])) {
          categories.push({
            name: directories[i],
            path: path,
            depth: i,
            child: []
          })
          parent.push(categories[categories.length - 1])
          parent.sort((a, b) => {
            if (a.name > b.name) {
              return 1
            } else {
              return -1
            }
          })
        }
      }
    })

    this.category_list = category_list
  },
  data() {
    return {
      category_list: []
    }
  },
  methods: {
    toggle_menu() {
      this.$store.commit('toggle_menu');
    }
  }
}
</script>

<style lang="scss">
  .aside-list {
    padding: 20px 0;

    ul {
      display: grid;
      padding-left: 20px;

      li {
        a {
          display: block;
          padding: 0 1em;
          color: #999;
          text-transform: uppercase;

          &:hover {
            text-decoration: underline;
          }
        }
        &.on {
          > a {color: #fff;}
        }
      }
      &.depth-0 {
        row-gap: 30px;
        font-size: 24px;

        > li {
          > a {
            font-weight: 700;
          }
        }
      }
      &.depth-1 {
        margin-top: 12px;
        row-gap: 12px;
        font-size: 18px;
      }
      &.depth-2 {
        margin-top: 8px;
        row-gap: 8px;
        font-size: 12px;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .aside-list {
      overflow: hidden; 
      display: flex; 
      position: fixed; 
      top: 0; 
      right: 0; 
      left: 0; 
      height: 0; 
      padding: 0; 
      opacity: 0; 
      z-index: 100; 
      justify-content: center; 
      align-items: center; 
      text-align: center; 
      background: rgba(0, 0, 0, 0.9);

      ul {
        padding-left: 0;
      }

      .open & {
        height: 100%;
        opacity: 1;
        transition: opacity 300ms;
      }
    }
  }
</style>