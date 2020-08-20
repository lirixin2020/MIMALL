<template>
  <div class="loading">
    <img src="/imgs/loading-svg/loading-bar.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang="scss">
  .loading {
    height: 80px;
    line-height: 80;
    text-align: center;
    padding: 30px 0;
    img {
      height: 100%;
    }
  }

</style>
