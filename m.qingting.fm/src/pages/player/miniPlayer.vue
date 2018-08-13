<template>
  <router-link :to="play_url">
    <div class="mini-player" :style="{backgroundImage: 'url(' + getImg + ')'}" :class="{ 'playing': this.playing }">
      <audio :src="'http://od.qingting.fm/' + getSource" ref="audio"></audio>
    </div>
  </router-link>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      cid: '',
      percent: null
    }
  },
  computed: {
    ...mapState(['program_img', 'cur_play', 'playing']),
    ...mapGetters(['cur_img_url']),
    play_url () {
      return this.cur_play ? this.cur_play.play_url : this.$store.state.play_url
    },
    getImg () {
      return this.cur_img_url || this.program_img
    },
    getSource () {
      return this.cur_play ? this.cur_play.curChapter.file_path : ''
    }
  },
  methods: {
    addEventListeners: function () {
      const self = this
      self.$refs.audio.addEventListener('timeupdate', self._currentTime)
      self.$refs.audio.addEventListener('canplay', self._durationTime)
    },
    removeEventListeners: function () {
      const self = this
      self.$refs.audio.removeEventListener('timeupdate', self._currentTime)
      self.$refs.audio.removeEventListener('canplay', self._durationTime)
    },
    _currentTime: function () {
      this.timeNow = parseInt(this.$refs.audio.currentTime)
      this.$store.dispatch('setCurTime', this.timeNow)
    },
    _durationTime: function () {
      this.timeDuration = parseInt(this.$refs.audio.duration)
      this.$store.dispatch('setDuration', this.timeDuration)
    }
  },
  mounted () {
    this.addEventListeners()
  },
  beforeDestroyed () {
    this.removeEventListeners()
  },
  updated () {
    this.$nextTick(() => {
      this.playing ? this.$refs.audio.play() : this.$refs.audio.pause()
    })
  }
}
</script>

<style lang="stylus" scoped>
  .mini-player
    position fixed
    top 88%
    right 8%
    width 50px
    height 50px
    border-radius 50%
    background-repeat no-repeat
    background-size 50px
    transition transform 3s
    &.playing
      animation rotate 2s linear infinite forwards
    @keyframes rotate {
      from {
        transform rotate(0deg)
      }
      to {
        transform rotate(360deg)
      }
    }
</style>
