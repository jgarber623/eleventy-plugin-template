const pkg = require("./package.json");

module.exports = function(eleventyConfig, options = {}) {
  try {
    eleventyConfig.versionCheck(pkg["11ty"].compatibility);
  } catch (error) {
    console.log(`WARN: Eleventy Plugin (${pkg.name}) Compatibility: ${error.message}`);
  }
}
