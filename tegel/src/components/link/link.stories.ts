import clsx from 'clsx';
import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Link',
  parameters: {
    layout: 'centered',
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
      <a class="${clsx('demo-text sdds-link', disabled && 'disabled', noUnderline && 'sdds-link--no-underline')}" href="#">
        This is a link.
      </a>
  `,
  );
export const Default = Template.bind({});
