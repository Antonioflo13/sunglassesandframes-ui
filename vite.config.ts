import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  plugins: [
    react(),
    dts({ include: 'lib' }),
    libInjectCss(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
  build: {
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
    },
  },
});
