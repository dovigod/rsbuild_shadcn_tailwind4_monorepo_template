import path from 'node:path';

export default defineConfig({
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['postcss-loader'],
        type: 'css',
      },
      // ...
    ],
  },
  source: {
    include: [
      {
        and: [
          path.resolve(__dirname, '../../packages/ui'),
          { not: /[\\/]node_modules[\\/]/ },
        ],
      },
    ],
  },
});
