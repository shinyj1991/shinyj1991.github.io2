<template>
  <nav class="the-gnb" @click.self="close_menu">
    <ul>
      <li>
        <nuxt-link to="/musician">Musician</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/article/list/score">Score</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/chord">Chord</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/request">Request</nuxt-link>
      </li>
    </ul>
  </nav>
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
    },
    close_menu() {
      this.$store.commit('close_menu');
    }
  }
};
</script>

<style lang="scss" scoped>
.the-gnb {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.7);

  ul {
    display: grid;
    row-gap: 12px;

    li {
      a {
        display: block;
        font-size: 24px;
        color: #fff;
      }
    }
  }
}
</style>