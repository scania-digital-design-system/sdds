import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Link',
  parameters: {
    notes: readme,
    layout: 'centered',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=2147%3A99321&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=2147%3A99321&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    disabled: {
      name: 'Disabled',
      description: 'Display link in disabled state',
      controls: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    underline: {
      name: 'Underline',
      description: 'Underline under link text.',
      controls: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    target: {
      name: 'Target',
      description: 'Where to open the linked URL.',
      control: {
        type: 'radio',
      },
      options: ['_self', '_blank', '_parent', '_top'],
      table: {
        defaultValue: { summary: '_self' },
      },
    },
  },
  args: {
    disabled: false,
    underline: true,
    target: '_self',
  },
};

const Template = ({ disabled, underline, target }) =>
  formatHtmlPreview(
    `
    <sdds-link
        ${disabled ? 'disabled' : ''}
        ${underline ? '' : 'underline="false"'}
        href="#"
        target="${target}"
        >
        This is a link.
    </sdds-link>
  `,
  );
export const WebComponent = Template.bind({});
