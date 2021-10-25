<template>
  <div id="project">
    <h2>Project</h2>
    <div class="sort_area" v-if="sort_list.length">
      <div class="sort" v-for="(sort, index) in sort_list" :key="index">{{ sort }}<button type="button" class="delete" @click="delete_sort(sort)">close</button></div>
    </div>
    <ul>
      <li v-for="(project, index) in project_list" :key="index" v-show="project.show">
        <div class="img">
          <img :src="project.img" alt="">
        </div>
        <div class="desc">
          <div class="tit" v-html="project.tit"></div>
          <div class="tag">
            <button type="button" v-for="(tag, index) in project.tag_list" :key="index" @click="regist_sort(tag)">{{ tag }}</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project_list: [
        {
          img: require('~/assets/images/project/insper.png'),
          tit: 'Insper',
          tag_list: ['구축', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/bnc.png'),
          tit: 'Brand &amp; Company',
          tag_list: ['구축', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/momntalk.png'),
          tit: 'Mom &amp; Talk',
          tag_list: ['구축', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/genedoctor.png'),
          tit: '진닥터',
          tag_list: ['구축', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/gcem.png'),
          tit: 'GC녹십자EM',
          tag_list: ['구축', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/newriver.png'),
          tit: 'Newriver',
          tag_list: ['구축', 'html', 'css', 'javascript', 'jquery', 'angular'],
          show: true
        },
        {
          img: require('~/assets/images/project/newdinmall.png'),
          tit: '뉴딘몰',
          tag_list: ['구축', '고도몰', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/golping.png'),
          tit: '골핑',
          tag_list: ['구축', '유지보수', 'html', 'css', 'javascript', 'jquery', 'vue', 'nuxt'],
          show: true
        },
        {
          img: require('~/assets/images/project/gongcha.png'),
          tit: '공차',
          tag_list: ['구축', '유지보수', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/lottefinechem.gif'),
          tit: '롯데정밀화학',
          tag_list: ['구축', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/bluebird.png'),
          tit: 'Bluebird',
          tag_list: ['구축', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/coffinegurunaru.png'),
          tit: '커핀그루나루',
          tag_list: ['구축', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/clipartkorea.png'),
          tit: '클립아트코리아',
          tag_list: ['구축', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/imagetoday.png'),
          tit: '이미지투데이',
          tag_list: ['구축', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/tongroimages.png'),
          tit: '통로이미지',
          tag_list: ['구축', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/alphascan.gif'),
          tit: '알파스캔',
          tag_list: ['구축', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/samsungshi.gif'),
          tit: '삼성중공업',
          tag_list: ['유지보수', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/gumbook.gif'),
          tit: '껌북',
          tag_list: ['구축', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/megabox.png'),
          tit: '메가박스',
          tag_list: ['프로모션', '유지보수', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/sulwhasoo.png'),
          tit: '설화수',
          tag_list: ['프로모션', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/bmpark.gif'),
          tit: '분당메모리얼파크',
          tag_list: ['구축', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/xeohair.png'),
          tit: '제오헤어',
          tag_list: ['구축', '유지보수', 'html', 'css', 'javascript', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/myearn.svg'),
          tit: '마이언',
          tag_list: ['구축', '유지보수', 'html', 'css', 'javascript', 'jquery', 'rivets'],
          show: true
        },
        {
          img: require('~/assets/images/project/allround.svg'),
          tit: '올라운드',
          tag_list: ['구축', '유지보수', 'html', 'css', 'javascript', 'jquery', 'rivets', 'vue'],
          show: true
        },
        {
          img: require('~/assets/images/project/jament.svg'),
          tit: '잼엔터테인먼트',
          tag_list: ['구축', 'html', 'css', 'javascript', 'jquery', 'rivets'],
          show: true
        },
        {
          img: require('~/assets/images/project/slorder.svg'),
          tit: '슬로더',
          tag_list: ['구축', 'html', 'css', 'javascript', 'jquery', 'rivets'],
          show: true
        },
        {
          img: require('~/assets/images/project/gachon.png'),
          tit: '가천대학교 총동문회',
          tag_list: ['구축', 'html', 'scss', 'javascript', 'jquery', 'vue'],
          show: true
        },
        {
          img: require('~/assets/images/project/nbholdings.svg'),
          tit: '뉴본홀딩스',
          tag_list: ['구축', 'html', 'scss', 'javascript', 'vue', 'nuxt'],
          show: true
        },
      ],
      sort_list: []
    }
  },
  mounted() {
    this.project_list.sort((a, b) => a.tit > b.tit ? 1 : -1);
  },
  methods: {
    regist_sort(tag) {
      if (this.sort_list.indexOf(tag) === -1) {
        this.sort_list.push(tag);
      }

      this.action_sort();
    },
    delete_sort(tag) {
      this.sort_list.splice(this.sort_list.indexOf(tag), 1);

      this.action_sort();
    },
    action_sort() {
      window.scrollTo(0,0);

      for (let project of this.project_list) {
        let is_push = true;
        for (let sort of this.sort_list) {
          if (project.tag_list.indexOf(sort) === -1) {
            is_push = false;
          }
        }
        if (is_push) {
          project.show = true;
        } else {
          project.show = false;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#project {padding: 50px 50px 100px;
  h2 {margin-bottom: 24px; font-weight: 700; font-size: 30px;}
  .sort_area {display: flex; margin-bottom: 30px;
    .sort {display: flex; align-items: center; padding: 3px 8px; border: 1px solid #ffffff; border-radius: 16px;
      &:not(:first-child) {margin-left: 12px;}
      .delete {width: 16px; height: 16px; margin-left: 4px; font-size: 16px; line-height: 16px; font-family: 'Material Icons';
        &:hover {background: #333333;}
      }
    }
  }
  ul {display: grid; grid-template-columns: repeat(4, 1fr); column-gap: 30px; row-gap: 30px; max-width: 1200px;
    li {
      .img {display: flex; justify-content: center; align-items: center; height: 120px; padding: 12px; background: #ffffff;
        img {max-width: 60%; max-height: 60%;}
      }
      .tit {margin-top: 12px; font-size: 16px;}
      .tag {display: flex; flex-wrap: wrap; margin-top: 2px;
        button {font-size: 12px;
          &:not(:last-child) {margin-right: 6px;}
          &:hover {text-decoration: underline; color: #f3b605;}
          &:before {content: '#';}
        }
      }
    }
  }
}
</style>