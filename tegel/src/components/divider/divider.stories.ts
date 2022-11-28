import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Divider',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=993%3A47555&t=M7Ova7xZaoeMwb5e-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=993%3A47555&t=M7Ova7xZaoeMwb5e-1',
      },
    ],
  },
  argTypes: {
    style: {
      name: 'Style',
      description: 'Set the style of the divider.',
      control: {
        type: 'select',
      },
      options: ['Light', 'Dark', 'Coloured'],
    },
    type: {
      name: 'Type',
      description: 'Choose divider type.',
      control: {
        type: 'radio',
      },
      options: ['Horizontal', 'Vertical', 'Border'],
    },
    width: {
      name: 'Width',
      description: 'Choose divider width.',
      control: {
        type: 'number',
      },
      if: { arg: 'type', eq: 'Horizontal' },
    },
    height: {
      name: 'Height',
      description: 'Choose divider height.',
      control: {
        type: 'number',
      },
      if: { arg: 'type', eq: 'Vertical' },
    },
    direction: {
      name: 'Direction',
      discription: 'Set the direction of the divider',
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
