<template>
  <div>
    <div class="loading-container" :style="displayStyle">
      <div class="loading-wrapper">
        <img :src="loadingImg" width="18px" height="18px" alt="loading"/>
      </div>
    </div>
  </div>
</template>

<script>
import loadingImg from '@/assets/images/loading.gif'

export default {
  props: {
    show: Boolean
  },
  computed: {
    displayStyle () {
      return this.show === true ? { display: '' } : { display: 'none' }
    },
    loadingImg () {
      return loadingImg
    }
  }
}
</script>

<style lang="stylus" scoped>
.loading-container
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 999
  display: flex
  justify-content: center
  align-items: center
  .loading-wrapper
    display: inline-block
    font-size: 12px
    text-align: center
    .loading-title
      margin-top: 5px
</style>
