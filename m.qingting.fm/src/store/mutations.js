import * as types from './mutation-types'

export default {
  // 播放
  [types.PLAYAUDIO] (state) {
    state.playing = true
  },
  [types.PAUSEAUDIO] (state) {
    state.playing = false
  },
  [types.SETPLAYURL] (state, url) {
    state.play_url = url + '/chapter/' + state.chapNum
  }
}
