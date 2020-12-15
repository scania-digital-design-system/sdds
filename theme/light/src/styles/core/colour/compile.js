const sass = require('sass');
const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const del = require('del');
const outputFolder = 'dist';
const bundleScss = require('bundle-scss');

init();

const dest= `${outputFolder}/scss/colour.scss`;
const mask= "./*.scss";

async function init() {
  await clean();
  await createFolders();
  await glob.sync('_colour.scss').forEach(generateCss);
  bundleScss(mask, dest);
  console.log(`${outputFolder}/ folder contains all files`)
}

// Remove dist
function clean() {
  console.log(`removing ${outputFolder}...`);
  return del(outputFolder);
}

// Setup up the folders
function createFolders() {
  console.log('creating folders...')
  fs.mkdirSync(outputFolder);
  fs.mkdirSync(`${outputFolder}/css`);
  fs.mkdirSync(`${outputFolder}/scss`);
}

// Creates a css file for each scss file in current folder
function generateCss(file) {
  const name = path.parse(file).name;
  console.log(`file: ${file}`)
  const data = fs.readFileSync(path.resolve(file), 'utf8');

  const content = sass.renderSync({
    data
  });
  if(data!==''){
    fs.writeFileSync(`${outputFolder}/css/${name.replace('_','')}.css`, content.css)
  }
  
}


