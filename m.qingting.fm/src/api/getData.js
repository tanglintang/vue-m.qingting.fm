import axios from 'axios'

import {
  URL
} from './config'

export const getBanner = () => new Promise((resolve, reject) => {
  const url = URL.banner
  axios.get(url).then(res => {
    resolve(res.data.data)
  })
})

export const getHomePage = () => new Promise((resolve, reject) => {
  const url = URL.homePage
  axios.get(url).then(res => {
    resolve(res.data.data)
  })
})

export const getChannel = (id) => new Promise((resolve, reject) => {
  const url = URL.channel
  axios.get(`${url}/${id}`).then(res => {
    resolve(res.data.data)
  })
})

export const getDirectory = (id, page = 1, pageSize = 10) => new Promise((resolve, reject) => {
  const url = URL.channel
  axios.get(`${url}/${id}/programs/page/${page}/pagesize/${pageSize}`).then(res => {
    resolve(res.data.data)
  })
})
