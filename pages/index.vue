<template>
  <div id="home">
    <section class="greeting">
      <h2>인사말</h2>
      <p>
        안녕하세요.<br>
        웹퍼블리셔(마크업개발자) 신용준입니다.<br><br>

        웹퍼블리셔라는 직업은 생겨나고부터 지금까지 계속 그 역할이 확장되어 왔습니다.<br>
        웹 표준, 웹 접근성의 전문화로 생겨난 이 직업은 점차<br>
        크로스 브라우징, 검색엔진 최적화, UI/UX 인터렉션, 데이터시각화 등의 능력이 추가로 요구되었고<br>
        최근엔 모던 개발방식(react, vue)에 맞춰 컴포넌트단위 마크업을 하는 마크업개발자로 변화해가는 중입니다.<br><br>

        웹퍼블리셔는 IT 업계에서 가장 많은 변화를 겪어왔고 또 앞으로도 많은 변화가 예상되는 직업입니다.<br>
        계속 변화에 대응하는 마크업개발자가 되겠습니다.
      </p>
    </section>
    <section class="ability">
      <h2>핵심역량</h2>
      <ul>
        <li>데이터 바인딩과 유지보수를 고려한 시멘틱 마크업</li>
        <li>기획과 디자인 의도를 정확히 구현하는 능력</li>
        <li>다양한 UI라이브러리 활용 능력</li>
        <li>차트 라이브러리를 활용한 데이터시각화</li>
        <li>메타태그와 오픈그래프를 이용한 검색엔진최적화(SEO)</li>
        <li>jquery 플러그인 제작 경험</li>
        <li>vue.js(nuxt)를 이용한 프론트엔드 개발 경험 (SNS로그인, axios, restapi, ssr)</li>
      </ul>
    </section>
    <section class="project">
      <h2>최근 프로젝트</h2>
      <p>
        뉴본홀딩스 기업사이트 리뉴얼 (<a href="https://nbholdings.co.kr/" target="_blank">바로가기</a>)<br>
        #반응형 #SSR #SPA #모션 #인터렉션 #구글맵 #vue.js #vuex #nuxt.js #scss #restapi
      </p>
    </section>
    <section class="project">
      <h2>바로가기</h2>
      <div class="contents">
        기술 블로그 (<nuxt-link to="/blog">바로가기</nuxt-link>)<br><br>
        진행했던 프로젝트 (<nuxt-link to="/project">바로가기</nuxt-link>)<br><br>
        플러그인<br>
        Datepicker (<a href="https://github.com/shinyj1991/kronos" target="_blank">바로가기</a>)<br>
        Image Slider (<a href="https://github.com/shinyj1991/eclipse" target="_blank">바로가기</a>)
      </div>
    </section>
    <section class="project">
      <h2>문의</h2>
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
  h2 {margin-bottom: 30px; font-weight: 700; font-size: 24px; color: #ffffff;}
  > section {color: #ccc;
    a {color: #ffffff;
      &:hover {text-decoration: underline;}
    }
    &.ability {
      ul {
        li {
          &:before {content: '-'; margin-right: 10px;}
        }
      }
    }
  }
}
</style>