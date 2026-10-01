const path = require('path');

module.exports = function override(config, env) {
  if (config && config.module && Array.isArray(config.module.rules)) {
    const sourceMapRule = config.module.rules.find(
      (rule) => rule && rule.enforce === 'pre' && rule.loader && rule.loader.includes('source-map-loader')
    );

    if (sourceMapRule) {
      const existingExclude = sourceMapRule.exclude || [];
      sourceMapRule.exclude = Array.isArray(existingExclude)
        ? [...existingExclude, /contentful-management/]
        : [existingExclude, /contentful-management/];
    }
  }

  return config;
};
