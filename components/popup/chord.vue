<template>
    <div
      class="popup-chord"
      @click.self="$emit('update:isPopupChord', false)"
      v-if="isPopupChord"
    >
      <transition name="fade">
        <article-chord v-if="isChord" :chord="chord" />
      </transition>
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
  },
  data: () => ({
    isChord: false
  }),
  updated() {
    this.isChord = this.isPopupChord;
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
  z-index: 100;
  background: rgba(0, 0, 0, 0.7);
  color: #000;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 160ms, transform 160ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.4);
  transform-origin: 50%;
}
</style>