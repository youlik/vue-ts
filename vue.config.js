const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "@": resolve("src"),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        // 根据自己样式文件的位置调整
        additionalData: `@import "@/assets/css/global.scss";`,
      },
    },
  },
  devServer: {
    proxy: {
      "/api": {
        target: "https://c7g17oq5g6hbm7cikqa0.baseapi.memfiredb.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
