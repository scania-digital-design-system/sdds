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
    backgrounds: {
      defaultBackground: "white"
      // default: "white",
      // values: [
      //   {
      //     name: 'grey-50',
      //     value: '#F9FAFB',
      //   },
      //   {
      //     name: 'white',
      //     value: '#FFFFFF',
      //   },
      //   {
      //     name: 'grey-900',
      //     value: '#1d2229',
      //   },
      //   {
      //     name: 'grey-958',
      //     value: '#0d0f13',
      //   },
      // ],
    }
  },
  argTypes: {
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
      description: 'Set the direction of the divider',
      control: {
        type: 'select',
      },
      options: ['Top', 'Right', 'Bottom', 'Left'],
      if: { arg: 'type', eq: 'Border' },
    },
  },
  args: {
    type: 'Horizontal',
    width: 150,
    height: 150,
    direction: 'Top',
  },
};

const directionLookup = {
  Top: 'top',
  Right: 'right',
  Bottom: 'bottom',
  Left: 'left',
};

const Template = ({ type, width, direction, height }) => {
  const classLookup = {
    Horizontal: `sdds-divider`,
    Vertical: `sdds-divider-vertical`,
    Border: `sdds-divider-border-${directionLookup[direction]}`,
  };
  
  return formatHtmlPreview(
    `
      <style>
      .demo-wrapper{
        padding: 50px;
        background-color: var(--sdds-grey-958)
      }
        ${
          direction
            ? `/* demo-div is for demonstration purposes only*/
        .demo-div {
          height: 200px;
          width: 200px;
          background-color: var(--sdds-grey-868);
          color: var(--sdds-grey-50);
          text-align: center;
          padding: 10px;
        }
        `
            : ''
        } ${
      height
        ? `/* demo-div is for demonstration purposes only*/
        .demo-div {
          height: ${height}px;
        }`
        : ''
    }    ${
      width
        ? `/* demo-div is for demonstration purposes only*/
            .demo-div {
              width: ${width}px;
            }`
        : ''
    }
      </style>
      ${direction ? '<div class= "demo-wrapper">' : ''}
      
      <div
  class="demo-div ${classLookup[type]}">
  ${direction ? '<H4>DEMO</H4></div>' : ''}</div>
  `,
);
};
export const Default = Template.bind({});
Default.args = {};
