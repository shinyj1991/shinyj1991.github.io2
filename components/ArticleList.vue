<template>
  <div class="article_list">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.article_list {padding: 50px 50px 100px; max-width: 1000px;
  ul {
    li {border-left: 3px solid #2c343e;
      &:not(:first-child) {margin-top: 24px;}
      a {padding: 12px 24px; display: block;
        &:hover {background: #2c343e;}
        .category {margin-bottom: 5px; font-size: 12px;}
        .subject {font-size: 16px;}
        .info {display: flex; margin-top: 10px; font-size: 12px;
          .author {margin-left: 15px;}
        }
      }
    }
  }
  .btn_area {margin-top: 30px;
    button {padding: 12px 30px; transition: all 300ms;
      &:hover {text-decoration: underline;}
    }
  }
  .loading {margin-top: 30px; padding: 12px 30px;}
}
</style>