<template>
  <ul class="list-musician">
    <li v-for="(musician, index) of musicians" :key="index">
      <button type="button" @click="pushRouter(musician.eng)">{{ musician.kor }}</button>
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  props: {
    musicians: Array,
  },
  methods: {
    pushRouter(path) {
      this.$store.commit('set_loading', true)

      this.$router.push({path: `/article/list/score_${path}`})
    },
  }
})
</script>

<style lang="scss">
.list-musician {
  display: flex;
  flex-wrap: wrap;
  row-gap: 15px;
  column-gap: 15px;

  li {
    button {
      display: block;
      width: 100%;
      padding: 12px 24px;
      border: 1px solid #ccc;
      text-align: left;

      &:hover {
        background: #f7f7f7;
      }
    }
  }
}
</style>