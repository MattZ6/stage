module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'expo-router/babel',
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@contexts': './src/contexts',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
            '@services': './src/services',
            '@utils': './src/utils',
            '@assets': './src/assets',
            '@styles': './src/styles',
            '@config': './src/config',
          },
        },
      ],
    ],
  }
}
