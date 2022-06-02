<template>
  <div class="score-tab" :style="`grid-template-columns: repeat(${measure}, 1fr);`">
    <div class="measure" v-for="(measure, index) in score.contents" :key="index">
      <div class="chord-list">
        <button type="button" class="chord" v-for="(chord, index) in measure.chordlist" :key="index"
          :style="`
            flex-grow: ${chord.grow ? chord.grow : 1};
            flex-basis: ${100 * ((chord.grow ? chord.grow : 1) / measure.chordlist.length)}%;
          `"
          @click="openPopupChord(chord.name)"
        >{{ chord.name }}</button>
      </div>
      <div class="line-list">
        <div class="line" v-for="(line, index) in 6" :key="index"></div>
      </div>
      <div class="node-list" v-for="(nodelist, index) in measure.nodelist" :key="index" 
        :style="`
          flex-grow: ${nodelist.grow};
          flex-basis: ${100 * ((nodelist.grow) / measure.nodelist.length)}%;
        `"
      >
        <div class="node" v-for="(node, index) in nodelist.node" :key="index">{{ node !== null ? node : '' }}</div>
      </div>
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
    measure: {
      measure: Number,
      default: 4
    },
    score: {
      type: Object,
      required: true
    },
  },
  computed: {
    dynamicImage() {
      return require(`~/assets/images/tab${this.src}`);
    }
  },
  methods: {
    async openPopupChord(name) {
      const chordName = name.replace(/\//gi, '-');
      const result = await this.$content(`chord/${chordName}`).fetch();
      this.chord = result;
      this.isPopupChord = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.score-tab {
  display: grid;
  row-gap: 60px;
  padding-top: 30px;

  .measure {
    display: flex;
    position: relative;
    height: 66px;
    border-right: 1px solid #000;
    padding: 0 4%;

    &:nth-child(4n + 1) {
      border-left: 1px solid #000;
    }
    .chord-list {
      position: absolute;
      top: -30px;
      left: 0;
      width: 100%;
      display: flex;

      .chord {
        font-size: 14px;
        text-align: left;
        padding: 3px 5px;

        &:hover {
          background: #f7f7f7;
        }
      }
    }
    .line-list {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: column;
      justify-content: space-between;

      .line {
        width: 100%;
        border-bottom: 1px solid #000;
      }
    }
    .node-list {
      position: relative;
      text-align: left;
      z-index: 1;
      margin: -6px 0;
      padding: 0 2px;

      .node {
        position: relative;
        z-index: 1;
        height: 13px;
        font-size: 12px;
        line-height: 13px;
        text-shadow: -2px 0 #fff, 0 2px #fff, 2px 0 #fff, 0 -2px #fff;
      }
    }
  }
}
</style>