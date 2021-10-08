module.exports = {
  publicPath: './',
  outputDir:'dist',
  resolve:{
    extensions:['.js','.vue','.json'],
    alias:{
      '@':resolve('src')
    }
  },
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
        target:'http://localhost:5757',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}