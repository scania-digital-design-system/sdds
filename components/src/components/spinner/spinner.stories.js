import { addons } from '@storybook/addons';
import { UPDATE_GLOBALS, STORY_ARGS_UPDATED } from '@storybook/core-events';
export default {
  title: 'Component/Spinner',
  parameters: {
    layout: 'centered', // Center the component horizontally and vertically in the Canvas
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
    Mode: {
      control: {
        type: 'radio',
        options: { Standard: 'standard', Inverted: 'inverted' },
      },
      defaultValue: 'standard',
      description: 'Mode of the spinner',
    },
    Size: {
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

const storyListener = (args) => {
  if (args.args.Mode) {
    let Mode = args.args.Mode;
    channel.emit(UPDATE_GLOBALS, {
      globals: {
        theme: Mode,
        backgrounds:
          Mode === 'inverted'
            ? { name: 'Dark grey', value: '#868fa2' }
            : { name: 'Light grey', value: '#F9FAFB' },
      },
    });
  }
};

function setupBackgroundListener() {
  channel.removeListener(STORY_ARGS_UPDATED, storyListener);
  channel.addListener(STORY_ARGS_UPDATED, storyListener);
}

setupBackgroundListener();
const Template = ({ Size, Mode }) => {
  return `
  <sdds-spinner Size="${Size}" Mode="${Mode}">
  </sdds-spinner>
  `;
};

export const Standard = Template.bind({});
Standard.args = {
  Mode: 'standard',
};

export const Inverted = Template.bind({});
Inverted.args = {
  Mode: 'inverted',
};
Inverted.parameters = {
  backgrounds: { default: 'Dark grey' },
};
