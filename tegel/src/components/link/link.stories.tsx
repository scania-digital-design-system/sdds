import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Link',
  parameters: {
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
    },
    noUnderline: {
      name: 'No underline',
      description: 'Hide underline under link text',
      controls: {
        type: 'boolean',
      },
    },
  },
  args: {
    disabled: false,
    noUnderline: false,
  },
};

const Template = ({ disabled, noUnderline }) =>
  formatHtmlPreview(
    `
      <a class="sdds-link ${disabled ? 'disabled' : ''} ${
      noUnderline ? 'sdds-link--no-underline' : ''
    }" href="#">
        This is a link.
      </a>
  `,
  );
export const Default = Template.bind({});
