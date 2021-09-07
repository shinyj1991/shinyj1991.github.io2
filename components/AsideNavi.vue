<template>
  <div class="aside_navi">
    <h1 class="logo"><NuxtLink to="/">SIMPLIZM</NuxtLink></h1>
    <ul class="gnb">
      <li v-for="depth1 of categories" :key="depth1.name" :class="{on: (params ? params.split('-')[0] : params) === depth1.name}">
        <NuxtLink :to="`/article/${depth1.name}`">{{ depth1.name }}</NuxtLink>
        <ul v-if="depth1.depth2.length > 0">
          <li v-for="depth2 of depth1.depth2" :key="depth2.name" :class="{on: (params ? params.split('-')[1] : params) === depth2.name || 
          (id ? id.split('-')[0] : id) === depth2.name}"><NuxtLink :to="`/article/${ depth1.name }-${depth2.name}`">{{ depth2.name }}</NuxtLink></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      params: state => state.params,
      id: state => state.id
    })
  },
  async fetch() {
    const contents = await this.$content({ deep: true }).only(['path']).fetch();

    let categories = [];

    contents.map(content => {
      let split = content.path.split('/');
      let depth1 = split[1];
      let depth2 = split[2];
      let check = categories.map(obj => obj.name).indexOf(depth1);

      if (check === -1) {
        if (split.length > 3) {
          categories.push({name: depth1, depth2: [{name: depth2}]});
        } else {
          categories.push({name: depth1, depth2: []});
        }
      } else {
        if (split.length > 3) {
          let check2 = categories[check].depth2.map(obj => obj.name).indexOf(depth2);
          if (check2 === -1) {
            categories[check].depth2.push({name: depth2});
          }
        }
      }
    });

    categories.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    }).map(depth1 => {
      if (depth1.depth2.length > 1) {
        depth1.depth2.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
      }
    })

    this.categories = categories;
  },
  data() {
    return {
      categories: []
    }
  },
  mounted() {
    console.log('mounted', this.params, this.id);
  }
}
</script>

<style lang="scss" scoped>
.aside_navi {position: absolute; top: 0; left: 0; width: 240px; min-height: 100%; border-right: 1px solid #555555; padding: 50px 12px;
  .logo {margin-bottom: 30px; padding: 0 12px; text-align: center;
    a {display: block; font-weight: 700; font-size: 32px;}
  }
  .gnb {padding: 20px;
    > li {
      > a {display: block; padding: 8px 20px; font-size: 17px; color: #888888;
        &:hover {text-decoration: underline;}
      }
      > ul {
        > li {
          > a {display: block; padding: 4px 32px; font-size: 13px; color: #888888;
            &:hover {text-decoration: underline;}
          }
          &.on > a {color: #ffffff;}
        }
      }
      &.on {
        > a {color: #ffffff;}
      }
    }
  }
}
</style>