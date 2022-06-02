<template>
  <div class="article-chord">
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
          <div class="mute" v-if="line === 'M'"></div>
          <div class="open" v-if="line === 'O'"></div>
          <div class="barre" :style="`--barreHeight: ${line.charAt(1)}`" v-if="typeof line === 'string' && line.charAt(0) === 'B'"></div>
          <div class="circle" v-if="line === 1"></div>
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
  },
}
</script>

<style lang="scss" scoped>
.article-chord {
  padding: 20px 20px 20px 40px;
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
        .mute {
          position: absolute;
          top: -7px;
          left: -24px;
          width: 16px;
          height: 16px;

          &::before {
            display: block;
            content: '';
            width: 1px;
            height: 100%;
            background: #000;
            position: absolute;
            top: 0;
            left: 7px;
            transform: rotate(-45deg);
          }
          &::after {
            display: block;
            content: '';
            width: 1px;
            height: 100%;
            background: #000;
            position: absolute;
            top: 0;
            left: 7px;
            transform: rotate(45deg);
          }
        }
        .open {
          position: absolute;
          top: -7px;
          left: -24px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid #000;
        }
        .barre {
          position: absolute;
          top: -10px;
          left: calc(50% - 8px);
          width: 16px;
          height: calc(21px * var(--barreHeight));
          border-radius: 8px;
          background: #000;
        }
      }
    }
  }

  &.page {
    .chord-name {
      font-size: 20px;
    }
    .chord-score {
      .plat {
        width: 25%;

        .line {
          width: 100%;
        }
      }
    }
  }
}
</style>