module.exports = {
    css: {
        loaderOptions: {
          sass: {
            // 根据自己样式文件的位置调整
            additionalData:`@import "@/assets/css/global.scss";`
          }
        }
      },
}