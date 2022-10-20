import { Meta, StoryFn } from '@storybook/html';
import clsx from 'clsx';
import { formatHtmlPreview } from '../../utils/utils';

const defaultArgs = {
  disabled: false,
  noUnderline: false,
};

type Args = typeof defaultArgs;

export default {
  title: 'Components/Link',
  argTypes: {
    disabled: {
      name: 'Disabled',
      description: 'Display link in disabled state',
      defaultValue: false,
      type: 'boolean',
    },
    noUnderline: {
      name: 'No underline',
      description: 'Hide underline under link text',
      defaultValue: false,
      type: 'boolean',
    },
  },
} as Meta<Args>;

const Template: StoryFn<Args> = args => {
  return formatHtmlPreview(
    `
      <style>
        /* The demo-text class is only for demonstration purposes. */
        .demo-text {
          font-size: 36px;
        }
      </style>
      <a class="${clsx('demo-text sdds-link', args.disabled && 'disabled', args.noUnderline && 'sdds-link--no-underline')}" href="#">
        This is a link.
      </a>
   
  `,
  );
};
export const Default = Template.bind({});

Default.args = defaultArgs;
