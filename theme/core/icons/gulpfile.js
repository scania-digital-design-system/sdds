const { series, task, src, dest } = require('gulp');
const { parse } = require('svgson'); // to parse SVG to JSON
const { optimize, extendDefaultPlugins } = require('svgo'); // to clean SVG files
const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const del = require('del');
const iconfont = require('gulp-iconfont'); // to convert SVG to webfont files
const iconfontCss = require('gulp-iconfont-css'); // to create css from webfont

const outputFolder = 'dist';
const iconFolder = './src/svg/*.svg';
const tempFolder = 'temp';

const runTimestamp = Math.round(Date.now()/1000);
const fontName = 'sdds-icons';

// Use SVGO plugins to clean SVG from unused attributes,
// Doctype, and uneccesary clipPath
// See all available plugins here https://github.com/svg/svgo/tree/master/plugins
// extendDefaultPlugins will set all plugins to active
// See documentation here https://github.com/svg/svgo
const svgoConfig = {
  plugins: extendDefaultPlugins([
    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill|stroke|clip-path)' // remove clipPath so it does not add blue background on webfont
      }
    },{
      name:'mergePaths',
      params: {
        force: true // important to set to true
      }
    },{
      name:'removeElementsByAttr',
      params: {
        id: ['a','b','SVGID_1_','SVGID_2_'] // remove clipPath
      }
    },{
      name: 'removeViewBox',
      active: false
    }
  ])
};

// clean dist folder
function clean() {
  return del(outputFolder);
}

// create folders
function initFolders(cb) {
  [outputFolder, tempFolder].map(folder => {
    fs.mkdirSync(folder, { recursive: true });
  });

  cb();
}

// generate icons JS files
async function build(cb) {
  await generateIcons();
  
  cb();
}

async function generateIcons(){

  for(const file of glob.sync(iconFolder)) {
    const icon = {};
    
    const props = path.parse(file);
    
    const content = fs.readFileSync(file);
    const response = await optimize(content, { path:file, ...svgoConfig });
    
    const parsedSvg = await parse(response.data);

    icon.name = props.name;
    // Get width and height
    const [ x, y, height, width ] = parsedSvg.attributes.viewBox.split(' ');
    icon.width = width;
    icon.height = height;
    // Get SVG definition
    const svgPath = parsedSvg.children.find(item => item.name === 'path' || item.name === 'g');
    const node = svgPath.children.length ? svgPath.children.find(item => item.name === 'path') : svgPath;
    const transform = node.attributes.transform;
    if(transform!==undefined) {
      let transformObj = [];
      const regExp = /\(([^)]+)\)/;
      const matches = regExp.exec(transform);
      transformObj = matches[1].split(' ');
      icon.transform = transformObj;
    }
    icon.definition = node.attributes.d;
    icon.viewbox = parsedSvg.attributes.viewBox;

    const svgToJSON = `
    var icon = ${JSON.stringify(icon)};

    export default icon;
    `

    // put all cleaned SVGs in temp folder
    // to be used for generating icon fonts
    fs.writeFileSync(`${tempFolder}/${icon.name}.svg`, response.data);

    // write icons into icon-name.js
    fs.writeFileSync(`${outputFolder}/${icon.name}.js`, svgToJSON);  
  };
  
}

// create icon fonts from cleaned svgs
function createIconfont() {
  return src([`${tempFolder}/*.svg`])
    .pipe(iconfontCss({
      fontName: fontName,
      path: './src/_icons.css', // iconfont css template path
      targetPath: `css/sdds-icons.css`, // final result of the css
      fontPath: '../',
      cssClass:'sdds-icon'
    }))
    .pipe(iconfont({
      fontName: fontName, // required
      prependUnicode: true, // recommended option
      formats: ['ttf', 'eot', 'woff', 'woff2'], // default, 'woff2' and 'svg' are available
      timestamp: runTimestamp, // recommended to get consistent builds when watching files
    }))
    .pipe(dest(`${outputFolder}/fonts/`));
}

function cleanTemp(){
  return del(tempFolder);
}

exports.build = build; // build without iconfont
exports.iconfont = createIconfont; // build without js

// first, clean dist
// create folders
// generate icons JS files, and clean icons with SVGO, put into temp folder
// generate iconfont from temp folder
// clean temp folder
exports.default = series(clean, initFolders, build, createIconfont, cleanTemp);