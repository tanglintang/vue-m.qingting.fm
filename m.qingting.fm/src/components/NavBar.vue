<template>
  <div>
    <ul class="navBar">
      <router-link :to="item.id" v-for="(item, index) in navList" :key="index" tag="li">
        {{item.name}}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {
          id: 'categories',
          name: '分类'
        },
        {
          id: 'home',
          name: '精选'
        },
        {
          id: 'radio',
          name: '电台'
        },
        {
          id: 'search',
          name: '搜索'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.navBar
  width 100vw
  height 40px
  display flex
  flex-direction row
  vertical-align middle
  align-items center
  justify-content space-around
.active
  color red
  font-size 20px
  &:after
    position absolute
    content ""
    width 40px
    height 2px
    margin-top 8px
    background-color red
</style>
