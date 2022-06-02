<template>
  <div class="page-chord">
    <ul class="chord-list">
      <li v-for="(chord, index) in chords" :key="index">
        <article-chord class="page" :chord="chord" />
      </li>
    </ul>
    <popup-chord :isPopupChord.sync="isPopupChord" :chord="chord" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    chord: null,
    isPopupChord: false,
  }),
  async asyncData({ $content, params, store }) {
    let chords = await $content('/chord', { deep: true })
      .sortBy('name', 'asc')
      .fetch();

    return {
      chords
    }
  },
}
</script>

<style lang="scss" scoped>
.page-chord {
  padding: 50px 50px 100px;
  max-width: 1000px;

  .chord-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 10px;
    column-gap: 10px;

    li {
      border: 1px solid #ccc;
    }
  }

@media screen and (max-width: 768px) {
padding: 20px 20px 50px;

  .chord-list {
    grid-template-columns: repeat(2, 1fr);
  }
}}
</style>