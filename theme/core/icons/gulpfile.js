const { series } = require('gulp');
const { parse } = require('svgson');
const {optimize} = require('svgo');
const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const del = require('del');

const outputFolder = 'dist';
const iconFolder = './svg/*.svg';

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
  fs.mkdirp(outputFolder);

  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
async function build(cb) {
  // body omitted

  await generateIcons(iconFolder);
  
  cb();
}

async function generateIcons(iconsFolder){
  const icon = {};

  for(const file of glob.sync(iconsFolder)) {
    
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

    fs.writeFileSync(`${outputFolder}/${icon.name}.js`, svgToJSON);  
  };
  
}

exports.build = build;
exports.default = series(clean, initFolders, build);


// var icon = {
//   "name": "truck",
//   "width": "256",
//   "height": "256",
//   "definition": "M163 36V18H93v18H72v202h112V36h-21zm-10 10h21v182H82V46h21V28h50v18zM116.498 183.94L132.177 134H107l33.588-62-15.767 50H150z"
// };

// export default icon;