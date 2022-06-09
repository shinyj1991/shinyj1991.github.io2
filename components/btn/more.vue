<template>
  <component 
    :is="tag" 
    :type="tag === 'button' ? 'button' : null"
    :to="tag === 'nuxt-link' ? to : null"
    class="btn-more"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    to: {
      type: String,
      default: '/',
    },
  }
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