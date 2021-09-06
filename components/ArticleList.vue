<template>
  <div class="article_list">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.article_list {padding: 50px 50px 100px; max-width: 1000px;
  ul {
    li {
      a {padding: 12px 24px; display: block;
        &:hover {background: #2c343e;}
        .subject {font-weight: 700; font-size: 16px;}
        .info {display: flex; margin-top: 10px; font-size: 12px;
          .author {margin-left: 15px;}
        }
      }
    }
  }
  .btn_area {margin-top: 30px;
    button {padding: 12px 30px; background: #f7f7f7; transition: all 300ms;
      &:hover {background: #3273eb; color: #ffffff;}
    }
  }
}
</style>