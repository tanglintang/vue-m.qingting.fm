import * as types from './mutation-types'
import { getHomePage, getChannel, getDirectory } from '@/api/getData'

export default {
  async getHomePage ({ commit }) {
    commit(types.GETHOMEPAGE, await getHomePage())
  },
  async getChannel ({ commit }, id) {
    commit(types.GETCHANNEL, await getChannel(id))
  },
  async getDirectory ({ dispatch, commit }, {id, page}) {
    console.log(page)
    if (page === 1) {
      await dispatch('getChannel', id)
    }
    const directorys = await getDirectory(id, page)
    const data = {
      directorys,
      page
    }
    commit(types.GETDIRECTORY, data)
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
