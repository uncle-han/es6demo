const path = require('path');
const rimraf = require('rimraf');
rimraf.sync('dist');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
   },
   mode: 'production',
   module: {
      rules: [{
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
      }]
   }
};