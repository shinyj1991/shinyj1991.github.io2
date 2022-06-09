<template>
  <button type="button" class="btn-more" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.btn-more {
  border: 1px solid #ccc;
  padding: 8px 10px;
  font-size: 14px;

  &:hover {
    background: #f7f7f7;
  }
}
</style>