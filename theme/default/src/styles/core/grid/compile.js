const sass = require("sass");
const fs = require("fs-extra");
const glob = require('glob');
const path = require('path');
const del = require('del');
const outputFolder = 'dist';


init();

async function init() {
  await clean();
  await createFolders();
  await glob.sync('*.scss').forEach(generateCss);
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
  // fs.mkdirSync(`${outputFolder}/scss`);
}

// Create a scss folder will all scss files in current folder
//FIXME: Import of files outside current package
function generateScss(name, data) {
  fs.writeFileSync(`${outputFolder}/scss/${name}.scss`, data)
}

// Creates a css file for each scss file in current folder
function generateCss(file) {
  const name = path.parse(file).name;
  console.log(`file: ${file}`)
  const data = fs.readFileSync(path.resolve(file), 'utf8');

  const content = sass.renderSync({
    data
  });

  fs.writeFileSync(`${outputFolder}/css/${name.slice(1)}.css`, content.css)
  // generateScss(name,data);
}


