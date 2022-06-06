<template>
  <header class="score-head">
    <div class="hgroup">
      <h2>{{ music.musician }} - {{ music.title }}</h2>
      <div class="year">{{ music.year }}</div>
    </div>
    <div class="info">
      <div class="date">Capo : {{ music.capo }}</div>
    </div>
  </header>
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

  .hgroup {
    text-align: center;
    margin-bottom: 30px; 

    h1 {
      font-weight: 700; 
      font-size: 32px;
    }
    .year {
      margin-top: 5px;
      font-size: 14px;
      color: #666;
    }
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
  .hgroup {
    h1 {
      font-size: 26px;
    }
  }
}}
</style>