import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  playing: false,
  program_img: 'http://pic.qingting.fm/self/qtfm.png!200',
  play_url: '',
  chapNum: ''
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
