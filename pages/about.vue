<template>
  <div id="about">
    <h2>About</h2>
    <section>
      <h3>이력</h3>
      <ol class="history">
        <li>
          <div class="company">Wise C&amp;S</div>
          <div class="period">근무기간 : 2013. 10 ~ 2014. 01 (4개월)</div>
          <div class="skills">사용기술 : html, css, javascript, jquery</div>
          <div class="detail">상세업무 : 테이블 구조의 공고 코딩, 인트라넷 구축</div>
        </li>
        <li>
          <div class="company">메가코딩</div>
          <div class="period">근무기간 : 2014. 02 ~ 2015. 03 (1년 2개월)</div>
          <div class="skills">사용기술 : html, css, javascript, jquery</div>
          <div class="detail">상세업무 : 웹 아웃소싱 구축 및 유지보수</div>
        </li>
        <li>
          <div class="company">뉴리버</div>
          <div class="period">근무기간 : 2015. 04 ~ 2018. 08 (3년 5개월)</div>
          <div class="skills">사용기술 : html, css, javascript, jquery, vue.js, nuxt</div>
          <div class="detail">상세업무 : 웹 아웃소싱 구축 및 유지보수, 웹퍼블리싱 팀장 업무 수행</div>
        </li>
        <li>
          <div class="company">프리랜서</div>
          <div class="period">업무기간 : 2018. 09 ~ 2019. 01 (5개월)</div>
          <div class="skills">사용기술 : html, css, javascript, jquery, vue.js, nuxt</div>
          <div class="detail">상세업무 : 웹 아웃소싱 구축 및 유지보수, 플러그인 제작</div>
        </li>
        <li>
          <div class="company">뉴본홀딩스</div>
          <div class="period">근무기간 : 2019. 02 ~ {{ newborn.year }}. {{ newborn.month }} ({{ period }})</div>
          <div class="skills">사용기술 : html, css, javascript, jquery, vue.js, nuxt, rivets</div>
          <div class="detail">상세업무 : 인하우스 프로젝트 구축 및 고도화, 웹 아웃소싱 구축 및 유지보수</div>
        </li>
      </ol>
    </section>
    <section>
      <h3>소개</h3>
      <ul class="hashtag">
        <li>#미니멀리즘</li>
        <li>#파이어족</li>
        <li>#새벽형인간</li>
        <li>#달리기</li>
        <li>#독서</li>
      </ul>
      <div class="about">
        <p>
          소박하고 단순하게 살고 싶은 프론트엔드 개발자 신용준입니다.<br>
          계획적인 것을 좋아하고 효율을 중요시합니다.<br>
          유능한 사람이 상황을 제어해줄 때 편안함을 느낍니다.<br>
          꼼꼼하여 실수가 적고 손이 빠릅니다.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
const today = new Date();

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
    period: () => {
      let year = '';
      let month = '';
      if (today.getMonth() == 0) {
        year = today.getFullYear() - 2020;
        month = 11;
      } else {
        year = today.getFullYear() - 2019;
        month = today.getMonth() - 1;
      }
      return `${year}년 ${month}개월`;
    }
  }
}
</script>

<style lang="scss" scoped>
#about {padding: 50px 50px 100px;
  h2 {margin-bottom: 50px; font-weight: 700; font-size: 30px;}
  section {
    &:not(:last-child) {margin-bottom: 50px;}
    h3 {margin-bottom: 24px; font-size: 20px;}
    .history {padding: 0 1em;
      li {position: relative; padding-left: 100px;
        &:not(:last-child) {margin-bottom: 30px;}
        .company {position: absolute; top: 0; left: 0;}
      }
    }
    .hashtag {display: flex; margin-bottom: 1em; padding: 0 1em;
      li {margin-right: 12px;}
    }
    .about {padding: 0 1em;}
  }
}
</style>