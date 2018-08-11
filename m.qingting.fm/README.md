# m.qingting.fm

> 蜻蜓FM

## 跨域
```js
proxyTable: {
      '/category': {
        target: 'http://recpage.c.qingting.fm/v2/hotpage/category',
        // secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          '^/category': ''
        }
    }
},
```

## actions async 异步获取数据问题
actions 异步获取数据
提交到 mutations(同步) 以改变 state
而 组件内 mapState 获取的数据为 undefined
```js
  async getChannel ({ commit }, id) {
    commit(types.GETCHANNEL, await getChannel(id))
  },
```
解决办法是：
路由跳转前，dispatch -> action 先改变 state 里的数据
```js
  beforeRouteLeave (to, from, next) {
    this.$store.dispatch('getChannel', to.params.id).then(() => {
      next()
    })
  }
```

## vuex-persistedstate 持久化存储