<template>
  <div
    class="popup-chord"
    @click.self="$emit('update:isPopupChord', false)"
    v-if="isPopupChord"
  >
    <article-chord :chord="chord" />
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>