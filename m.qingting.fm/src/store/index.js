import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  homePageData: [],
  playing: false,
  program_img: 'http://pic.qingting.fm/self/qtfm.png!200',
  play_url: '',
  chapterNum: 0,
  channel: {},
  directory: [],
  page: null,
  cur_play: {},
  cur_time: null,
  duration: null
}

const getters = {
  cur_img_url: state => state.cur_play.curChannel ? state.cur_play.curChannel.img_url : '',
  title: state => state.cur_play.curChannel ? state.cur_play.curChannel.name : '',
  podcast: state => state.cur_play.curChannel ? state.cur_play.curChannel.podcasters[0].name : '',
  getPercent: state => {
    return Math.min(1, state.cur_time / state.duration)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [createPersistedState()]
})
