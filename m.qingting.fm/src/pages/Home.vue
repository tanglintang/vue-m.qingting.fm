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
  </div>
</template>

<script>
import HeadTop from '@/components/HeadTop'
import NavBar from '@/components/NavBar'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getBanner, getHomePage } from '@/api/getData'

export default {
  name: 'home',
  components: {
    HeadTop,
    NavBar,
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
      ]
    }
  },
  async mounted () {
    this.bannerList = []
    this.bannerList = await getBanner()
    const homePage = await getHomePage()
    console.log(homePage)
  }
}
</script>

<style lang="stylus" scoped>
.swiper
  margin-top 10px
  .swiper-item
    img
      width 100vw
</style>
