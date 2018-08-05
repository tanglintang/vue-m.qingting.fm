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
