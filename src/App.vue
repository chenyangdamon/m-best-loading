<template>
  <div id="app">
    <div class="demo">
      <h2>水平方向</h2>
      <m-best-loading type="spinner" theme="#FF0033"></m-best-loading>
      <m-best-loading type="rolling" theme="#FF0033"></m-best-loading>
      <m-best-loading type="ball" theme="#FF0033"></m-best-loading>
      <m-best-loading type="bars" theme="#FF0033"></m-best-loading>
      <m-best-loading type="eclipse" theme="#FF0033"></m-best-loading>
      <m-best-loading type="ellipsis" theme="#FF0033"></m-best-loading>
      <m-best-loading type="magnify" theme="#FF0033"></m-best-loading>
      <m-best-loading type="pacman" theme="#FF0033"></m-best-loading>
      <h2>垂直方向</h2>
      <m-best-loading type="spinner" theme="#FF0033" :direct="direct"></m-best-loading>
      <m-best-loading type="rolling" theme="#FF0033" :direct="direct"></m-best-loading>
      <m-best-loading type="ball" theme="#FF0033" :direct="direct"></m-best-loading>
      <m-best-loading type="bars" theme="#FF0033" :direct="direct"></m-best-loading>
      <m-best-loading type="eclipse" theme="#FF0033" :direct="direct"></m-best-loading>
      <m-best-loading type="ellipsis" theme="#FF0033" :direct="direct"></m-best-loading>
      <m-best-loading type="magnify" theme="#FF0033" :direct="direct"></m-best-loading>
      <m-best-loading type="pacman" theme="#FF0033" :direct="direct"></m-best-loading>
      <h2>尺寸100px</h2>
      <m-best-loading type="spinner" theme="#FF0033" :direct="direct" :size="{width:'100px',height:'100px'}"></m-best-loading>
      <m-best-loading type="rolling" theme="#FF0033" :direct="direct" :size="{width:'100px',height:'100px'}"></m-best-loading>
      <m-best-loading type="ball" theme="#FF0033" :direct="direct" :size="{width:'100px',height:'100px'}"></m-best-loading>
      <m-best-loading type="bars" theme="#FF0033" :direct="direct" :size="{width:'100px',height:'100px'}"></m-best-loading>
      <m-best-loading type="eclipse" theme="#FF0033" :direct="direct" :size="{width:'100px',height:'100px'}"></m-best-loading>
      <m-best-loading type="ellipsis" theme="#FF0033" :direct="direct" :size="{width:'100px',height:'100px'}"></m-best-loading>
      <m-best-loading type="magnify" theme="#FF0033" :direct="direct" :size="{width:'100px',height:'100px'}"></m-best-loading>
      <m-best-loading type="pacman" theme="#FF0033" :direct="direct" :size="{width:'100px',height:'100px'}"></m-best-loading>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {
        direct:false
      }
    }
  }
</script>

<style lang="scss">
  .demo{
    width: 80%;
    margin: 20px auto;
    h2{
      clear: both;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ddd;
      font-size: 20px;
      font-weight: normal;
    }
    .m-best-loading{
      float: left;
      width: 33.33333%;
      height: 140px;
    }
  }
</style>
