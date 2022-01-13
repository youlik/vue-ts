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
        target: "https://c7fut4q5g6hbm7cikq9g.baseapi.memfiredb.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
