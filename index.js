import pkg from "./package.json" with { type: "json" };

export default function(eleventyConfig, options = {}) {
  eleventyConfig.versionCheck(pkg["11ty"].compatibility);
};
