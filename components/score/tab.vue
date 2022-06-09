<template>
  <div class="score-tab" :style="`grid-template-columns: repeat(${measure}, 1fr);`">
    <div 
      class="measure"
      :class="{
        isChord: measure.chord,
        isLyrics: measure.lyrics,
        isTab: measure.nodelist,
        isDisabled: measure.disabled
      }"
      v-for="(measure, index) in score.contents" :key="index"
    >
      <div class="chord-list">
        <button type="button" class="chord" v-for="(chord, index) in measure.chord" :key="index"
          :style="`
            flex-grow: ${chord.grow ? chord.grow : 1};
            flex-basis: ${100 * ((chord.grow ? chord.grow : 1) / measure.chord.length)}%;
          `"
          @click="openPopupChord(chord.name.replace(/\//gi, '_').replace('M', 'maj'))"
        >{{ chord.name }}</button>
      </div>
      <div class="tab-area" v-if="measure.nodelist">
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
      <div class="lyrics-list">
        <div class="lyrics" v-for="lyrics in measure.lyrics">{{ lyrics }}</div>
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
  methods: {
    async openPopupChord(name) {
      this.chord = await this.$content(`chord/${name}`).fetch();
      this.isPopupChord = true;
    }
  },
  async created() {
    // 2022-06-09 코드 팝업이 처음 1회 늦게 뜨는 현상 방지
    this.chord = await this.$content(`chord/C`).fetch();
  }
};
</script>

<style lang="scss" scoped>
.score-tab {
  display: grid;
  row-gap: 30px;

  .measure {
    position: relative;

    &.isChord {
      padding-top: 35px;
    }
    &.isLyrics {
      padding-bottom: 40px;
    }
    &:not(.isTab) {
      border: 1px solid #ccc;
      padding: 0;
      height: 60px;
      margin: 0 3px;
    }
    &:nth-child(4n + 1) {
      .line-list {
        border-left: 1px solid #000;
      }
    }
    &.isDisabled {
      border: none;
    }
    .chord-list {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;

      .chord {
        font-size: 14px;
        line-height: 30px;
        text-align: left;
        padding: 0 5px;

        &:hover {
          background: #f7f7f7;
        }
      }
    }
    .tab-area {
      position: relative;
      display: flex;
      height: 66px;
      padding: 0 5px;

      .line-list {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        border-right: 1px solid #000;

        .line {
          width: 100%;
          border-bottom: 1px solid #bbb;
        }
      }
      .node-list {
        position: relative;
        text-align: left;
        z-index: 1;
        margin: -6px 0;
        padding: 0 0 0 5px;

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
    .lyrics-list {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 5px;
      background: #f7f7f7;

      .lyrics {
        display: flex;
        align-items: center;
        font-size: 14px;
        line-height: 15px;
        min-height: 30px;
      }
    }
  }
}
</style>