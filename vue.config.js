module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/assets/css/tokens.scss";
            @import "@/assets/css/main.scss";
          `
      }
    }
  }
};