<template>
  <div v-show="show" class="m-best-loading" :class="{'horizontal':direct,'vertical':!direct}" role="m-best-loading">
    <!--svg loading-->
    <span v-html="_svg" :style='_style'></span>
    <!--This is message-->
    <p v-show="status" v-html="text"></p>
  </div>
</template>

<script type="text/ecmascript-6">
  import * as SVG from './images/svg'

  /**
   * author:damoncy
   * email:645230634@qq.com
   * https://github.com/chenyangdamon
   */

  export default {
    name: 'm-best-loading',
    props: {
      // loading动画类型
      type: {
        type: String,
        default: 'spinner'
      },
      // loading动画主题色
      theme: {
        type: String,
        default: '#FF0033'
      },
      // loading动画尺寸
      size: {
        type: Object,
        default: () => {
          return {
            width: '40px',
            height: '40px'
          }
        }
      },
      // loading布局
      direct: {
        type: Boolean,
        default: true
      },
      // loading显示隐藏
      show: {
        type: Boolean,
        default: true
      },
      // loading的文本信息
      status: {
        type: Boolean,
        default: true
      },
      text: {
        type: String,
        default: 'loading...'
      }
    },
    computed: {
      _svg() {
        return SVG[this.type]
      },
      _style() {
        return {
          fill: this.theme,
          width: this.size.width,
          height: this.size.height
        }
      }
    }
  }
</script>

<style lang="scss">
  .m-best-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    &.horizontal {
      flex-direction: row;
      span {
        margin-right: 4px;
      }
    }
    &.vertical {
      flex-direction: column;
    }
    svg {
      width: 100%;
      height: 100%;
    }
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
</style>
