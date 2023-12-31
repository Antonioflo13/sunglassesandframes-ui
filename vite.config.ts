import { resolve } from 'path';
// eslint-disable-next-line no-duplicate-imports
import path from 'path';

import react from '@vitejs/plugin-react';
import { terser } from 'rollup-plugin-terser';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
// import { libInjectCss } from 'vite-plugin-lib-inject-css';

const alises = [
  {
    find: '@blocks',
    replacement: path.resolve(__dirname, 'lib/blocks'),
  },
  {
    find: '@components',
    replacement: path.resolve(__dirname, 'lib/components'),
  },
  {
    find: '@stories',
    replacement: path.resolve(__dirname, 'src/stories'),
  },
];

const libraryMode = {
  plugins: [react(), dts({ include: 'lib' }), cssInjectedByJsPlugin()],
  build: {
    minify: true,
    // do not copy the contents of the public folder to the dist folder
    copyPublicDir: false,
    lib: {
      // this is the file that exports our components
      entry: resolve(__dirname, 'lib/sunglassesandframes-ui.ts'),
      name: 'sunglassesandframes-ui',
      fileName: 'sunglassesandframes-ui',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      plugins: [terser()],
    },
  },
};

export default defineConfig(({ mode }) => {
  switch (mode) {
    case 'library':
      return libraryMode;
    default:
      return {
        plugins: [
          react(),
          checker({
            typescript: true,
            eslint: {
              lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
            },
          }),
        ],
        resolve: {
          alias: alises,
        },
      };
  }
});
