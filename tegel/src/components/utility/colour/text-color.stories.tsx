import { formatHtmlPreview } from '../../../utils/utils';

export default {
  title: 'Utilities/Colours',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    colour: {
      name: 'Colour',
      description: 'The colour of the text',
      control: {
        type: 'select',
      },
      options: { Red: 'red', Blue: 'blue', Grey: 'grey' },
    },
    greyScale: {
      name: 'Scale',
      description: 'The colour scale used.',
      control: {
        type: 'select',
      },
      options: [
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
      if: { arg: 'colour', eq: 'grey' },
    },
    redScale: {
      name: 'Scale',
      description: 'The colour scale used.',
      control: {
        type: 'select',
      },
      options: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
      if: { arg: 'colour', eq: 'red' },
    },
    blueScale: {
      name: 'Scale',
      description: 'The colour scale used.',
      control: {
        type: 'select',
      },
      options: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
      if: { arg: 'colour', eq: 'blue' },
    },
  },
};

const Template = ({ colour, greyScale, blueScale, redScale }) => {
  let scale = 100;
  switch (colour) {
    case 'blue':
      scale = blueScale;
      break;
    case 'grey':
      scale = greyScale;
      break;
    case 'red':
      scale = redScale;
      break;
    default:
      scale = blueScale;
      break;
  }
  return formatHtmlPreview(
    `
  <style>
    .demo-wrapper h1 {
      margin: 0;
      width: 300px;
    }
  </style>
  <div class="demo-wrapper">
  <h1 class="sdds-text-${colour}-${scale}">A text ${colour} heading</h1>
  <p class="sdds-text-${colour}-${scale}">A text ${colour} paragraph</p>
  </div>
  `,
  );
};

export const textColor = Template.bind({});
textColor.args = {
  colour: 'blue',
  blueScale: '500',
  redScale: '500',
  greyScale: '958',
};
