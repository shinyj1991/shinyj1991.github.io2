<template>
  <div class="aside-wrap" :class="{open: is_menu}">
    <h1 class="logo"><nuxt-link to="/">EXIT 5</nuxt-link></h1>
    <button type="button" class="btn_menu" @click="toggle_menu"><span>메뉴열기</span></button>
    <aside-list />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      is_menu: state => state.is_menu,
    })
  },
  methods: {
    toggle_menu() {
      this.$store.commit('toggle_menu');
    }
  }
}
</script>

<style lang="scss">
.aside-wrap {
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 240px; 
  min-height: 100%; 
  background: #222; 
  padding: 50px 12px;

  .logo {
    margin-bottom: 30px; 
    padding: 0 12px; 
    text-align: center;

    a {
      display: block; 
      font-weight: 700; 
      font-size: 32px;
    }
  }
  .btn_menu {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    width: 100%; 
    min-height: 0; 
    height: 50px; 
    padding: 0 20px; 
    z-index: 100;

    .logo {
      margin-bottom: 0; 
      padding: 0;

      a {
        font-size: 20px;
      }
    }
    .btn_menu {
      display: block; 
      position: relative; 
      width: 22px; 
      height: 24px; 
      z-index: 101;

      &:before {
        display: block; 
        content: ''; 
        position: absolute; 
        top: 2px; 
        left: 0; 
        width: 100%; 
        height: 3px; 
        background: #ffffff; 
        transition: all 300ms;
      }
      span {
        display: block; 
        text-indent: -9999em; 
        position: absolute; 
        top: 10px; 
        left: 0; 
        width: 100%; 
        height: 3px; 
        background: #ffffff; 
        transition: all 300ms;
      }
      &:after {
        display: block; 
        content: ''; 
        position: absolute; 
        top: 18px; 
        left: 0; 
        width: 100%; 
        height: 3px; 
        background: #ffffff; 
        transition: all 300ms;
      }
    }

    &.open {
      .btn_menu {
        &:before {
          top: 7px; 
          transform: rotate(45deg);
        }
        span {
          opacity: 0;
        }
        &:after {
          top: 7px; 
          transform: rotate(-45deg);
        }
      }
    }
  }
}
</style>