<template>
  <div id="history">
    <h2>History</h2>
    <ol class="history">
      <li>
        <div class="company">뉴본홀딩스</div>
        <div class="period">근무기간 : 2019. 02 ~ {{ newborn.year }}. {{ newborn.month }} ({{ newborn_period }})</div>
        <div class="skills">사용기술 : html, css, javascript, jquery, vue.js, nuxt, rivets</div>
        <div class="detail">상세업무 : 인하우스 프로젝트 구축 및 고도화, 웹 아웃소싱 구축 및 유지보수</div>
      </li>
      <li>
        <div class="company">프리랜서</div>
        <div class="period">업무기간 : 2018. 09 ~ 2019. 01 (5개월)</div>
        <div class="skills">사용기술 : html, css, javascript, jquery, vue.js, nuxt</div>
        <div class="detail">상세업무 : 웹 아웃소싱 구축 및 유지보수, 플러그인 제작</div>
      </li>
      <li>
        <div class="company">뉴리버</div>
        <div class="period">근무기간 : 2015. 04 ~ 2018. 08 (3년 5개월)</div>
        <div class="skills">사용기술 : html, css, javascript, jquery, vue.js, nuxt</div>
        <div class="detail">상세업무 : 웹 아웃소싱 구축 및 유지보수, 웹퍼블리싱 팀장 업무 수행</div>
      </li>
      <li>
        <div class="company">메가코딩</div>
        <div class="period">근무기간 : 2014. 02 ~ 2015. 03 (1년 2개월)</div>
        <div class="skills">사용기술 : html, css, javascript, jquery</div>
        <div class="detail">상세업무 : 웹 아웃소싱 구축 및 유지보수</div>
      </li>
      <li>
        <div class="company">Wise C&amp;S</div>
        <div class="period">근무기간 : 2013. 09 ~ 2014. 01 (5개월)</div>
        <div class="skills">사용기술 : html, css, javascript, jquery</div>
        <div class="detail">상세업무 : 테이블 구조의 공고 코딩, 인트라넷 구축</div>
      </li>
    </ol>
    <p class="total">총 경력 : {{ total_period }}</p>
  </div>
</template>

<script>
const today = new Date();

/*
소프트웨어개발자(133)
주식회사뉴본홀딩스
2019-02-18 ~

웹전문가(204)
뉴리버（Newriver
2015-06-01 ~ 2018-08-04

경영지원및행정관련 사무원(024)
(주)이안소프트
2014-05-01 ~ 2015-03-01

웹전문가(204)
(주)와이즈씨앤에스
2013-09-02 ~ 2014-01-17
*/

export default {
  data() {
    return {
      newborn: {
        year: today.getFullYear(),
        month: (`0${today.getMonth() + 1}`).slice(-2)
      }
    }
  },
  computed: {
    newborn_period() {
      return this.computed_period(2019, 2);
    },
    total_period() {
      return this.computed_period(2013, 9);
    }
  },
  methods: {
    computed_period(y, m) {
      let year = '';
      let month = '';
      if (today.getMonth() < (m - 1)) {
        year = today.getFullYear() - (y + 1);
        month = 12 - today.getMonth();
      } else {
        year = today.getFullYear() - y;
        month = today.getMonth() - (m - 1);
      }
      return `${year}년 ${month}개월`;
    }
  }
}
</script>

<style lang="scss" scoped>
#history {padding: 50px 50px 100px;
  h2 {margin-bottom: 50px; font-weight: 700; font-size: 30px;}
  .history {padding: 0 1em;
    li {position: relative; padding-left: 100px;
      &:not(:last-child) {margin-bottom: 30px;}
      .company {position: absolute; top: 0; left: 0;}
    }
  }
  .total {padding: 0 1em; font-size: 18px; margin-top: 3em;}
}
</style>