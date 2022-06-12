<template>
  <div class="score-tab" :style="`grid-template-columns: repeat(${measure}, 1fr);`">
    <div 
      class="measure"
      :class="{
        isTab: measure.nodelist,
        isDisabled: measure.disabled
      }"
      v-for="(measure, index) in score.contents" :key="index"
    >
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
      <div class="chord-area">
        <div class="chord-list">
          <button type="button" class="chord" v-for="(chord, index) in measure.chord" :key="index"
            :style="`
              flex-grow: ${chord.grow ? chord.grow : 1};
              flex-basis: ${100 * ((chord.grow ? chord.grow : 1) / measure.chord.length)}%;
            `"
            @click="openPopupChord(chord)"
          >{{ chord.name }}</button>
        </div>
        <div class="lyrics-list">
          <div class="lyrics" v-for="(lyrics, index) in measure.lyrics" :key="index">{{ lyrics }}</div>
        </div>
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
    async openPopupChord(chord) {
      if (chord.isNotChord) return;
      this.chord = await this.$content(`chord/${chord.name.replace(/\//gi, '_').replace('M', 'maj')}`).fetch();
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
  row-gap: 60px;

  .measure {
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    row-gap: 20px;
    position: relative;

    &:nth-child(4n + 1) {
      .tab-area {
        border-left: 1px solid #000;
      }
      .chord-area {
        border-left: 1px solid #ccc;
      }
    }
    &.isDisabled {
      .chord-area {
        border-right: none;

        .lyrics-list {
          border-top: none;
        }
      }
    }
    .tab-area {
      position: relative;
      display: flex;
      height: 66px;
      padding: 0 5px;
      border-right: 1px solid #000;

      .line-list {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: space-between;

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
    .chord-area {
      border-right: 1px solid #ccc;

      .chord-list {
        width: 100%;
        height: 30px;
        display: flex;

        .chord {
          font-size: 14px;
          line-height: 30px;
          letter-spacing: -0.05em;
          text-align: left;
          padding: 0 5px;

          &:hover {
            background: #f7f7f7;
          }
        }
      }
      .lyrics-list {
        border-top: 1px solid #ccc;
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5px;

        .lyrics {
          display: flex;
          font-size: 14px;
          line-height: 15px;
        }
      }
    }
  }

@media screen and (max-width: 768px) {
  .measure {
    .chord-area {
      .chord-list {
        height: 24px;
        .chord {
          font-size: 12px;
          line-height: 24px;
        }
      }
      .lyrics-list {
        height: 24px;
        .lyrics {
          font-size: 12px;
          line-height: 24px;
        }
      }
    }
  }
}}
</style>