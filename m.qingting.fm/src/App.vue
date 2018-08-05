<template>
  <div id="app">
    <router-view v-if="!$route.meta.keepalive"></router-view>
    <transition name="router-fade">
      <keep-alive>
        <router-view v-if="$route.meta.keepalive"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
  #app
    width 100vw
    height auto
    overflow-x hidden
    box-sizing border-box
</style>
