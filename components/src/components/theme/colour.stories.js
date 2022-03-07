export default {
  title: 'Foundation/Colour',
  parameters: {
    layout: 'fullscreen',
  },
};

const style = `
  <style>
    .colour-div {
      height: 90px;
    }
    .colour-div span {
      color: white;
      background-color: black;
      border: 1px solid white;
    }
  </style>
`;

const BrandTemplate = () => `
  ${style}
  <div class="colour-div" style="background-color: var(--sdds-black)">
    <span>black</span>
  </div>
  <div class="colour-div" style="background-color: var(--sdds-white)">
    <span>white</span>
  </div>
  <div class="colour-div" style="background-color: var(--sdds-blue)">
    <span>blue</span>
  </div>
  `;

export const Brand = BrandTemplate.bind({});

const SemanticTemplate = () => `
  ${style}
  <div class="colour-div" style="background-color: var(--sdds-positive)">
    <span>positive</span>
  </div>
  <div class="colour-div" style="background-color: var(--sdds-warning)">
    <span>warning</span>
  </div>
  <div class="colour-div" style="background-color: var(--sdds-negative)">
    <span>negative</span>
  </div>
  <div class="colour-div" style="background-color: var(--sdds-information)">
    <span>information</span>
  </div>`;

export const Sematic = SemanticTemplate.bind({});

const ScaleTemplate = ({ colour = 'grey', scale = '' }) => {
  const picked = scale[colour];
  let div = '';

  picked.forEach((num) => {
    div += `<div id="test" class="colour-div" style="background-color: var(--sdds-${colour}-${num})">
    <span>${colour}-${num}</span>
    </div>`;
  });

  return style + div;
};

export const Scales = ScaleTemplate.bind({});

Scales.argTypes = {
  colour: {
    options: ['grey', 'blue', 'red'],
    control: {
      type: 'select',
    },
  },
};

Scales.args = {
  colour: 'grey',
  scale: {
    grey: [
      '50',
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '846',
      '868',
      '900',
      '958',
    ],
    blue: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
    red: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
  },
};
