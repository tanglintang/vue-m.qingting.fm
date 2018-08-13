import * as types from './mutation-types'

export default {
  // 数据请求
  [types.GETHOMEPAGE] (state, data) {
    state.homePageData = data
  },
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
  [types.SETCURPLAY] (state, { url, curChannel, curChapter, curDirectory }) {
    state.cur_play = {
      play_url: url + '/chapter/' + state.chapterNum,
      curChannel,
      curChapter,
      curDirectory
    }
  },
  [types.CHANGEAUDIO] (state, curChapter) {
    state.cur_play.curChapter = curChapter
    state.playing = true
  },
  [types.SETCURTIME] (state, curTime) {
    state.cur_time = curTime
  },
  [types.SETDURATION] (state, duration) {
    state.duration = duration
  }
}
