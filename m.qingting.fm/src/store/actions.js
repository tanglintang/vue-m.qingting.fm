import * as types from './mutation-types'
import { getChannel, getDirectory } from '@/api/getData'

export default {
  async getChannel ({ commit }, id) {
    commit(types.GETCHANNEL, await getChannel(id))
  },
  async getDirectory ({ dispatch, commit }, id, page = 1) {
    if (page === 1) {
      await dispatch('getChannel', id)
    }
    commit(types.GETDIRECTORY, await getDirectory(id, page))
  },
  playAudio ({ commit }) {
    commit(types.PLAYAUDIO)
  },
  pauseAudio ({ commit }) {
    commit(types.PAUSEAUDIO)
  },
  setChapterNum ({ commit }, chapterNum) {
    commit(types.SETCHAPTERNUM, chapterNum)
  },
  setCurPlay ({ commit }, curPlay) {
    commit(types.SETCURPLAY, curPlay)
  },
  changeAudio ({ commit }, curChapter) {
    commit(types.CHANGEAUDIO, curChapter)
  },
  setCurTime ({ commit }, curTime) {
    commit(types.SETCURTIME, curTime)
  },
  setDuration ({ commit }, duration) {
    commit(types.SETDURATION, duration)
  }
}
