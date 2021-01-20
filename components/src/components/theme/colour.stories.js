export default {
  title: 'Foundation/Colour'
};

const Template = ({content}) => {
  return `
  <c-theme name="scania"></c-theme>
  ${content}
  `
};

export const ColourScale = Template.bind({});

let colours = ['<style>.box {display:inline-block; position:relative; width:100px; height:100px; margin-bottom:50px;} p{position:absolute;bottom:-30px; left:0;}</style> <div class="sdds-container">'];
let box;

function renderColor(colour){
  box = `<div class="sdds-row"><div class="sdds-col-xxlg-16 sdds-col-xlg-16 sdds-col-lg-16 sdds-col-md-8 sdds-col-sm-4"><div class="box sdds-background-${colour}-50"><p>${colour}-50</p></div>`;
  for (let i = 1; i < 10; i++) {
    box += `<div class="box sdds-background-${colour}-${i}00"><p>${colour}-${i}00</p></div>`;
  }
  box += `</div></div>`
  colours.push(box);
}

renderColor('grey');
renderColor('blue');
renderColor('red');
renderColor('green');
renderColor('orange');

box = `</div>`;
colours.push(box);

ColourScale.args = {
  content: colours.join('')
}