const { series, task, src, dest } = require('gulp');
const { parse } = require('svgson');
const {optimize} = require('svgo');
const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const del = require('del');
const iconfontCss = require('gulp-iconfont-css');
const iconfont = require('gulp-iconfont');

const outputFolder = 'dist';
const iconFolder = './src/svg/*.svg';
const tempFolder = 'temp';

const runTimestamp = Math.round(Date.now()/1000);
const fontName = 'sdds-icons';

const svgoConfig = {
  plugins: [
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeEditorsNSData',
    'cleanupAttrs',
    'mergeStyles',
    'inlineStyles',
    'minifyStyles',
    'cleanupIDs',
    'convertStyleToAttrs',
    'removeUselessDefs',
    'cleanupNumericValues',
    'convertColors',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill|stroke)'
      }
    },
    // 'removeViewBox',
    'cleanupEnableBackground',
    'removeHiddenElems',
    'removeEmptyText',
    'convertShapeToPath',
    'convertEllipseToCircle',
    // 'moveElemsAttrsToGroup',
    // 'moveGroupAttrsToElems',
    'collapseGroups',
    'convertPathData',
    'convertTransform',
    'removeEmptyAttrs',
    'removeEmptyContainers',
    {
      name:'mergePaths',
      params: {
        force: true // important to set to true
      }
    },
    'removeUnusedNS',
    'sortDefsChildren',
    'removeTitle',
    'removeDesc',
    'removeDimensions'
  ]
};

function clean() {
  return del(outputFolder);
}

function initFolders(cb) {
  // fs.mkdirp(outputFolder);
  // fs.mkdirp('svg/temp/');
  [outputFolder, tempFolder].map(folder => {
    fs.mkdirSync(folder, { recursive: true });
  });

  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
async function build(cb) {
  // body omitted
  await generateIcons();
  
  cb();
}

async function generateIcons(){
  const icon = {};

  for(const file of glob.sync(iconFolder)) {
    
    const props = path.parse(file);
    
    const content = fs.readFileSync(file);
    const response = await optimize(content, { path:file, ...svgoConfig });
    
    const parsedSvg = await parse(response.data);

    icon.name = props.name.split('-').pop(); // for svg files named scania-abc
    // Get width and height
    const [ x, y, height, width ] = parsedSvg.attributes.viewBox.split(' ');
    icon.width = width;
    icon.height = height;
    // Get SVG definition
    const svgPath = parsedSvg.children.find(item => item.name === 'path' || item.name === 'g');
    const node = svgPath.children.length ? svgPath.children.find(item => item.name === 'path') : svgPath;
    icon.definition = node.attributes.d;

    const svgToJSON = `
    var icon = ${JSON.stringify(icon)};

    export default icon;
    `
    fs.writeFileSync(`${tempFolder}/${icon.name}.svg`, response.data);
    fs.writeFileSync(`${outputFolder}/${icon.name}.js`, svgToJSON);  
  };
  
}

function createIconfont() {
  return src([`${tempFolder}/*.svg`])
    .pipe(iconfontCss({
      fontName: fontName,
      path: './src/_icons.css', // template path
      targetPath: `css/all.css`,
      fontPath: '../',
      cssClass:'sdds-icon'
    }))
    .pipe(iconfont({
      fontName: fontName, // required
      prependUnicode: true, // recommended option
      formats: ['ttf', 'eot', 'woff'], // default, 'woff2' and 'svg' are available
      timestamp: runTimestamp, // recommended to get consistent builds when watching files
    }))
      // .on('glyphs', function(glyphs, options) {
      //   // CSS templating, e.g.
      //   console.log(glyphs, options);
      // })
    .pipe(dest(`${outputFolder}/fonts/`));
}

function cleanTemp(){
  return del(tempFolder);
}

exports.build = build; // build without iconfont
exports.iconfont = createIconfont;
exports.default = series(clean, initFolders, build, createIconfont);