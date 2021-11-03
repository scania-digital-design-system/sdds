const sass = require('sass');
const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const del = require('del');
const outputFolder = 'dist';
const ttf2woff = require('ttf2woff');

init();

async function init() {
  await clean();
  await createFolders();
  await glob.sync('../assets/fonts/**/*.ttf').forEach(initFont);
  await glob.sync('*.scss').forEach(generateCss);
  console.log(`${outputFolder}/ folder contains all files`);
}

// Remove dist
function clean() {
  console.log(`removing ${outputFolder}...`);
  return del(outputFolder);
}

// Setup up the folders
function createFolders() {
  console.log('creating folders...');
  fs.mkdirSync(outputFolder);
  fs.mkdirSync(`${outputFolder}/css`);
  fs.mkdirSync(`${outputFolder}/scss`);
  fs.mkdirSync(`${outputFolder}/fonts/latin`, { recursive: true });
  fs.mkdirSync(`${outputFolder}/fonts/cyrillic`, { recursive: true });
}

function initFont(font) {
  const options = {};
  const filename = path.parse(font).name;
  const baseFolder = path.basename(path.dirname(font));
  let input;

  generateFontCss(font);

  try {
    input = fs.readFileSync(path.resolve(font));
  } catch (e) {
    console.error("Can't open input file (%s)", input);
    process.exit(1);
  }

  const ttf = new Uint8Array(input);

  const woff = Buffer.from
    ? Buffer.from(ttf2woff(ttf, options).buffer)
    : new Buffer(ttf2woff(ttf, options).buffer);

  fs.writeFileSync(
    `${outputFolder}/fonts/${baseFolder}/${filename}.woff`,
    woff
  );
}

// Generate font css

function generateFontCss(file) {
  const props = path.parse(file);
  const type = props.dir.split('/').pop();
  const name = props.name
    .replace(/CY|-|Regular/g, '')
    .split(/(?=[A-Z])/)
    .join(' ');
  const unicode =
    type === 'cyrillic'
      ? `
  unicode-range: U+0400-04FF;`
      : '';

  let content;

  if (props.name.indexOf('Bold') > -1) {
    content = `
  font-family: "${name.replace(' Bold', '')}";
  font-weight: bold;${unicode}`;
  } else if (props.name.indexOf('Italic') > -1) {
    content = `
  font-family: "${name.replace(' Italic', '')}";
  font-style: italic;${unicode}`;
  } else {
    content = `
  font-family: "${name}";${unicode}`;
  }

  const data = generateFontFace(file, content);

  fs.writeFileSync(`${outputFolder}/fonts/scania-sans.css`, data, {
    flag: 'a',
  });
}
function generateFontFace(file, props) {
  const filename = file.replace(/..\/assets\/fonts\/|.ttf/g, '');
  return `@font-face {${props}
  src: url("./${filename}.woff") format("woff")\n}\n`;
}

// Create a scss folder will all scss files in current folder
function generateScss(name, data) {
  fs.writeFileSync(`${outputFolder}/scss/${name}.scss`, data);
  if (name === '_typography') replaceFontsScss();
}

// Import of files outside current package
function importFile(data) {
  const toMatch = /(@import '\.\.\/(.*)\')/gm;
  let match;

  while ((match = toMatch.exec(data)) !== null) {
    console.log(`Import ${match[2]}`);
    const filePath = path.join(__dirname, '../', '_' + match[2] + '.scss');
    const output = `${outputFolder}/_${match[2]}.scss`;
    fs.createReadStream(filePath).pipe(fs.createWriteStream(output));
  }
}

// On the dist folder replace fonts path to the correct one
function replaceFontsScss() {
  const file = `${outputFolder}/scss/_typography.scss`;
  const toMatch = /(@import '\.\/dist\/fonts\/scania-sans\')/gm;

  fs.readFile(path.resolve(file), 'utf8', function (err, data) {
    if (err) throw err;

    const newLine = data.replace(toMatch, "@import '../fonts/scania-sans'");

    fs.writeFileSync(file, newLine);
  });
}

// Creates a css file for each scss file in current folder
function generateCss(file) {
  const name = path.parse(file).name;
  console.log(`file: ${file}`);

  fs.readFile(path.resolve(file), 'utf8', function (err, data) {
    if (err) throw err;

    importFile(data);

    const content = sass.renderSync({
      data,
    });

    fs.writeFileSync(
      `${outputFolder}/css/${name.replace('_', '')}.css`,
      content.css
    );
    generateScss(name, data);
  });
}
