import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Divider',
  parameters: {
    layout: 'centered',
    notes: { Divider: readme },
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
        options: ['Horizontal', 'Vertical'],
      },
      table: {
        defaultValue: { summary: 'horizontal' },
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
  args: {
    type: 'Horizontal',
    width: 150,
    height: 150,
  },
};

const Template = ({ type, width, height }) =>
  formatHtmlPreview(`
  <div style="${type === 'Horizontal' ? `width: ${width}px;` : `height: ${height}px;`}">
    <sdds-divider type="${type.toLowerCase()}"></sdds-divider>
  </div>
`);

export const WebComponent = Template.bind({});
