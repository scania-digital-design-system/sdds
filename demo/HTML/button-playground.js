let css = 'sdds-btn sdds-btn-primary';
let size = ['', 'sdds-btn-md', 'sdds-btn-sm'];
let fullbleed = ['', 'sdds-btn-fullbleed'];
let button;

// Loop out all widths
for (let j = 0; j < fullbleed.length; j++) {
  // Loop out all sizees
  for (let i = 0; i < size.length; i++) {
    console.log(
      i +
        ': ' +
        '<button class="' +
        css +
        ' ' +
        fullbleed[j] +
        ' ' +
        size[i] +
        '">Button</button>'
    );
    button =
      '<button class="' +
      css +
      ' ' +
      fullbleed[j] +
      ' ' +
      size[i] +
      '">Button</button> ';

    document.getElementById('createButtons').innerHTML = button;
  }
}
