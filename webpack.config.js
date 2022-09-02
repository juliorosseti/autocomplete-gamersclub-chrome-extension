const path = require("path");

module.exports = {
  entry: "./src/useCase.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "useCase.js",
  },
  optimization: {
    minimize: false,
  },
};
