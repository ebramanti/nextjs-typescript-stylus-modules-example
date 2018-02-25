const withTypescript = require("@zeit/next-typescript");
const withCSS = require("@zeit/next-css");
const { exportPathMap } = require('nextjs-export-path-map')
const path = require("path");

module.exports = withTypescript(withCSS({
  exportPathMap: exportPathMap.bind(null, path.join(__dirname, 'pages')),
}));
