const path = require('path');

module.exports = {
  entry: './server.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node', 
};