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
    direction: {
      name: 'Direction',
      description: 'Choose divider direction.',
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical'],
      },
      defaultValue: 'horizontal',
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    type: {
      name: 'Type',
      description: 'Choose divider type.',
      control: {
        type: 'radio',
        options: ['light', 'dark'],
      },
      defaultValue: 'light',
      table: {
        defaultValue: { summary: 'light' },
      },
    },
  },
};

const Template = ({ direction, type }) =>
  formatHtmlPreview(`
  <div style="${
    direction === 'horizontal' ? 'width: 150px;' : 'height: 150px; position: relative;'
  }">
    <sdds-divider direction="${direction}" type="${type}"></sdds-divider>
  </div>
`);

export const Divider = Template.bind({});
Divider.args = {
  direction: 'horizontal',
  type: 'light',
};
