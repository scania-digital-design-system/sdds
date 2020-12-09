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
  fs.mkdirSync(`${outputFolder}/scss`);
}

// Create a scss folder will all scss files in current folder
//FIXME: Import of files outside current package
function generateScss(name, data) {
  fs.writeFileSync(`${outputFolder}/scss/${name}.scss`, data)
}

function importFile(data) {
  const toMatch =/(@import '\.\.\/(.*)\')/gm;
  const files = toMatch.exec(data);
  
  if(files!==null){
    const filePath = path.join(__dirname, '../', '_' + files[2] + '.scss');
    const output = `${outputFolder}/_${files[2]}.scss`;
    fs.createReadStream(filePath).pipe(fs.createWriteStream(output));
  }
}

// Creates a css file for each scss file in current folder
function generateCss(file) {
  const name = path.parse(file).name;
  console.log(`file: ${file}`)
  
  fs.readFile(path.resolve(file), 'utf8', function(err, data){
    if(err) throw err;

    importFile(data);

    const content = sass.renderSync({
      data
    });
  
    fs.writeFileSync(`${outputFolder}/css/${name.replace('_','')}.css`, content.css)
    generateScss(name,data);
  })
}


