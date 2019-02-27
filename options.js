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
      // https://github.com/babel/babel-eslint/issues/662
      // TODO: remove this when babel-eslint updated to 11
      "ecmaFeatures": {
        legacyDecorators: true
      },
    },
  },
  homepage: pkg.homepage,
  tagline: "Use JavaScript Standard Style",
  version: pkg.version,
}
