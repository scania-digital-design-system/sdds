import { series, watch, src, dest } from 'gulp';

import del from 'del';

import { version } from './package.json';

require('babel-polyfill');

const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
// const webpack = require('webpack');
const svg2img = require('svg2img');
const css = require('css');
const favicons = require('favicons');
const sass = require('node-sass');
const base64Img = require('base64-img');
const express = require('express');
const cors = require('cors');

const { CssSelectorParser } = require('css-selector-parser');

const outputFolder = 'dist';
const themeName = 'light';

let faviconItems = [];
let faviconItemsNoRefs;
let sourceMapping = 'disabled'; // per default, source mapping is disabled.

const selectorParser = new CssSelectorParser();

selectorParser.registerSelectorPseudos(
  'hover',
  'active',
  'focus',
  'before',
  'after',
  'not',
  'dir',
  'nth-child'
);
selectorParser.registerNestingOperators('>', '+', '~');
selectorParser.registerAttrEqualityMods('^', '$', '*', '~');
selectorParser.enableSubstitutes();

const build = series(
  checkEnvironment,
  clean,
  initFolders,
  initImages,
  initFavicons,
  initTheme,
  copyScss,
  copyGlobalStyle
);
const start = series(build, serve, watches);

export { start as default, build };

function clean() {
  return del(outputFolder);
}

function checkEnvironment(cb) {
  const environment = process.argv.indexOf('build');

  // if command = npm run build, disable sourcemap.
  sourceMapping = environment >= 0 ? 'disabled' : 'enabled';
  cb();
}

function watches(cb) {
  watch(['src/**', '!src/**/**-vars.scss'], series(cleanStyles, initTheme));
  cb();
}

function cleanStyles() {
  return del([
    `${outputFolder}/styles/*`,
    `${outputFolder}/module.js`,
    `${outputFolder}/${themeName}-theme.js`,
  ]);
}

function serve(done) {
  const app = express();
  const port = 1338;

  app.use(cors());
  app.use(express.static('./dist'));

  app.listen(port);

  done(console.log('Server running on port %i', port));
}

function initFolders(cb) {
  fs.remove(outputFolder);

  setTimeout(() => {
    ['images', 'styles', 'scss'].map((folder) => {
      fs.mkdirSync(`${outputFolder}/${folder}`, { recursive: true });
    });
  });

  cb();
}

function initImages(cb) {
  return series(copyImages, generateImages)(cb);
}

function initFavicons() {
  const options = {
    path: '',
    icons: {
      android: false,
      appleIcon: false,
      appleStartup: false,
      coast: false,
      favicons: true,
      firefox: false,
      windows: false,
      yandex: false,
    },
  };

  return favicons(
    '../core/assets/images/symbol.svg',
    options,
    (error, response) => {
      if (error) throw error;

      console.log('Generate favicon module');

      [...response.images, ...response.files].map((image) => {
        fs.writeFileSync(`${outputFolder}/${image.name}`, image.contents);
      });

      const content = response.html.map((data) =>
        data.replace(/(href|content)="(.*?)"/g, (hit, group1, group2) => {
          let elm = hit;
          if (group2.indexOf('.') > -1) {
            const data2 = base64Img.base64Sync(`${outputFolder}/${group2}`);
            elm = elm.replace(group2, data2);
          }
          return elm;
        })
      );

      faviconItems = response.html;
      faviconItemsNoRefs = content;
    }
  );
}

async function initTheme(cb) {
  const theme = {
    [themeName]: {
      components: { default: {} },
    },
  };
  const themeNoRefs = {
    [themeName]: {
      components: { default: {} },
    },
  };

  generateVars('typography');
  generateVars('spacing');

  console.log('Generate css styles');
  // Remove old stuff
  glob.sync('src/old/patterns/c-*.scss').forEach(generateCss);
  glob.sync('src/theme/*.scss').forEach(generateCss);

  console.log('Generate style module');

  glob.sync(`${outputFolder}/styles/*.css`).forEach((file) => {
    const data = fs.readFileSync(path.resolve(file), 'utf8');
    let { name } = path.parse(file);
    let type = 'default';

    // TODO: branch variable should be fetched from travis and contain either branch path
    // For example: "branch/improvement/footer_mobile_mode/www" or "4.0.0-alpha.1/www"
    const branch = '';
    const root = branch
      ? `https://static.scania.com/build/global/${branch}`
      : '';

    if (name.substr(-3) === '_ie') {
      type = 'ie';
      name = name.substr(0, name.length - 3);
    }

    theme[themeName]['components'][type][name] = data.replace(
      /url\(\.\./g,
      `url(%root%${root}`
    );
    themeNoRefs[themeName]['components'][type][name] = data;
  });

  // TODO: We might wanna solve this without the need of global variables

  theme[themeName].favicons = faviconItems.map((item) =>
    item.replace(/(href|content)="/g, '$1="%root%/')
  );
  themeNoRefs[themeName].favicons = faviconItemsNoRefs;
  theme[themeName].version = version;
  themeNoRefs[themeName].version = version;

  fs.writeFileSync(
    `${outputFolder}/module.js`,
    `export const theme = ${JSON.stringify(themeNoRefs, null, 2)};`,
    { flag: 'a' }
  );

  fs.writeFileSync(
    `${outputFolder}/${themeName}-theme.js`,
    `
var theme = ${JSON.stringify(theme, null, 2)};

document.addEventListener('storeReady', function(event) {
  theme = theme.${themeName};
  var favicons = theme.favicons;
  var store = event.detail.store;
  var root = document.querySelector('script[src$="${themeName}-theme.js"]').src.replace('${themeName}-theme.js', '');

  theme.components = document.head.attachShadow ? theme.components.default : theme.components.ie;
  Object.keys(theme.components).map(function(key) { theme.components[key] = theme.components[key].replace(/\%root\%\\//g, root) } );
  favicons = favicons.map(function(val) { return val.replace(/\%root\%\\//g, root) } );
  theme.favicons = favicons;

  const newValue = store.get('theme');

  newValue.items['light'] = theme;

  store.set('theme', newValue);
});
  `,
    { flag: 'w' }
  );

  console.log('Style updated.');

  cb();
}

// FIXME: This should be moved from the gulp to the specific package in core
function generateVars(input) {
  // Creates a auto-generated file containing variables
  console.log(`Generate css variables for ${input}`);

  const varFile = `../core/${input}/_vars.scss`;

  const data = fs.readFileSync(path.resolve(varFile), 'utf8');

  const filepath = `../core/${input}/${input}-vars.scss`;

  let newContent = data.replace(/:+\s+\$(.+)\;$/gm, ': var(--$1);');
  newContent = newContent.replace(/\$/gm, '--sdds-');
  const content = `
  // DO NOT EDIT THIS FILE\n
  // This file is auto-generated\n\n
  :root, html {\n ${newContent}\n}`;

  fs.writeFileSync(`${filepath}`, content);
}

function copyImages() {
  return src('../core/assets/images/*.svg').pipe(
    dest(`${outputFolder}/images/`)
  );
}

function generateImages(cb) {
  glob.sync('../core/assets/images/*.svg').forEach((file) => {
    const props = path.parse(file);
    const content = fs.readFileSync(file);

    svg2img(content, (error, buffer) => {
      if (error) throw error;

      fs.writeFileSync(`${outputFolder}/images/${props.name}.png`, buffer);
      cb();
    });
  });
}

function generateCss(file) {
  const { name } = path.parse(file);
  const data = fs.readFileSync(path.resolve(file), 'utf8');
  const filepath = `${outputFolder}/styles/${name}`;
  console.log(filepath);
  let content;
  try {
    content = sass.renderSync({
      data,
      includePaths: ['src/**'],
      sourceMapEmbed: sourceMapping === 'enabled',
      sourceMapContents: sourceMapping === 'enabled',
    });
  } catch (err) {
    console.log(err);
    console.log(`Problem in file ${file} or imports related to it`);
    console.log('\n ---- Problem in scss files, read error! ---- \n');
  }
  try {
    fs.writeFileSync(`${filepath}.css`, content.css);
  } catch (err) {
    console.log(err);
    console.log('\n ---- Problem trying create css files ---- \n');
  }
}

function copyScss() {
  /*
    Function including the SCSS in the output in dist folder,
    making it possible to use scss
  */
  console.log(`Copying scss... Output: ${outputFolder}/scss/`);
  return src('src/**/*.scss').pipe(dest(`${outputFolder}/scss/`));
}

function copyGlobalStyle() {
  // TODO: this will no longer be used when Corporate-Ui 4 is completly removed
  console.log(
    `Copying corporate-ui-4 global style... output ${outputFolder}/styles/`
  );

  return src('src/old/utilities/global-style.css').pipe(
    dest(`${outputFolder}/styles/`)
  );
}
