var eslint = require("eslint")
var path = require("path")
var pkg = require("./package.json")

module.exports = {
  cmd: "standard",
  eslint: eslint,
  eslintConfig: {
    configFile: path.join(__dirname, "eslintrc.json"),
    parserOptions: {
      "parser": "babel-eslint",
    },
  },
  homepage: pkg.homepage,
  tagline: "Use JavaScript Standard Style",
  version: pkg.version,
}
