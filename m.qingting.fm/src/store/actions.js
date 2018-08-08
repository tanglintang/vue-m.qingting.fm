import * as types from './mutation-types'

export default {
  playAudio ({ commit }) {
    commit(types.PLAYAUDIO)
  },
  pauseAudio ({ commit }) {
    commit(types.PAUSEAUDIO)
  },
  setPlayUrl ({ commit }, url) {
    commit(types.SETPLAYURL, url)
  }
}
