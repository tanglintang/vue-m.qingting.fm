<template>
  <div class="player">
    <div class="header">
      <div class="left img">
        <img :src="cur_img_url" />
      </div>
      <div class="right">
        <span class="title">{{title}}</span>
        <span class="podcast">{{podcast}}</span>
      </div>
    </div>
    <div class="wrapper directory">
      <ul class="content">
        <li v-for="(item, index) in directory" :key="index" @click="changeChapter(item, index)">
          <div class="chap_title">{{item.name}}</div>
          <div class="msg">
            <span class="update_time">{{item.update_time.split(' ')[0]}}</span>
            <span class="play_num">{{item.playcount}} 播放</span>
            <span class="duration" v-if="index !== (chapterNum - 1)">{{format(item.duration)}}</span>
            <i class="ic_playing" :style="{backgroundImage: 'url(' + imgUrl + ')'}" v-if="index === (chapterNum - 1)"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="panel">
      <div class="progress-wrapper">
        <span class="time time-l">{{format(cur_time)}}</span>
        <div class="progress-bar-wrapper">
          <progress-bar :percent="percent"></progress-bar>
        </div>
        <span class="time time-r">{{format(duration)}}</span>
      </div>
      <div class="func-btn">
        <div class="btn changeBtn prev" @click="playPrev"></div>
        <div class="btn play" v-if="!playing" @click="playAudio"></div>
        <div class="btn pause" v-if="playing" @click="pauseAudio"></div>
        <div class="btn changeBtn next" @click="playNext"></div>
      </div>
    </div>
  </div>
</template>

<script>
import progressBar from './progressBar'
import { mapState, mapGetters } from 'vuex'
import formatTime from '@/common/js/formatTime'
import iconWave from '@/assets/images/ic_wave.gif'
import iconStatic from '@/assets/images/ic_static.png'

export default {
  components: {
    progressBar
  },
  computed: {
    ...mapState(['cur_play', 'cur_time', 'duration', 'playing', 'chapterNum', 'directorys']),
    ...mapGetters(['cur_img_url', 'title', 'podcast']),
    directory () {
      return this.cur_play.curDirectory
    },
    percent () {
      return Math.min(1, this.cur_time / this.duration)
    },
    imgUrl () {
      return this.playing ? iconWave : iconStatic
    }
  },
  methods: {
    changeChapter (chapter, index) {
      this.$store.dispatch('changeAudio', chapter)
      this.$store.dispatch('setChapterNum', index)
    },
    format (time) {
      return formatTime(time)
    },
    playAudio () {
      this.$store.dispatch('playAudio')
    },
    pauseAudio () {
      this.$store.dispatch('pauseAudio')
    },
    playPrev () {
      const chapter = this.directorys[this.chapterNum - 1]
      const index = this.chapterNum - 1
      console.log(chapter)
      this.changeChapter(chapter, index)
    },
    playNext () {
      const chapter = this.directorys[this.chapterNum + 1]
      const index = this.chapterNum + 1
      console.log(chapter)
      this.changeChapter(chapter, index)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'

  .player
    box-sizing border-box
    width 100%
    height 100vh
    overflow hidden
    background-color #1A0E0E
    color #fff
    .header
      overflow hidden
      display table-cell
      width 100%
      height 16vh
      vertical-align middle
      padding-left 30px
      .left
        float left
        img
          width 60px
          height 60px
          background-color #ccc
      .right
        height 60px
        display flex
        flex-direction column
        justify-content space-around
        align-items flex-start
        padding-left 20px
        .title
          font-size 16px
        .podcast
          font-size 14px
    .wrapper
      box-sizing border-box
      width 100%
      height 64vh
      overflow-x hidden
      overflow-y auto
      padding 20px 30px
      border-1px(rgba(255, 255, 255, 0.2))
      .content
        li
          height 80px
          display flex
          flex-direction column
          justify-content space-around
          position relative
          .chap_title
            letter-spacing 2px
            font-size 14px
            width 80%
            line-height 20px
          .msg
            font-size 14px
            span
              padding-right 10px
              color rgba(255, 255, 255, 0.2)
            .duration, .ic_playing
              position absolute
              right 0
              bottom 50%
              transform translateY(50%)
            .ic_playing
              width 20px
              height 20px
              background-size contain
              margin-right 10px
    .panel
      width 100%
      box-sizing border-box
      height 20vh
      overflow hidden
      background-color #fff
      .progress-wrapper
        display flex
        flex-direction row
        justify-content space-around
        vertical-align middle
        align-items center
        background-color #000
        padding 0 10px
        .time
          font-size 14px
          padding 0 10px
          color rgba(255, 255, 255, 0.6)
        .progress-bar-wrapper
          flex 1
      .func-btn
        width 45%
        height 70%
        margin 0 auto
        display flex
        flex-direction row
        align-items center
        justify-content space-between
        .changeBtn
          width 20px
          height 20px
        .prev
          background url(http://sss.qingting.fm/www/images/prev-hover@2x.png) no-repeat center
          background-size contain
        .next
          background url(http://sss.qingting.fm/www/images/next-hover@2x.png) no-repeat center
          background-size contain
        .play, .pause
          width 40px
          height 40px
          background-color #FD5353
        .play
          background url(http://sss.qingting.fm/www/images/play@2x.png) no-repeat center
          background-size contain
          background-color #FD5353
          border-radius 50%
        .pause
          background url(http://sss.qingting.fm/www/images/pause@2x.png) no-repeat center
          background-size contain
          background-color #FD5353
          border-radius 50%
</style>
