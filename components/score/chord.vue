<template>
  <div class="score-chord" :style="`grid-template-columns: repeat(${music.measure}, 1fr);`">
    <div class="section" v-for="(section, index) in music.score" :key="index">
      <div class="chord">
        <button 
          type="button"
          class="chord-item" 
          v-for="(item, index) in section.chord" 
          :key="index" 
          :style="`--grow: ${item.grow ? item.grow : 1}`"
          @click="openPopupChord(item.name)"
        >{{ item.name }}</button>
      </div>
      <div class="lyrics">{{ section.lyrics }}</div>
    </div>
    <popup-chord :isPopupChord.sync="isPopupChord" :chord="chord" />
  </div>
</template>

<script>
export default {
  data: () => ({
    chord: null,
    isPopupChord: false,
  }),
  props: {
    music: {
      type: Object,
      default: {}
    }
  },
  methods: {
    async openPopupChord(name) {
      const result = await this.$content(`chord/${name}`).fetch();
      this.chord = result;
      this.isPopupChord = true;
    }
  },
  created() {
    this.$store.commit('set_loading', false)
  },
}
</script>

<style lang="scss" scoped>
.score-chord {
  display: grid;
  row-gap: 30px;

  .section {
    display: grid;
    row-gap: 5px;

    .chord {
      display: flex;

      .chord-item {
        flex-grow: var(--grow);
        flex-basis: 100%;
        font-size: 16px;
        text-align: left;
        padding: 0 5px;

        &:hover {
          background: #f7f7f7;
        }
      }
    }
    .lyrics {
      font-size: 16px;
    }
  }
}
</style>