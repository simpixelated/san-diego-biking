exports.modifyWebpackConfig = function (config) {
  config.loader('md', {
    test: /\.md$/,
    loader: 'markdown',
  })
  return config
}
