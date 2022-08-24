<template>
  <ul class="list-musician">
    <li v-for="(musician, index) of musicians" :key="index">
      <nuxt-link :to="`/musician/${musician.eng}`">{{ musician.kor }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  props: {
    musicians: Array,
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
    a {
      display: block;
      width: 100%;
      padding: 12px 24px;
      border: 1px solid #ccc;
      text-align: left;
      font-size: 14px;

      &:hover {
        background: #f7f7f7;
      }
    }
  }
}
</style>