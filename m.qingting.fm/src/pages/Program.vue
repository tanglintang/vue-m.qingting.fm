<template>
  <div>
    <div class="head">
      <img :src="channel.img_url" alt="封面" class="chan_img filter" />
      <div class="cover"></div>
      <div class="play-btn" :style="{backgroundImage: 'url(' + imgUrl + ')'}" @click="playAudio"></div>
      <div class="player">
        <img :src="podcasts.img_url" alt="播音" class="pod_img">
        <span class="pod_name">{{podcasts.name}}</span>
        <span class="fan_num">{{podcasts.fan_num}} 粉丝</span>
      </div>
    </div>
    <div class="msg">
      <div class="title">{{chapter.name}}</div>
      <span>{{chapter.playcount}}次播放</span>
      <span class="update_time">{{chapter.update_time}}更新</span>
      <span class="duration"></span>
    </div>
    <div class="intro">
      <span>简介：</span>{{channel.desc}}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      id: null,
      play_url: 'http://sss.qingting.fm/www/images/play@2x.png',
      pause_url: 'http://sss.qingting.fm/www/images/pause@2x.png',
      podcasts: {},
      page: 1,
      chapter: {},
      falg: 0
    }
  },
  mounted () {
    // 演播员
    this.podcasts = this.channel.podcasters[0]
    // 当前播放 chapter
    this.chapter = this.directorys[0]
  },
  computed: {
    ...mapState(['chapterNum', 'channel', 'playing', 'directorys', 'cur_play']),
    imgUrl () {
      if (this.cur_play && this.cur_play.curChannel.id === this.channel.id) {
        return this.playing ? this.pause_url : this.play_url
      } else {
        return this.play_url
      }
    }
  },
  methods: {
    playAudio () {
      const curPlay = {
        url: this.$route.fullPath,
        curChannel: this.channel,
        curChapter: this.chapter,
        curDirectory: this.directorys
      }
      this.playing ? this.$store.dispatch('pauseAudio') : this.$store.dispatch('playAudio')
      this.$store.dispatch('setCurPlay', curPlay)
    }
  }
}
</script>

<style lang="stylus" scoped>
.head
  width 100%
  height 300px
  position relative
  box-sizing border-box
  .chan_img.filter
    width 100%
    height 100%
    object-fit:cover
    // filter blur(20px)
  .cover
    position absolute
    width 100%
    height 100%
    top 0
    background-color rgba(0, 0, 0, 0.5)
  .play-btn
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    background-repeat no-repeat
    background-size 60px
    width 60px
    height 60px
  .player
    position absolute
    bottom 0
    color #fff
    padding 14px 20px
    .pod_img
      width 40px
      float left
    span
      display block
      margin-left 50px
      font-size 13px
      line-height 20px
      letter-spacing 2px
.msg
  width 100%
  box-sizing border-box
  overflow hidden
  background-color #fff
  border-bottom 1px solid #F8F8F8
  padding 20px 20px 0
  .title
    font-size 20px
    font-weight bold
    letter-spacing 4px
    line-height 30px
  span
    display inline
    font-size 14px
    line-height 50px
    color #DBDBDB
    margin-right 10px
.intro
  background-color #fff
  padding 10px
  line-height 20px
  color #121
  span
    color #000
    font-size 20px
    display block
    margin-bottom 10px
</style>
