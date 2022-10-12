import { Meta, StoryFn } from '@storybook/html';
import format from 'html-format';
import clsx from 'clsx';

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
  return format(
    `
    <a class="${clsx('sdds-link', args.disabled && 'disabled', args.noUnderline && 'sdds-link--no-underline')}" href="#">
      This is a link.
    </a>
  `,
  );
};
export const Default = Template.bind({});

Default.args = defaultArgs;

export const Disabled = Template.bind({});

Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const NoUnderline = Template.bind({});

NoUnderline.args = {
  ...Default.args,
  noUnderline: true,
};
