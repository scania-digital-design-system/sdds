import { addons } from '@storybook/addons';
import { UPDATE_GLOBALS, STORY_ARGS_UPDATED } from '@storybook/core-events';
import format from 'html-format';
import readme from './readme.md';

export default {
  title: 'Components/Spinner',
  parameters: {
    layout: 'centered', // Center the component horizontally and vertically in the Canvas
    notes: readme,
    backgrounds: {
      default: 'Light grey',
      values: [
        {
          name: 'White',
          value: '#FFFFFF',
        },
        {
          name: 'Light grey',
          value: '#F9FAFB',
        },
        {
          name: 'Dark grey',
          value: '#868fa2',
        },
      ],
    },
  },
  argTypes: {
    variant: {
      name: 'Variant',
      control: {
        type: 'radio',
        options: { Standard: 'standard', Inverted: 'inverted' },
      },
      defaultValue: 'standard',
      description: 'Variant of the spinner',
    },
    size: {
      name: 'Size',
      control: {
        type: 'radio',
        options: { Large: 'lg', Medium: 'md', Small: 'sm', XSmall: 'xs' },
      },
      defaultValue: 'lg',
      description: 'Size of the spinner',
    },
  },
};

let channel = addons.getChannel();

const storyListener = args => {
  if (args.args.variant) {
    let variant = args.args.variant;
    channel.emit(UPDATE_GLOBALS, {
      globals: {
        theme: variant,
        backgrounds: variant === 'inverted' ? { name: 'Dark grey', value: '#868fa2' } : { name: 'Light grey', value: '#F9FAFB' },
      },
    });
  }
};

function setupBackgroundListener() {
  channel.removeListener(STORY_ARGS_UPDATED, storyListener);
  channel.addListener(STORY_ARGS_UPDATED, storyListener);
}

setupBackgroundListener();
const Template = ({ size, variant }) => {
  return format(
    `
  <sdds-spinner 
    size="${size}"  
    variant="${variant}">
  </sdds-spinner>
  `,
  );
};

export const Standard = Template.bind({});
Standard.args = {
  variant: 'standard',
};

export const Inverted = Template.bind({});
Inverted.args = {
  variant: 'inverted',
};
Inverted.parameters = {
  backgrounds: { default: 'Dark grey' },
};
