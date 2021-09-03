<template>
  <div class="aside_navi">
    <h1 class="logo"><NuxtLink to="/">test</NuxtLink></h1>
    <ul class="gnb">
      <li><NuxtLink to="/article/cate">Cate</NuxtLink></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.aside_navi {position: absolute; top: 0; left: 0; width: 240px; min-height: 100%; border-right: 1px solid #eeeeee; padding: 50px 12px; background: #ffffff;
  .logo {margin-bottom: 50px; padding: 0 12px;
    a {display: block;
      img {width: 100%;}
    }
  }
  .gnb {border-top: 2px solid #3273eb; border-bottom: 2px solid #eeeeee;
    > li {
      > a {display: block; padding: 8px 5px; font-size: 13px;
        &:hover {background: rgba(50, 115, 235, 0.2);}
      }
      &:nth-child(even) {background: #f7f7f7;}
    }
  }
}
</style>