<template>
  <div id="app">
    <router-view v-if="!$route.meta.keepalive"></router-view>
    <keep-alive include="player">
      <router-view v-if="$route.meta.keepalive"></router-view>
    </keep-alive>
    <mini-player v-show="!$route.meta.keepAlive"></mini-player>
  </div>
</template>

<script>
import MiniPlayer from '@/pages/player/miniPlayer'

export default {
  name: 'App',
  components: { MiniPlayer }
}
</script>

<style lang="stylus">
  #app
    width 100vw
    height 100%
    max-width 540px
    height auto
    overflow-x hidden
    box-sizing border-box
    background-color: #F5F5F8;
    margin 0 auto
    font-family: Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,HelveticaNeue-Light,sans-serif
</style>
