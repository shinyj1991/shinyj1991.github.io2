<template>
  <div id="resume">
    <div class="page">
      <div class="profile">
        <dl class="info">
          <dt>신용준</dt>
          <dd class="birth"><i class="material-icons">cake</i> 1991. 11. 11</dd>
          <dd class="mail"><a href="mailto:shinyj1991@naver.com" target="_blank"><i class="material-icons">mail</i> shinyj1991@naver.com</a></dd>
          <dd class="tel"><a href="tel:010-6479-6698" target="_blank"><i class="material-icons">call</i> 010-6479-6698</a></dd>
          <dd class="blog"><a href="https://shinyj1991.github.io/blog" target="_blank"><i class="material-icons">home</i> https://shinyj1991.github.io/blog</a></dd>
          <dd class="github"><a href="https://github.com/shinyj1991" target="_blank"><i class="material-icons">home</i> https://github.com/shinyj1991</a></dd>
        </dl>
        <div class="photo">

        </div>
      </div>
      <section class="ability">
        <h2>핵심 역량</h2>
        <ul>
          <li>Html, SCSS, Javascript를 사용한 빠르고 정확한 하드코딩</li>
          <li>Photoshop, Zeplin을 이용한 디자인 협업 능력</li>
          <li>jQuery 라이브러리 제작 경험</li>
          <li>비동기서버통신(Ajax)을 사용하여 프론트엔드 개발 경험</li>
          <li>vue.js(nuxt.js) 마크업 및 프론트엔드 개발 경험</li>
          <li>차트 라이브러리(amchart, chart.js)를 사용한 데이터 시각화 능력</li>
        </ul>
      </section>
      <section class="history">
        <h2>경력 사항</h2>
        <ol>
          <li>
            <div class="period">2019. 2 ~ 현재<br>(2년 11개월)</div>
            <div class="company">뉴본홀딩스</div>
            <div class="position">웹퍼블리셔, 프론트엔드 (과장)</div>
            <div class="description">
              변액보험 플랫폼, 자사 ERP 퍼블리싱 및 프론트개발(rivets.js, vue.js)<br>
              고객사 웹사이트 및 플랫폼 아웃소싱(nuxt.js)<br>
              차트 라이브러리를 사용한 데이터 시각화<br>
              팀소개 페이지에 각 팀원들의 정체성을 반영한 인터렉션 
            </div>
          </li>
          <li>
            <div class="period">2015. 4 ~ 2018. 8<br>(3년 5개월)</div>
            <div class="company">뉴리버</div>
            <div class="position">웹퍼블리셔 (팀장)</div>
            <div class="description">
              웹사이트 구축 및 유지보수 아웃소싱<br>
              parallax, flip, masonry 등 여러 인터렉션 구현<br>
              jquery plugin 제작 (datepicker, imageslider)
            </div>
          </li>
          <li>
            <div class="period">2014. 2 ~ 2015. 3<br>(1년 2개월)</div>
            <div class="company">메가코딩</div>
            <div class="position">웹퍼블리셔 (사원)</div>
            <div class="description">
              웹페이지 구축 및 유지보수 아웃소싱<br>
              IE7 ~ 11, Firefox, Safari(windows) 크로스 브라우징
            </div>
          </li>
        </ol>
      </section>
    </div>
    <div class="page">
      <section class="history">
        <ol>
          <li>
            <div class="period">2013. 9 ~ 2014. 1<br>(5개월)</div>
            <div class="company">WiseC&amp;S</div>
            <div class="position">웹퍼블리셔</div>
            <div class="description">
              잡코리아에 올라가는 공고를 테이블 코딩<br>
              유료 공고 템플릿 신규개발<br>
              내부적으로 리소스를 공유하는 인트라넷 구축
            </div>
          </li>
        </ol>
      </section>
      <section class="academic">
        <h2>자기 소개서</h2>
        <div class="contents">
          군대 전역후 누나의 권유로 국비지원과정을 수료하고 웹퍼블리셔의 길로 들어섰습니다.
          23살에 처음 취업한 회사는 잡*리아 위탁업 테이블 태그를 이용한 채용공고페이지를 코딩하는 곳이었는데 속도
        </div>
      </section>
      <section class="academic">
        <h2>연봉사항</h2>
      </section>
      <section class="academic">
        <h2>기타사항</h2>
        <p>군대, 학원 (국비지원)</p>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  layout: 'resume',
  methods: {}
}
</script>

<style lang="scss">
/*
#0d6ba6
#023859
#f29f05
#f28907
#f27649
*/
#resume {display: grid; row-gap: 30px; padding: 30px 0; color: #333333;
  .page {width: 100%; padding: 50px; height: 1122px; background: #ffffff;
    > section {position: relative;
      > h2 {margin-bottom: 12px; font-weight: 700; font-size: 20px; color: #023859;}
      &:not(:first-child) {margin-top: 50px;}
    }
  }

  .profile {display: flex; justify-content: space-between; align-items: center;
    .info {
      dt {margin-bottom: 24px; font-weight: 700; font-size: 40px; color: #f27649;}
      dd {display: flex; align-items: center; line-height: 2;}
    }
    .photo {width: 200px; height: 240px; background: #cccccc;}
  }

  .ability {
    ul {padding-left: 2em;
      li {list-style: disc; line-height: 2;}
    }
  }

  .history {
    ol {display: grid; row-gap: 30px;
      li {position: relative; padding-left: 160px;
        .period {position: absolute; top: 0; left: 0; font-size: 14px; color: #023859;}
        .company {font-weight: 700; color: #023859;}
        .position {margin-bottom: 10px; color: #f29f05;}
      }
    }
  }

  @media print {padding: 0; row-gap: 0;}
}
</style>