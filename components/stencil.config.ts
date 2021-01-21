import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

import fs from 'fs';
import dotenvPlugin from 'rollup-plugin-dotenv';

const fb = () => ({});
const dep = fs.existsSync('./.env') ? dotenvPlugin : fb;

export const config: Config = {
  namespace: 'sdds-components',
  globalScript: 'src/global.ts',
  globalStyle: 'src/global/variables.css',
  enableCache: false,
  hashFileNames: false,
  buildEs5: true,
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    shadowDomShim: true,
    safari10: true,
    scriptDataOpts: true,
    appendChildSlotFix: true,
    cloneNodeFix: false,
    slotChildNodesFix: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: 'loader',
      copy: [
        { src: '../.build/index.js', dest: 'index.js' },
        { src: 'helpers/core.js', dest: '../core.js'},
      ]
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'www',
      dir: '.www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'docs-json',
      file: 'dist/collection/custom-elements.json'
    }
  ],
  testing: {
    testPathIgnorePatterns: ['/node_modules/', 'global.spec'],
  },
  plugins: [
    sass({
      includePaths: ['node_modules'],
    }),
    dep()
  ],
};
