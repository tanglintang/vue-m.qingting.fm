<template>
  <div class="group-item">
    <div class="group-title">
      <a href="" class="more"></a>
      {{rcmItem.name}}
    </div>
    <div class="recommend-item">
      <router-link class="item" v-for="(item,index) in rcmItem.recommends" :key="index" v-if="index < 3" :to="'/program/' + item.id">
          <img class="cover" :src="item.img_url" />
          <div class="title">{{item.title}}</div>
          <div class="desc">{{item.desc}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rcmItem: Object
  },
  mounted () {
    // console.log(this.rcmItem)
  }
}
</script>

<style lang="stylus" scoped>
.group-item
  vertical-align middle
  justify-content center
  background-color #fff
  position relative
  padding 10px 15px
  margin-bottom 5px
  &:after
    content ''
    display table
    clear both
  .group-title
    font-size 17px
    color #3D3D3D
    display block
    height 1.42857143em
    line-height: 1.42857143em
    .more
      background url(http://sss.qingting.fm/v2/images/ic_btn_back.png) no-repeat center
      cursor pointer
      float right
      font-size inherit
      height 1.42857143em
      line-height: 1.42857143em
      width 35px
      background-size 35px
      display block
      color #676B7B
  .recommend-item
    height 140px
    display flex
    text-align center
    flex-direction row
    justify-content space-between
    overflow-x scroll
    overflow-y hidden
    flex-flow row nowrap
    .item
      padding 10px 0
      color #606060
      .cover
        width 95px
        height 95px
      .title
        white-space nowrap
        text-overflow ellipsis
        overflow hidden
        display none
      .desc
        margin-left auto
        margin-right auto
        margin-top 2px
        width 95px
        font-size 12px
        max-height 2.85714286em
        height 2.85714286em
        padding-bottom 0!important
        word-wrap break-word
        overflow hidden
        text-overflow ellipsis
        display -webkit-box
        -webkit-line-clamp 2
        -webkit-box-orient vertical
        line-height 1.42857143em
</style>
