const path = require("path");
const CracoLess = require("craco-less");

const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  // 插件
  plugins: [
    {
      plugin: CracoLess,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  //   配置webpack
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
      "@mui/styled-engine": "@mui/styled-engine-sc", // 为了使用material UI 适配 styled-components
    },
  },
};
