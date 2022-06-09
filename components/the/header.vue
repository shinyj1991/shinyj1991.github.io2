<template>
  <header class="the-header" :class="{open: is_menu}">
    <div class="inner">
      <h1 class="logo"><nuxt-link to="/">EXIT5</nuxt-link></h1>
      <button type="button" class="btn-menu" @click="toggle_menu"><span>메뉴열기</span></button>
      <the-gnb v-if="is_menu" />
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
  }),
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
};
</script>

<style lang="scss" scoped>
.the-header {
  background: #222;

  .inner {
    max-width: 1000px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 30px;
  }

  .logo {
    a {
      display: block;
      color: #fff;
      font-weight: 700; 
      font-size: 32px;
    }
  }
  .btn-menu {
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
  .btn-menu {
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

@media print {
  display: none;
}}
</style>