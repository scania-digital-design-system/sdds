import {
  series, watch, src, dest
} from 'gulp';

import del from 'del';

import { version } from './package.json';

require("babel-polyfill");

const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const Fontmin = require('fontmin');
// const webpack = require('webpack');
const svg2img = require('svg2img');
const css = require('css');
const favicons = require('favicons');
const sass = require('node-sass');
const base64Img = require('base64-img');
const express = require('express');
const cors = require('cors');
// import webfont from "webfont";
const SVGO = require('svgo');
const { parse } = require('svgson');
const sassExtract = require('sass-extract');

const { CssSelectorParser } = require('css-selector-parser');

const outputFolder = 'dist';
const themeName = 'scania';

let faviconItems = [];
let faviconItemsNoRefs;

const selectorParser = new CssSelectorParser();

selectorParser.registerSelectorPseudos('hover', 'active', 'focus', 'before', 'after', 'not', 'dir', 'nth-child');
selectorParser.registerNestingOperators('>', '+', '~');
selectorParser.registerAttrEqualityMods('^', '$', '*', '~');
selectorParser.enableSubstitutes();

const build = series(clean, initFolders, initFonts, initImages, initIcons, initFavicons, initTheme, copyScss);
const start = series(build, serve, watches);

export {
  start as default,
  build,
};

function clean() {
  return del(outputFolder);
}

function watches(cb) {
  watch(
    [
      'src/styles/**'
    ],
    series(cleanStyles, initTheme),
  );
  cb();
}

function cleanStyles() {
  return del([
    `${outputFolder}/styles/*`,
    `${outputFolder}/module.js`,
    `${outputFolder}/${themeName}-theme.js`
  ])
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
    ['fonts', 'images', 'styles'].map(folder => {
      fs.mkdirSync(`${outputFolder}/${folder}`, { recursive: true });
    });
  });

  cb();
}

function initFonts(cb) {
  const fonts = 'src/fonts/**/*.ttf';
  const fontmin = new Fontmin()
    .src(fonts)
    .use(Fontmin.glyph({
      hinting: false         // keep ttf hint info (fpgm, prep, cvt). default = true
    }))
    // .use(Fontmin.ttf2woff2())
    .use(Fontmin.ttf2woff({
      deflate: true         // remove metadata. default = false
    }))
    // .use(Fontmin.css())
    .dest(outputFolder + '/fonts');

  fontmin.run((error, files) => {
    if (error) throw error;

    console.log('Generate font face');

    let pending = files.length;

    files.forEach(file => {
      pending--;
      // Remove orgional ttf font from dist, we dont need it
      if(pending === 0) {glob.sync('dist/fonts/**/*.ttf').forEach(file => fs.remove(file))};
    })

    glob.sync(fonts).forEach(generateFontCss);

    cb();
  });
}

function initImages(cb) {
  return series(copyImages, generateImages)(cb);
}

function initIcons(cb) {
  // Here we will generate the icon font if we want one
  cb();
}

async function generateIcons(iconsFolder) {
  const svgo = new SVGO({
    plugins: [
      { cleanupAttrs: true },
      { removeDoctype: true },
      { removeXMLProcInst: true },
      { removeComments: true },
      { removeMetadata: true },
      { removeTitle: true },
      { removeDesc: true },
      { removeUselessDefs: true },
      { removeEditorsNSData: true },
      { removeEmptyAttrs: true },
      { removeHiddenElems: true },
      { removeEmptyText: true },
      { removeEmptyContainers: true },
      { removeViewBox: false },
      { cleanupEnableBackground: true },
      { convertStyleToAttrs: true },
      { convertColors: true },
      { convertPathData: true },
      { convertTransform: true },
      { removeUnknownsAndDefaults: true },
      { removeNonInheritableGroupAttrs: true },
      { removeUselessStrokeAndFill: true },
      { cleanupNumericValues: true },
      { moveElemsAttrsToGroup: false },
      { collapseGroups: true },
      { mergePaths:
        { force: true },
      },
      { convertShapeToPath: true },
      { removeDimensions: true },
      { removeXMLNS: true }
    ]
  });
  const items = [];

  for(const file of glob.sync(iconsFolder)) {
    const props = path.parse(file);
    const content = fs.readFileSync(file);

    const response = await svgo.optimize(content);
    const result = await parse(response.data);

    const name = props.name;
    const [ x, y, height, width ] = result.attributes.viewBox.split(' ');
    const obj = result.children.find(item => item.name === 'path' || item.name === 'g');
    const node = obj.children.length ? obj.children.find(item => item.name === 'path') : obj;
    const definition = node.attributes.d;

    items.push({ name, width, height, definition });
  };

  return Promise.all(items)
    .then(icons => {
      // console.log(icons);
      // cb();
      return icons;
    });
}

async function generateColors(file) {
  const result = await sassExtract.render({ file });
  const categories = result.vars.global['$all-colors'];
  const colors = Object.entries(categories.value).map(([type, colors]) => 
    Object.entries(colors.value).map(([key, item]) => {
      return { [key]: { type, hex: item.value.hex } };
    })
  );
  const arr = [].concat(...colors);
  const object = arr.reduce((obj, item) => obj = { ...obj, ...item }, {});

  return object;
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
    }
  };

  return favicons('src/images/symbol.svg', options, function(error, response) {
    if (error) throw error;

    console.log('Generate favicon module');

    [ ...response.images, ...response.files ].map(image => {
      fs.writeFileSync(`${outputFolder}/${image.name}`, image.contents);
    });

    const content = response.html.map(data => {
      return data.replace(/(href|content)="(.*?)"/g, (hit, group1, group2) => {
        var elm = hit;
        if(group2.indexOf('.') > -1) {
          const data2 = base64Img.base64Sync(`${outputFolder}/${group2}`);
          elm = elm.replace(group2, data2);
        }
        return elm;
      });
    });

    faviconItems = response.html;
    faviconItemsNoRefs = content;
 });
}

async function initTheme(cb) {
  let theme = { 
    [themeName]: {
      components: { default: { }, ie: { } }
    }
  };
  let themeNoRefs = { 
    [themeName]: {
      components: { default: { }, ie: { } }
    }
  };

  console.log('Generate css styles');

  glob.sync('src/styles/elements/*.scss').forEach(generateCss);

  console.log('Generate style module');

  glob.sync(`${outputFolder}/styles/*.css`).forEach(file => {
    const data = fs.readFileSync(path.resolve(file), 'utf8');
    let name = path.parse(file).name;
    let type = 'default';

    // TODO: branch variable should be fetched from travis and contain either branch path
    // For example: "branch/improvement/footer_mobile_mode/www" or "4.0.0-alpha.1/www"
    var branch = '';
    var root = branch ? `https://static.scania.com/build/global/${branch}` : '';

    if(name.substr(-3) === '_ie') {
      type = 'ie';
      name = name.substr(0, name.length - 3);
    }

    theme[themeName]['components'][type][name] = data.replace(/url\(\.\./g, 'url(%root%' + root);
    themeNoRefs[themeName]['components'][type][name] = refToData(data);
  });

  // TODO: We might wanna solve this without the need of global variables
  theme[themeName].favicons = faviconItems.map(item => item.replace(/(href|content)="/g, '$1="%root%/') )
  themeNoRefs[themeName].favicons = faviconItemsNoRefs;

  const icons = await generateIcons('src/icons/*.svg');

  theme[themeName].icons = {};
  icons.map(item => theme[themeName].icons[item.name] = item);
  themeNoRefs[themeName].icons = theme[themeName].icons;

  const colors = await generateColors('src/styles/_variables.scss');

  theme[themeName].colors = colors;
  themeNoRefs[themeName].colors = theme[themeName].colors;

  theme[themeName].version = version;
  themeNoRefs[themeName].version = version;

  fs.writeFileSync(`${outputFolder}/module.js`, `export const theme = ${ JSON.stringify(themeNoRefs, null, 2) };`, { flag: 'a' });

  fs.writeFileSync(`${outputFolder}/${themeName}-theme.js`, `
var theme = ${ JSON.stringify(theme, null, 2) };

document.addEventListener('storeReady', function(event) {
  theme = theme.${themeName};
  var favicons = theme.favicons;
  var store = event.detail.store;
  var actions = event.detail.actions;
  var root = document.querySelector('script[src$="${themeName}-theme.js"]').src.replace('${themeName}-theme.js', '');

  theme.components = document.head.attachShadow ? theme.components.default : theme.components.ie;
  Object.keys(theme.components).map(function(key) { theme.components[key] = theme.components[key].replace(/\%root\%\\//g, root) } );
  favicons = favicons.map(function(val) { return val.replace(/\%root\%\\//g, root) } );
  theme.favicons = favicons;

  store.dispatch({ type: actions.ADD_THEME, theme : {${themeName}: theme} });
});
  `,
  { flag: 'w' });

  console.log('Style updated.');

  cb();
}

function generateFontCss(file) {
  const props = path.parse(file);
  const type = props.dir.split('/').pop();
  const name = props.name
    .replace(/CY|-|Regular/g, '')
    .split(/(?=[A-Z])/).join(' ');
  const unicode = type === 'cyrillic' ? `
  unicode-range: U+0400-04FF;` : '';

  let content;

  if(props.name.indexOf('Bold') > -1) {
    content = `
  font-family: "${name.replace(' Bold', '')}";
  font-weight: bold;${
    unicode
  }`;
  } else if(props.name.indexOf('Italic') > -1) {
    content = `
  font-family: "${name.replace(' Italic', '')}";
  font-style: italic;${
    unicode
  }`;
  } else {
    content = `
  font-family: "${name}";${
    unicode
  }`;
  }

  const data = generateFontFace(file, content);

  fs.writeFileSync(`${outputFolder}/fonts/fonts.css`, data, { flag: 'a' });
}

function generateFontFace(file, props) {
  const filename = file.replace(/src\/fonts\/|.ttf/g, '');
  return `@font-face {${
    props
  }
  src: url("${filename}.woff") format("woff")\n}\n`;
}

function copyScss() {
  return src(['src/styles/**/*'])
    .pipe(dest(`${outputFolder}/scss/`));
}

function copyImages() {
  return src('src/images/*.svg')
    .pipe(dest(`${outputFolder}/images/`));
}

function generateImages(cb) {
  glob.sync('src/images/*.svg').forEach(file => {
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
  const name = path.parse(file).name;
  const data = fs.readFileSync(path.resolve(file), 'utf8');
  const filepath = `${outputFolder}/styles/${name}`;
  const content = sass.renderSync({
    data,
    includePaths: [ 'src/styles/**' ],
    sourceMapEmbed: true,
    sourceMapContents: true
  });

  // c-theme is shadow true so we dont need to polyfill its content
  let content_ie =  content.css
    .toString();
    // .replace(/:root {([^}]*)}/, '');

  if(name !== 'c-theme' && name !== 'c-global-style') {
    content_ie = polyfill(name, content_ie);
  }

  fs.writeFileSync(`${filepath}.css`, content.css);
  fs.writeFileSync(`${filepath}_ie.css`, content_ie);
}

function refToData(data) {
  data = data.replace(/@import url\((.*?)(\);|\))/g, (hit, group) => {
    let content = fs.readFileSync(`${outputFolder}/styles/${group}`, 'utf8');
    return content;
  });

  data = data.replace(/url\((.*?)\)/g, (hit, group) => {
    const filepath = group.replace(/"|'/g, '');
    const extension = path.parse(filepath).ext;

    let head = '';
    let content;

    switch (extension) {
      case '.png':
      case '.svg':
      case '.jpg':
        content = base64Img.base64Sync(`${outputFolder}/styles/${filepath}`);
        break;
      case '.woff2':
      case '.woff':
        head = `data:application/font-${extension.substr(1)};charset=utf-8;base64,`;
        content = fs.readFileSync(`${outputFolder}/fonts/${filepath}`, 'base64');
        break;
      case '.ttf':
        head = 'data:font/ttf;charset=utf-8;base64,';
        content = fs.readFileSync(`${outputFolder}/fonts/${filepath}`, 'base64');
        break;
      default:
        content = filepath;
        break;
    }

    return `url(${head}${content})`;
  });

  return data;
}

function polyfill(name, content) {
  const prefix = '.sc-';

  content = content
    .replace(/::slotted\((.*?)\)/g, prefix + name + '-s > $1')
    .replace(/:host\((.*?)\)/g, prefix + name + '-h' + '$1')
    .replace(/:host/g, prefix + name + '-h')
    .replace(/::/g, ':');

  const cssObj = css.parse(content);

  cssObj.stylesheet.rules.map(rule => generateSelectors(rule, name));

  return css.stringify(cssObj);
}

function generateSelectors(rule, name) {
  if(rule.type === 'media') {
    rule.rules.map(rule => generateSelectors(rule, name));
  }

  if(rule.type !== 'rule') return;

  const selectorObj = selectorParser.parse( rule.selectors.join(',') );

  (selectorObj.selectors ? selectorObj.selectors : [ selectorObj ])
    .map(selector => ie(selector, name));

  rule.selectors = selectorParser.render(selectorObj).split(',');
}

function ie(item, name) {
  const cls = 'sc-' + name;
  const classes = [ cls ];

  if(item.type === 'rule' && (item.classNames || []).join().indexOf(cls) === -1) {
    item.classNames = item.classNames ? [ ...item.classNames, ...classes ] : classes
  }

  if(item.rule && (item.classNames || []).indexOf(cls + '-s') === -1) {
    item.rule = ie(item.rule, name);
  }

  return item;
}