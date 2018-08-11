import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  playing: false,
  program_img: 'http://pic.qingting.fm/self/qtfm.png!200',
  play_url: '',
  chapterNum: 0,
  channel: {},
  directory: [],
  page: null
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [createPersistedState()]
})
