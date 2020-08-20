module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        pages: '@/pages'
      }
    }
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
  }
}
