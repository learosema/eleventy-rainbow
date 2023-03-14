const pug = require('pug');

module.exports = function (eleventyConfig) {
  eleventyConfig.addTemplateFormats('pug');
  eleventyConfig.addExtension('pug', {
    outputFileExtension: 'svg',
    compile: async function (inputContent) {
      const template = pug.compile(inputContent);

      return (data) => {
        return template(data);
      };
    },
  });
};
