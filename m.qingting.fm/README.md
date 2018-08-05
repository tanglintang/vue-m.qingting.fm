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