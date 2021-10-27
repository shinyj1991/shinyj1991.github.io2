<template>
  <div id="example">
    <h2>Example</h2>
    <button @click.prevent="increment">increment</button>
    <p>{{ $store.state.example.val }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    increment() {
      this.$store.commit("example/increment");
    },
  }
}
</script>

<style lang="scss" scoped>
#example {padding: 50px 50px 100px;
  h2 {margin-bottom: 50px; font-weight: 700; font-size: 30px;}
}
</style>