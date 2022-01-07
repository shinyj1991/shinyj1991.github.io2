<template>
  <div class="aside_navi" :class="{open: is_menu}">
    <h1 class="logo"><NuxtLink to="/">SIMPLIZM</NuxtLink></h1>
    <button type="button" class="btn_menu" @click="toggle_menu"><span>메뉴열기</span></button>
    <nav class="gnb">
      <ul>
        <li :class="{on: $route.path.split('/')[1] === 'blog'}">
          <NuxtLink to="/blog">Blog</NuxtLink>
          <ul>
            <li v-for="directory of directory_list" :key="directory" :class="{on: params === directory}"><NuxtLink :to="`/blog/${ directory }`">{{ directory }}</NuxtLink></li>
          </ul>
        </li>
        <!-- <li :class="{on: $route.name === 'history'}"><NuxtLink to="/history">History</NuxtLink></li> -->
        <li :class="{on: $route.name === 'project'}"><NuxtLink to="/project">Project</NuxtLink></li>
      </ul>
    </nav>
  </div>
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
    const contents = await this.$content({ deep: true }).only(['path']).fetch();

    let directory_list = [];

    for (let directory of contents) {
      let directory_name = directory.path.split('/')[1];

      if (directory_list.indexOf(directory_name) === -1 && directory_name !== 'java') {
        directory_list.push(directory_name);
      }
    }

    directory_list.sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });

    this.directory_list = directory_list;
  },
  data() {
    return {
      directory_list: []
    }
  },
  methods: {
    toggle_menu() {
      this.$store.commit('toggle_menu');
    }
  }
}
</script>

<style lang="scss" scoped>
.aside_navi {position: fixed; top: 0; left: 0; width: 240px; min-height: 100%; background: #2c343e; padding: 50px 12px;
  .logo {margin-bottom: 30px; padding: 0 12px; text-align: center;
    a {display: block; font-weight: 700; font-size: 32px;}
  }
  .btn_menu {display: none;}
  .gnb {padding: 20px;
    > ul {
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

  @media screen and (max-width: 1200px) {display: flex; justify-content: space-between; align-items: center; width: 100%; min-height: 0; height: 50px; padding: 0 20px; z-index: 100;
    .logo {margin-bottom: 0; padding: 0;
      a {font-size: 20px;}
    }
    .btn_menu {display: block; position: relative; width: 22px; height: 24px; z-index: 101;
      &:before {display: block; content: ''; position: absolute; top: 2px; left: 0; width: 100%; height: 3px; background: #ffffff; transition: all 300ms;}
      span {display: block; text-indent: -9999em; position: absolute; top: 10px; left: 0; width: 100%; height: 3px; background: #ffffff; transition: all 300ms;}
      &:after {display: block; content: ''; position: absolute; top: 18px; left: 0; width: 100%; height: 3px; background: #ffffff; transition: all 300ms;}
    }
    .gnb {overflow: hidden; display: flex; position: fixed; top: 0; right: 0; left: 0; height: 0; padding: 0; opacity: 0; z-index: 100; justify-content: center; align-items: center; text-align: center; background: rgba(0, 0, 0, 0.9);
      > ul {
        > li {
          > a {font-size: 32px;}
          > ul {
            > li {
              > a {font-size: 20px;}
            }
          }
        }
      }
    }

    &.open {
      .btn_menu {
        &:before {top: 7px; transform: rotate(45deg);}
        span {opacity: 0;}
        &:after {top: 7px; transform: rotate(-45deg);}
      }
      .gnb {height: 100vh; opacity: 1; transition: opacity 300ms;}
    }
  }
}
</style>