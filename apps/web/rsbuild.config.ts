import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
// import { pluginTailwindCSS } from 'rsbuild-plugin-tailwindcss';
// import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    // https: true
  },
  source: {
    include: ['@packages/ui'],
  },
});

