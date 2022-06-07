<template>
  <div>
    <h6>
      <span>Reply</span>
      <small class="text-xs">Must have a Github account</small>
    </h6>
  </div>
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

<style>
.utterances {
  width: 100%;
  margin: 100px 0 0 !important;
  max-width: 100%;
}
</style>