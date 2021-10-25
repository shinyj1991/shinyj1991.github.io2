<template>
  <div class="aside_navi">
    <h1 class="logo"><NuxtLink to="/">SIMPLIZM</NuxtLink></h1>
    <ul class="gnb">
      <!-- <li v-for="depth1 of categories" :key="depth1.name" :class="{on: (params ? params.split('-')[0] : params) === depth1.name}">
        <NuxtLink :to="`/article/${depth1.name}`">{{ depth1.text }}</NuxtLink>
        <ul v-if="depth1.depth2.length > 0">
          <li v-for="depth2 of depth1.depth2" :key="depth2.name" :class="{on: (params ? params.split('-')[1] : params) === depth2.name || 
          (id ? id.split('-')[0] : id) === depth2.name}"><NuxtLink :to="`/article/${ depth1.name }-${depth2.name}`">{{ depth2.name }}</NuxtLink></li>
        </ul>
      </li> -->
      <li :class="{on: $route.path.split('/')[1] === 'blog'}">
        <NuxtLink to="/blog">Blog</NuxtLink>
        <ul>
          <li v-for="directory of directory_list" :key="directory" :class="{on: params === directory}"><NuxtLink :to="`/blog/${ directory }`">{{ directory }}</NuxtLink></li>
        </ul>
      </li>
      <li :class="{on: $route.name === 'about'}"><NuxtLink to="/about">About</NuxtLink></li>
      <li :class="{on: $route.name === 'project'}"><NuxtLink to="/project">Project</NuxtLink></li>
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

    let directory_list = [];

    for (let directory of contents) {
      let directory_name = directory.path.split('/')[1];

      if (directory_list.indexOf(directory_name) === -1) {
        directory_list.push(directory_name);
      }
    }

    this.directory_list = directory_list;
  },
  data() {
    return {
      categories: [],
      directory_list: []
    }
  },
  mounted() {
    console.log('mounted', this.params, this.$route.path);
  }
}
</script>

<style lang="scss" scoped>
.aside_navi {position: fixed; top: 0; left: 0; width: 240px; min-height: 100%; background: #2c343e; padding: 50px 12px;
  .logo {margin-bottom: 30px; padding: 0 12px; text-align: center;
    a {display: block; font-weight: 700; font-size: 32px;}
  }
  .gnb {padding: 20px;
    > li {
      > a {display: block; padding: 8px 20px; font-size: 17px; color: #999999;
        &:hover {text-decoration: underline;}
      }
      > ul {
        > li {
          > a {display: block; padding: 4px 32px; font-size: 13px; color: #999999;
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