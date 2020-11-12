import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

import fs from 'fs';
import dotenvPlugin from 'rollup-plugin-dotenv';

const fb = () => ({});
const dep = fs.existsSync('./.env') ? dotenvPlugin : fb;

export const config: Config = {
  namespace: 'corporate-ui',
  globalScript: 'src/global.ts',
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
        { src: 'helpers/cdn.js', dest: '../corporate-ui.js', warn:true },
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
