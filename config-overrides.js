const { override, fixBabelImports } = require('customize-cra');

module.exports = function(config, env) {
  return Object.assign(
    config,
    override(
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      })
    )(config, env)
  );
};
