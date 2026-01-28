module.exports = function (eleventyConfig) {
  // Copie des assets (CSS, JS, images)
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",          // dossier source
      includes: "_includes", // layouts
      output: "_site"
    }
  };
};
