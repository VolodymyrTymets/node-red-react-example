const path = require('path');
const { PALLET_NAME } = process.env;

module.exports = {
  // entry: './src/index.js',
  // entry: {
  //   app: './src/index.js',
  //   print: './src/print.js'
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["es2017"],
            "plugins": ["transform-object-rest-spread"]
          }
        }],
      }, {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ],

  },
  output: {
    // filename: 'bundle.js',
    // filename: '[name].bundle.js',
    path: path.resolve(__dirname, `./pallets/${PALLET_NAME}/ui/build`)
  }
};