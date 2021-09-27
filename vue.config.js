module.exports = {
  publicPath: './',
  outputDir:'dist',
  css: {
      loaderOptions: {
        sass: {
          // 根据自己样式文件的位置调整
          additionalData:`@import "@/assets/css/global.scss";`
        }
      }
    },
  devServer:{
    proxy:{
      '/api':{
        target:'http://150.158.214.13:5757',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}