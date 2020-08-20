<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="">链接1</a><span>|</span>
      <a href="">链接2</a><span>|</span>
      <a href="">链接3</a><span>|</span>
      <a href="">链接4</a>
    </div>
    <div class="copyright">Copyright <span class="domain">mi.futurefe.com</span></div>
  </div>
</template>

<script>
export default {
  name: 'NavFooter'
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/config.scss";
  .footer {
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: $colorB;
    color: $colorD;
    font-size: $fontI;
    text-align: center;
    .footer-logo {
      margin-top: 46px;
      margin-bottom: 31px;
      img {
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link {
      a {
        color: $colorD;
        display: inline-block;
      }
      span {
        margin: 0 10px;
      }
      margin-bottom: 13px;
    }
    .copyright {
      .domain {
        color: $colorA;
      }
    }
  }

</style>
