<template>
  <router-link :to="this.$store.plau_url">
    <div class="mini-player" :style="{backgroundImage: 'url(' + getImgUrl + ')'}" :class="{ 'playing': this.$store.state.playing }"></div>
  </router-link>
</template>

<script>
export default {
  data () {
    return {
      cid: '',
      playing: false
    }
  },
  mounted () {
    console.log(this.$store.state.program_img)
  },
  computed: {
    getImgUrl () {
      return this.$store.state.program_img
    }
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
