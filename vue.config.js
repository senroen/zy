const { defineConfig } = require("@vue/cli-service");
// const ElementPlus = require('unplugin-element-plus/webpack');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = defineConfig({
  transpileDependencies: true,
//   configureWebpack:{
//     plugins:[ElementPlus()],
//   },
   // 基本路径
   publicPath: process.env.NODE_ENV === 'production' ? '' : './',
   // 输出文件目录
   outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
   // eslint-loader 是否在保存的时候检查
   lintOnSave: false,
   /** vue3.0内置了webpack所有东西，
    * webpack配置,see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    **/
   chainWebpack: (config) => {},
  //  configureWebpack: (config) => {},
   // 生产环境是否生成 sourceMap 文件
   productionSourceMap: false,
  //css
  css:{
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions:{
      sass:{
          additionalData: `@import "./src/styles/main.scss";`
      }
    }
  },
   // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  /**
   *  PWA 插件相关配置,see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
   */
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open:false,
    host:'0.0.0.0',
    port:8080,
    proxy:{
        [process.env.VUE_APP_API]:{
            target:process.env.VUE_APP_API_DEV_TARGET,
            changeOrigin:true,
            ws:false,
            secure:false,
            pathRewrite:{
                [`^${process.env.VUE_APP_API}`]:''
            }
        }
    }
},
  /** 
   * 第三方插件配置
   */
  pluginOptions: {},

  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components'
  //     }
  //   },
  //   //配置webpack自动按需引入element-plus，
configureWebpack: {
    plugins: [
       AutoImport({
         resolvers: [ElementPlusResolver()]
       }),
       Components({
         resolvers: [ElementPlusResolver()]
       })
     ]
   }
});



