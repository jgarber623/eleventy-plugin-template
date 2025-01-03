import pkg from "./package.json" with { type: "json" };

module.exports = function(eleventyConfig, options = {}) {
  eleventyConfig.versionCheck(pkg["11ty"].compatibility);
};
