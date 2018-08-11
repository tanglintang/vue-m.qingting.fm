import * as types from './mutation-types'
import { getChannel, getDirectory } from '@/api/getData'

export default {
  async getChannel ({ commit }, id, page = 1) {
    commit(types.GETCHANNEL, await getChannel(id))
    commit(types.GETDIRECTORY, await getDirectory(id, page))
  },
  playAudio ({ commit }) {
    commit(types.PLAYAUDIO)
  },
  pauseAudio ({ commit }) {
    commit(types.PAUSEAUDIO)
  },
  setPlayUrl ({ commit }, url) {
    commit(types.SETPLAYURL, url)
  },
  setChapterNum ({ commit }, chapterNum) {
    commit(types.SETCHAPTERNUM, chapterNum)
  }
}
