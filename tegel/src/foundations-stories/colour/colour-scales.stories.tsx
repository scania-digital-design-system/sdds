import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Foundations/Colour',
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        state: 'closed',
      },
    },
  },
};

const Template = ({ colour }) => {
  const scale = {
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
  };
  const picked = scale[colour];
  let div = '';

  picked.forEach((num) => {
    div += `<div id="test" class="demo-wrapper" style="background-color: var(--sdds-${colour}-${num})">
      <span>--sdds-${colour}-${num}</span>
      </div>`;
  });

  return formatHtmlPreview(`
  <style>
  /* Demo code for presentation purposes */
  .demo-wrapper {
    height: 90px;
  }
  .demo-wrapper span {
    color: white;
    background-color: black;
    border: 1px solid white;
    padding: 4px;
    position: absolute;
  }
  </style>

    ${div}
    `);
};

export const Scales = Template.bind({});

Scales.argTypes = {
  colour: {
    name: 'Colour',
    description: 'Choose colour scale to display',
    control: {
      type: 'select',
    },
    options: { Grey: 'grey', Blue: 'blue', Red: 'red' },
  },
};

Scales.args = {
  colour: 'grey',
};
