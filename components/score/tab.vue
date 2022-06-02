<template>
  <div class="score-tab" :style="`grid-template-columns: repeat(${measure}, 1fr);`">
    <div class="measure" v-for="(measure, index) in score.contents" :key="index">
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
  </div>
</template>

<script>
export default {
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
  }
};
</script>

<style lang="scss" scoped>
.score-tab {
  display: grid;
  row-gap: 30px;

  .measure {
    display: flex;
    position: relative;
    height: 66px;
    border-right: 1px solid #000;
    padding: 0 5.555555%;

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