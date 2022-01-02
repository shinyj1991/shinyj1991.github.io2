<template>
  <div id="resume">
    <div class="page">
      <div class="profile">
        <div class="photo">

        </div>
        <dl class="info">
          <dt>신용준</dt>
          <dd class="birth"><i class="material-icons">cake</i> 1991. 11. 11</dd>
          <dd class="mail"><a href="mailto:shinyj1991@naver.com" target="_blank"><i class="material-icons">mail</i> shinyj1991@naver.com</a></dd>
          <dd class="tel"><a href="tel:010-6479-6698" target="_blank"><i class="material-icons">call</i> 010-6479-6698</a></dd>
          <dd class="blog"><a href="https://shinyj1991.github.io/blog" target="_blank"><i class="material-icons">home</i> https://shinyj1991.github.io/blog</a></dd>
          <dd class="github"><a href="https://github.com/shinyj1991" target="_blank"><i class="material-icons">home</i> https://github.com/shinyj1991</a></dd>
        </dl>
      </div>
      <div class="ability">
        <h2>핵심 역량</h2>
        <ul>
          <li>Html, SCSS, Javascript를 사용한 빠르고 정확한 하드코딩</li>
          <li>Photoshop, Zeplin을 이용한 디자인 협업 능력</li>
          <li>jQuery 라이브러리 제작 경험 (Datepicker, Imageslider)<br>
            <a href="https://shinyj1991.github.io/kronos/" target="_blank" class="link">https://shinyj1991.github.io/kronos/</a>
          </li>
          <li>비동기서버통신(Ajax)을 사용하여 프론트엔드 개발 경험</li>
          <li>vue.js(nuxt.js)를 이용한 마크업 및 프론트엔드 개발 경험</li>
          <li>차트 라이브러리(amchart, chart.js)를 사용하여 데이터를 시각화하는 능력</li>
        </ul>
      </div>
      <div class="history">
        <h2>상세 경력</h2>
        <ol>
          <li>
            <div class="period">2019. 2 ~ 현재 (2년 11개월)</div>
            <div class="company">뉴본홀딩스</div>
            <div class="position">웹퍼블리셔, 프론트엔드</div>
            <div class="description">ssssssssssssssss</div>
          </li>
        </ol>
      </div>
    </div>
    <div class="page">
      <div class="profile">
        <p>page2</p>
      </div>
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
#resume {display: grid; row-gap: 30px; padding: 30px 0; color: #333333;
  .page {width: 100%; padding: 50px; height: 1122px; background: #ffffff;
    > *:not(:first-child) {margin-top: 50px;}
  }

  .profile {display: flex; column-gap: 30px;
    .photo {width: 200px; height: 240px; background: #cccccc;}
    .info {
      dt {margin-bottom: 24px; font-weight: 700; font-size: 40px; color: #ff7e36;}
      dd {display: flex; align-items: center; font-size: 16px; line-height: 2.4;}
    }
  }

  @media print {padding: 0; row-gap: 0;}
}
</style>