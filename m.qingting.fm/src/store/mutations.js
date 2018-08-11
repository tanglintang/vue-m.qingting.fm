import * as types from './mutation-types'

export default {
  // 数据请求
  [types.GETCHANNEL] (state, channel) {
    state.channel = channel
  },
  [types.GETDIRECTORY] (state, directorys) {
    state.directorys = directorys
  },
  // 播放
  [types.PLAYAUDIO] (state) {
    state.playing = true
  },
  // 暂停
  [types.PAUSEAUDIO] (state) {
    state.playing = false
  },
  [types.SETCHAPTERNUM] (state, chapterNum) {
    state.chapterNum = chapterNum
  },
  [types.SETPLAYURL] (state, url) {
    state.play_url = url + '/chapter/' + state.chapterNum
  }
}
