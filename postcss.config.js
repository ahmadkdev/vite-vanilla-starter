import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    postcssPresetEnv({
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'custom-selectors': true,
      },
    }),
  ],
};
