<template>
  <div class="page-request">
    <p class="notice">
      아래 댓글로 원하는 악보를 남겨주세요.<br>
      Github 아이디가 없으신 분은 아래 메일주소로 보내주세요.<br><br>
      Email : shinyj1991@gmail.com<br><br>
      💖
    </p>
    <config-reply />
  </div>
</template>

<script>
import musicians from '@/utils/musician';

export default {}
</script>

<style lang="scss" scoped>
.page-request {
  .notice {
    padding: 100px 0 0;
    text-align: center;
  }
}
</style>