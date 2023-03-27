import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Avatar',
  parameters: {
    layout: 'centered',
    notes: { Avatar: readme },
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
    src: {
      name: 'Image Source',
      description: 'The URL of the image to display in the avatar.',
      control: { type: 'text' },
    },
    alt: {
      name: 'Alt Text',
      description: 'The alt text to use for the image.',
      control: { type: 'text' },
    },
    size: {
      name: 'Size',
      description: 'The size of the avatar.',
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
  },
  args: {
    src: 'https://picsum.photos/200/200',
    size: 'medium',
  },
};

const Template = ({ src, size, alt }) =>
  formatHtmlPreview(`
    <sdds-avatar
      src="${src}"
      size="${size}"
      alt="${alt}"
      aria-label="${alt}"
    ></sdds-avatar>
`);

export const WebComponent = Template.bind({});
