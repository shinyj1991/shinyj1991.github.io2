<template>
  <div
    v-if="isPopupChord"
    class="popup-chord"
    @click.self="$emit('update:isPopupChord', false)"
  >
    <div class="inner">
      <h1 class="chord-name">{{ chord.name }}</h1>
      <div class="chord-score" :class="`start-${chord.start}`">
        <div
          class="plat"
          v-for="(plat, x) in chord.position"
          :key="x"
        >
          <div class="plat-number">{{ chord.start + x }}</div>
          <div
            class="line"
            v-for="(line, y) in plat"
            :key="y"
          >
            <div class="circle" v-if="line == 1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chord: {
      type: Object,
      default: {}
    },
    isPopupChord: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.popup-chord {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #000;

  .inner {
    padding: 20px;
    background: #fff;

    .chord-name {
      text-align: center;
      font-weight: 700;
      font-size: 30px;
      line-height: 1;
      margin-bottom: 30px;
    }
    .chord-score {
      position: relative;
      display: flex;
      border-left: 1px solid #000;

      &.start-0 {
        // border-left: 5px solid #000;
        &::before {
          display: block;
          content: '';
          position: absolute;
          top: 0;
          left: -5px;
          bottom: 0;
          width: 5px;
          border-top: 1px solid #000;
          border-left: 3px solid #000;
          border-bottom: 1px solid #000;
        }
      }

      .plat {
        position: relative;
        display: grid;
        row-gap: 20px;
        border-right: 1px solid #000;

        .plat-number {
          position: absolute;
          top: -22px;
          left: -5px;
        }
        .line {
          position: relative;
          width: 120px;
          border-bottom: 1px solid #000;

          @media screen and (max-width: 768px) {
            width: 80px;
          }

          .circle {
            position: absolute;
            top: -7px;
            left: calc(50% - 8px);
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #000;
          }
        }
      }
    }
  }
}
</style>