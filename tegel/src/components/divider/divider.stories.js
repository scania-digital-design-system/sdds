import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Divider',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    style: {
      name: 'Style',
      descripton: 'The style of the divider.',
      control: {
        type: 'select',
      },
      options: ['Light', 'Dark', 'Coloured'],
    },
    type: {
      name: 'Type',
      description: 'Divider type.',
      control: {
        type: 'radio',
      },
      options: ['Horizontal', 'Vertical', 'Border'],
    },
    width: {
      name: 'Width',
      control: {
        type: 'number',
      },
      if: { arg: 'type', eq: 'Horizontal' },
    },
    height: {
      name: 'Height',
      control: {
        type: 'number',
      },
      if: { arg: 'type', eq: 'Vertical' },
    },
    direction: {
      name: 'Direction',
      discription: 'The direction of the divider',
      control: {
        type: 'select',
      },
      options: ['Top', 'Right', 'Bottom', 'Left'],
      if: { arg: 'type', eq: 'Border' },
    },
  },
  args: {
    style: 'Dark',
    type: 'Horizontal',
    width: 100,
    height: 100,
    direction: 'Top',
  },
};

const styleLookup = {
  Light: 'light',
  Dark: 'dark',
  Coloured: 'coloured',
};

const directionLookup = {
  Top: 'top',
  Right: 'right',
  Bottom: 'bottom',
  Left: 'left',
};

const Template = ({ type, style, width, height, direction }) => {
  const classLookup = {
    Horizontal: `sdds-divider-${styleLookup[style]}`,
    Vertical: `sdds-divider-${styleLookup[style]}-vertical`,
    Border: `divider-border-demo sdds-divider-${styleLookup[style]}-border-${directionLookup[direction]}`,
  };

  return formatHtmlPreview(
    `
    ${
      direction
        ? `<style>
    .demo-class {
    height: 200px;
    width: 200px;
    background-color: var(--sdds-grey-100);
    }
    </style>`
        : ''
    }
        <div
    ${width ? `style="width:${width}px;"` : ''}
    ${height ? `style="height:${height}px;"` : ''}
    class="${classLookup[type]} ${direction ? `demo-class` : ''}">
    ${direction ? 'DEMO' : ''}</div>
    `,
  );
};

export const Default = Template.bind({});

Default.args = {};
