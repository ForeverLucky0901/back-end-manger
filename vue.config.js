const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        /* 目标代理服务器地址 */
        target: 'http://localhost:7001',
        /* 允许跨域 */
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        },
      }
    }
  }
})
