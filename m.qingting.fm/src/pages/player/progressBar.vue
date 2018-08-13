<template>
  <div class="progress-bar" ref="progressBar">
    <div class="bar-inner">
      <div class="progress"  ref="progress"></div>
      <div class="progress-btn-wrapper" ref="progressBtn">
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    percent: Number
  },
  methods: {
    // 设置偏移
    _setOffset (offsetWidth) {
      // 进度条随百分比变化
      this.$refs.progress.style.width = `${offsetWidth}px`
      // 按钮随百分比偏移
      this.$refs.progressBtn.style.transform = `translateX(${offsetWidth}px)`
    },
    _getOffsetByPercent (percent) {
      if (percent) {
        // 进度条总长度 (减去播放按钮的长度)
        const barWidth = this.$refs.progressBar.clientWidth - 2
        const offsetWidth = barWidth * percent
        // 设置进度条既按钮偏移
        this._setOffset(offsetWidth)
      }
    }
  },
  watch: {
    // 监听歌曲播放百分比
    percent (newPercent, oldPercent) {
      this._getOffsetByPercent(newPercent)
    }
  },
  computed: {
    ...mapGetters(['getPercent'])
  },
  mounted () {
    this._getOffsetByPercent(this.getPercent)
  }
}
</script>

<style lang="stylus" scoped>
  .progress-bar
    width 100%
    height 30px
    background-color #000
    box-sizing border-box
    padding 0
    .bar-inner
      position relative
      top 12px
      height 4px
      background-color rgba(255, 255, 255, 0.2)
      .progress
        position absolute
        height 100%
        background-color #fff
      .progress-btn-wrapper
        position absolute
        width 4px
        height 4px
        .progress-btn
          position relative
          box-sizing border-box
          width 8px
          height 8px
          top -2px
          background-color #fff
          border-radius 50%
</style>
