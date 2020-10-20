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
  // devMode: true,
  outputTargets: [
    {
      type: 'dist',
      copy: [
        { src: '../.build/index.js', dest: 'index.js' },
        { src: 'helpers/cdn.js', dest: '../corporate-ui-dev.js', warn:true },
      ]
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
