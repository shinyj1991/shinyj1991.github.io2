<template>
  <div id="project">
    <h2>Project</h2>
    <div class="sort_area" v-if="sort_list.length">
      <div class="sort" v-for="(sort, index) in sort_list" :key="index">{{ sort }}<button type="button" class="delete" @click="delete_sort(sort)">close</button></div>
    </div>
    <ul>
      <li v-for="(project, index) in project_list" :key="index" v-show="project.show">
        <a :href="project.url" target="_blank" class="img">
          <img :src="project.img" alt="">
        </a>
        <div class="desc">
          <a :href="project.url" target="_blank" class="tit" v-html="project.tit"></a>
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
          url: 'https://www.insper.co.kr/main.do',
          tit: 'Insper',
          tag_list: ['구축', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/bnc.png'),
          url: 'http://www.brandncompany.com/',
          tit: 'Brand &amp; Company',
          tag_list: ['구축', '적응형', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/momntalk.png'),
          url: 'https://www.momntalk.com/',
          tit: 'Mom &amp; Talk',
          tag_list: ['구축', 'masonry', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/genedoctor.png'),
          url: false,
          tit: '진닥터',
          tag_list: ['구축', 'fullpage', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/gcem.png'),
          url: 'http://www.gcem.co.kr/',
          tit: 'GC녹십자EM',
          tag_list: ['구축', 'fullpage', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/newriver.png'),
          url: 'http://www.newriver.co.kr/',
          tit: 'Newriver',
          tag_list: ['구축', '반응형', 'jquery', 'angular'],
          show: true
        },
        {
          img: require('~/assets/images/project/newdinmall.png'),
          url: 'http://www.newdinmall.com/',
          tit: '뉴딘몰',
          tag_list: ['구축', '고도몰', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/golping.png'),
          url: 'http://golping.golfzon.com/',
          tit: '골핑',
          tag_list: ['구축', '유지보수', 'jquery', 'vue', 'nuxt'],
          show: true
        },
        {
          img: require('~/assets/images/project/gongcha.png'),
          url: 'https://www.gong-cha.co.kr/',
          tit: '공차',
          tag_list: ['구축', '유지보수', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/lottefinechem.gif'),
          url: 'https://www.lottefinechem.com/',
          tit: '롯데정밀화학',
          tag_list: ['구축', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/bluebird.png'),
          url: 'https://www.bluebirdcorp.com/',
          tit: 'Bluebird',
          tag_list: ['구축', '반응형', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/coffinegurunaru.png'),
          url: 'http://www.coffine.co.kr/',
          tit: '커핀그루나루',
          tag_list: ['구축', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/clipartkorea.png'),
          url: 'https://www.clipartkorea.co.kr/',
          tit: '클립아트코리아',
          tag_list: ['구축', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/imagetoday.png'),
          url: 'https://www.imagetoday.co.kr/',
          tit: '이미지투데이',
          tag_list: ['구축', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/tongroimages.png'),
          url: 'https://www.tongro.co.kr/',
          tit: '통로이미지',
          tag_list: ['구축', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/alphascan.gif'),
          url: 'https://www.alphascan.co.kr/',
          tit: '알파스캔',
          tag_list: ['구축', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/samsungshi.gif'),
          url: 'http://www.samsungshi.com/',
          tit: '삼성중공업',
          tag_list: ['유지보수', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/gumbook.gif'),
          url: 'http://www.gumbook.co.kr/',
          tit: '껌북',
          tag_list: ['구축', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/megabox.png'),
          url: 'https://www.megabox.co.kr/',
          tit: '메가박스',
          tag_list: ['프로모션', '유지보수', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/sulwhasoo.png'),
          url: 'https://www.sulwhasoo.com/',
          tit: '설화수',
          tag_list: ['프로모션', 'video', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/bmpark.gif'),
          url: 'https://www.bmpark.co.kr/',
          tit: '분당메모리얼파크',
          tag_list: ['구축', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/xeohair.png'),
          url: 'http://www.xeohair.com/',
          tit: '제오헤어',
          tag_list: ['구축', '유지보수', '반응형', 'jquery'],
          show: true
        },
        {
          img: require('~/assets/images/project/myearn.svg'),
          url: 'https://myearn.co.kr/',
          tit: '마이언',
          tag_list: ['구축', '유지보수', '반응형', 'chart', 'jquery', 'rivets'],
          show: true
        },
        {
          img: require('~/assets/images/project/allround.svg'),
          url: 'https://the-allround.com/',
          tit: '올라운드',
          tag_list: ['구축', '유지보수', 'chart', 'jquery', 'rivets', 'vue'],
          show: true
        },
        {
          img: require('~/assets/images/project/jament.svg'),
          url: 'https://jament.co.kr/',
          tit: '잼엔터테인먼트',
          tag_list: ['구축', '반응형', 'jquery', 'rivets'],
          show: true
        },
        {
          img: require('~/assets/images/project/slorder.svg'),
          url: 'https://slorder.co.kr/',
          tit: '슬로더',
          tag_list: ['구축', '적응형', 'jquery', 'rivets'],
          show: true
        },
        {
          img: require('~/assets/images/project/gachon.png'),
          url: false,
          tit: '가천대학교 총동문회',
          tag_list: ['구축', '적응형', 'scss', 'jquery', 'vue'],
          show: true
        },
        {
          img: require('~/assets/images/project/nbholdings.svg'),
          url: 'https://nbholdings.co.kr/',
          tit: '뉴본홀딩스',
          tag_list: ['구축', '반응형', 'scss', 'vue', 'nuxt'],
          show: true
        },
        {
          img: require('~/assets/images/project/acecounter.png'),
          url: 'https://www.acecounter.com/',
          tit: '에이스카운터',
          tag_list: ['구축', 'jquery'],
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
    li {color: #cccccc;
      .img {display: flex; justify-content: center; align-items: center; height: 120px; padding: 12px; background: #ffffff; transition: box-shadow 150ms;
        img {max-width: 60%; max-height: 60%;}
      }
      .tit {display: inline-block; margin-top: 12px; font-size: 16px;}
      .tag {display: flex; flex-wrap: wrap; margin-top: 2px;
        button {font-size: 12px;
          &:not(:last-child) {margin-right: 6px;}
          &:hover {text-decoration: underline; color: #f3b605;}
          &:before {content: '#';}
        }
      }
      &:hover {
        .img {box-shadow: 0 0 12px 0 #ffffff;}
        .tit {color: #ffffff;}
      }
    }
  }
}
</style>