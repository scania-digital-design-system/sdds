import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Native Components (Deprecated)/Divider',
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
    orientation: {
      name: 'Orientation',
      description: 'Choose divider orientation.',
      control: {
        type: 'radio',
      },
      options: ['Horizontal', 'Vertical'],
    },
    direction: {
      name: 'Direction',
      description: 'Sets the direction of the divider.',
      control: {
        type: 'select',
      },
      options: ['Top', 'Right', 'Bottom', 'Left'],
    },
    width: {
      name: 'Width',
      description: 'Sets the divider width.',
      control: {
        type: 'number',
      },
      if: { arg: 'orientation', eq: 'Horizontal' },
    },
    height: {
      name: 'Height',
      description: 'Sets the divider height.',
      control: {
        type: 'number',
      },
      if: { arg: 'orientation', eq: 'Vertical' },
    },
  },
  args: {
    orientation: 'Horizontal',
    direction: 'Top',
    width: 150,
    height: 150,
  },
};

const Template = ({ orientation, width, height }) => {
  const classLookup = {
    Horizontal: `sdds-divider`,
    Vertical: `sdds-divider-vertical`,
  };

  return formatHtmlPreview(
    `
      <style>
         ${
           height
             ? `/* demo-div is for demonstration purposes only*/
        .demo-div {
          height: ${height}px;
          width: 1px;
          padding: 0px;
        }`
             : ''
         }    ${
      width
        ? `/* demo-div is for demonstration purposes only*/
            .demo-div {
              width: ${width}px;
              height: 1px;
              padding: 0px;
            }`
        : ''
    }
      </style>


      <div
  class="demo-div ${classLookup[orientation]}"></div>
  `,
  );
};

const BorderTemplate = ({ direction }) => {
  const directionLookup = {
    Top: 'top',
    Right: 'right',
    Bottom: 'bottom',
    Left: 'left',
  };
  return formatHtmlPreview(
    `
      <style>
      #demo-wrapper{
        padding: 50px;
        background-color: var(--sdds-grey-958)
      }
       /* border-demo-div is for demonstration purposes only*/
        .border-demo-div {
          height: 200px;
          width: 200px;
          background-color: var(--sdds-grey-868);
          color: var(--sdds-grey-50);
          text-align: center;
          padding: 10px;
        }

      </style>
     <div id= "demo-wrapper">

      <div
  class="border-demo-div sdds-divider-border-${directionLookup[direction]}">
  <H4>DEMO</H4></div></div>
  `,
  );
};

export const Native = Template.bind({});
Native.argTypes = {
  direction: { table: { disable: true } },
};
export const Border = BorderTemplate.bind({});
Border.args = {
  direction: 'Top',
};

Border.argTypes = {
  orientation: { table: { disable: true } },
};
