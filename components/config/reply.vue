<template>
  <div class="config-reply" />
</template>

<script>
export default {
  mounted() {
    const scriptTag = document.createElement('SCRIPT')
    scriptTag.setAttribute('src', 'https://utteranc.es/client.js')
    scriptTag.setAttribute('repo', 'shinyj1991/exit5-nuxt2')
    scriptTag.setAttribute('issue-term', 'pathname')
    scriptTag.setAttribute('label', 'reply')
    scriptTag.setAttribute('theme', 'github-light')
    scriptTag.setAttribute('crossorigin', 'anonymous')
    scriptTag.setAttribute('async', 'async')
    this.$el.append(scriptTag)
  },
}
</script>

<style lang="scss" scoped>
.config-reply {
  width: 100%;
  margin-top: 100px;
  max-width: 100%;


@media screen and (max-width: 1200px) {
  margin-top: 50px;
}}
</style>