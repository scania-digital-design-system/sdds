import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Divider',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=993%3A47555&t=8p1W6DsJrzvgWfmp-4',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=993%3A47555&t=8p1W6DsJrzvgWfmp-4',
      },
    ],
  },
  argTypes: {
    type: {
      name: 'Type',
      description: 'Choose divider type.',
      control: {
        type: 'radio',
      },
      options: ['Horizontal', 'Vertical'],
      table: {
        defaultValue: { summary: 'Horizontal' },
      },
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
  },
};

const Template = ({ type, width, height }) => {
  const classLookup = {
    Horizontal: `sdds-divider`,
    Vertical: `sdds-divider vertical`,
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
  class="demo-div ${classLookup[type]}"></div>
  `,
  );
};

export const WebComponent = Template.bind({});
