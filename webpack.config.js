const path = require('path');

module.exports = {
  entry: './src/gameLoop.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'output.js',
  },
};
