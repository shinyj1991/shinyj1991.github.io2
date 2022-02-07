<template>
  <div id="home">
    <section class="greeting">
      <h1>마크업개발자 신용준입니다.</h1>
      <h2>인사말.</h2>
      <p>
        2013년 10월 웹퍼블리셔로 처음 취업하며 이 길에 들어섰습니다.<br>
        웹퍼블리셔라는 직업은 생겨나고 지금까지 계속 그 역할이 확장됐습니다.<br><br>
        웹 표준과 웹 접근성의 전문화로 생겨난 이 직업은 점차 크로스 브라우징,<br>
        검색엔진 최적화, 데이터시각화 등의 능력이 추가로 요구되었습니다.<br><br>
        최근엔 모던 개발(react, vue)환경에 맞춰 컴포넌트단위로 마크업하고<br>
        폼데이터 검증, UI/UX 인터렉션, 데이터 바인딩 등의 역할이 추가됨에 따라<br>
        마크업개발자로 그 명칭이 변화하고 있습니다.<br><br>
        마크업개발자는 많은 변화를 겪어왔고 또 앞으로도 많은 변화가 예상되는 직업입니다.<br>
        이러한 변화에 대응하며 성장하는 마크업개발자가 되는것이 제 꿈입니다.
      </p>
    </section>
    <section class="ability">
      <h2>핵심 역량.</h2>
      <ul>
        <li>데이터 바인딩과 유지보수를 고려한 시멘틱 마크업</li>
        <li>기획, 디자인, 개발 등 타파트 작업자와 원활한 커뮤니케이션</li>
        <li>다양한 UI라이브러리 활용 능력</li>
        <li>차트 라이브러리를 활용한 데이터시각화</li>
        <li>메타태그와 오픈그래프를 이용한 검색엔진최적화(SEO)</li>
        <li>jquery 플러그인 제작 경험</li>
        <li>vue.js(nuxt)를 이용한 프론트엔드 개발 경험 (sns로그인, axios, restapi, ssr)</li>
      </ul>
    </section>
    <section class="project">
      <h2>프로젝트.</h2>
      <p>
        2014 - 2021 기간동안 진행한 프로젝트 목록입니다.<br>
        <nuxt-link to="/project">프로젝트 바로가기</nuxt-link>
      </p>
    </section>
    <section class="project">
      <h2>블로그.</h2>
      <div class="contents">
        기록 및 공부 목적의 블로그입니다.<br>
        <nuxt-link to="/blog">블로그 바로가기</nuxt-link>
      </div>
    </section>
    <section class="project">
      <h2>플러그인.</h2>
      <div class="contents">
        제가 제작한 jQuery 플러그인입니다.<br>
        Datepicker <a href="https://github.com/shinyj1991/kronos" target="_blank">바로가기</a><br>
        ImageSlider <a href="https://github.com/shinyj1991/eclipse" target="_blank">바로가기</a>
      </div>
    </section>
    <section class="project">
      <h2>문의.</h2>
      <div class="contents">
        <p>저에게 궁금하신점은 아래 메일로 언제든지 연락주세요. 감사합니다.</p>
        <a href="mailto:shinyj1991@gmail.com">shinyj1991@gmail.com</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
#home {display: grid; row-gap: 150px; padding: 50px 50px 100px; font-weight: 300; font-size: 16px; line-height: 1.8;
  h1 {margin-bottom: 30px; font-weight: 700; font-size: 24px; color: #f27649;}
  h2 {margin-bottom: 12px; font-weight: 700; font-size: 20px; color: #f29f05;}
  > section {color: #eeeeee;
    a {color: #f3b605; text-decoration: underline;}
    &.ability {
      ul {
        li {
          &:before {content: '-'; margin-right: 10px;}
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {padding: 50px 20px 100px; row-gap: 100px; font-size: 14px;}
}
</style>