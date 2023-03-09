const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  //css
  css:{
    loaderOptions:{
      sass:{
          additionalData: `@import "./src/styles/main.scss";`
      }
    }
  }
});
