<template>
  <div>
    <head-top />
    <nav-bar />
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="swiper-item" v-for="(item, index) in bannerList" :key="index">
        <img :src="item.img_url" :alt="item.title" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <recommend-group :rcmItem="item" v-for="item in recommendList" :key="item.id"></recommend-group>
    <loading :show="showLoading"></loading>
    <mini-player></mini-player>
  </div>
</template>

<script>
import HeadTop from '@/components/HeadTop'
import NavBar from '@/components/NavBar'
import MiniPlayer from '@/pages/player/miniPlayer'
import RecommendGroup from '@/components/RecommendGroup'
import Loading from '@/components/Loading'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getBanner, getHomePage } from '@/api/getData'

export default {
  name: 'home',
  components: {
    HeadTop,
    NavBar,
    RecommendGroup,
    Loading,
    MiniPlayer,
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        // slidesPerView: 1,
        autoplay: {
          delay: 1000,
          // 操作 swiper 后不停止切换
          disableOnInteraction: false
        },
        loop: true
      },
      bannerList: [
        {
          img_url: 'http://pic.qingting.fm/pushRecommend/2018/08/05/5c4dd1aa0b06fc5a5c6e4011a273e449.jpeg!800'
        }
      ],
      recommendList: [],
      showLoading: true
    }
  },
  async mounted () {
    this.bannerList = await getBanner()
    this.recommendList = await getHomePage()
    this.$nextTick(() => {
      this.showLoading = this.recommendList.length < 0
    })
  }
}
</script>

<style lang="stylus" scoped>
.swiper
  margin-top 10px
  .swiper-item
    img
      width 100%
</style>
