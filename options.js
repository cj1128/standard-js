var eslint = require("eslint")
var path = require("path")
var pkg = require("./package.json")

module.exports = {
  cmd: "standard",
  eslint: eslint,
  eslintConfig: {
    configFile: path.join(__dirname, "eslintrc.json"),
  },
  tagline: "CJ's JavaScript Standard Style",
  homepage: pkg.homepage,
  version: pkg.version,
  parseOpts: (opts, packageOpts, rootDir) => {
    if(packageOpts.disabled) {
      opts.eslintConfig.rules = {}
      packageOpts.disabled.forEach(item => {
        opts.eslintConfig.rules[item] = "off"
      })
    }

    if(packageOpts.parserOptions) {
      opts.eslintConfig.parserOptions = packageOpts.parserOptions
    }

    return opts
  },
}
