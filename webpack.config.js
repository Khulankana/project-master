const path = require('path');

module.exports = {
      entry : "./app/assets/scripts/App.js",
      output: {
            filename: "bundled.js",
            path: path.resolve(__dirname, "app")
      },

      // shar anhaaruulgiig alga bolgohod ingej bichne
      mode : 'development',

      //uurchlult hiih bolgond scriptee ajilluuldag bsniig ugui bolgolooo
      watch: true
}