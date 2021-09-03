<template>
  <section class="article_head">
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
.article_head {padding: 0 0 30px; margin-bottom: 50px; border-bottom: 2px solid #dddddd;
  h1 {margin-bottom: 30px; font-weight: 700; font-size: 32px;}
  .info {display: flex; font-size: 12px;
    .writer {margin-left: 15px;}
  }
}
</style>