<template>
  <section class="score-head">
    <h1>{{ music.singer }} - {{ music.title }}</h1>
    <div class="info">
      <div class="date">Capo : {{ music.capo }}</div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    music: {
      type: Object,
      default: {}
    }
  },
}
</script>

<style lang="scss" scoped>
.score-head {
  padding: 0 0 30px; 
  margin-bottom: 50px; 
  border-bottom: 2px solid #dddddd;

  h1 {
    margin-bottom: 30px; 
    font-weight: 700; 
    font-size: 32px;
  }
  .info {
    display: flex; 
    column-gap: 12px;
    font-size: 12px;

    .writer {
      margin-left: 15px;
    }
  }

@media screen and (max-width: 1200px) {
  h1 {
    margin-bottom: 20px;
    font-size: 26px;
  }
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 20px;
  }
}}
</style>