var pugPlugin = require('./config/template-languages/pug');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pugPlugin);

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      output: 'dist',
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
