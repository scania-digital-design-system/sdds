import { addons } from '@storybook/addons';
import { UPDATE_GLOBALS, STORY_ARGS_UPDATED } from '@storybook/core-events';
import format from 'html-format';
import readme from './readme.md';

export default {
  title: 'Components/Spinner',
  parameters: {
    layout: 'centered', // Center the component horizontally and vertically in the Canvas
    notes: readme,
  },
  argTypes: {
    variant: {
      name: 'Variant',
      control: {
        type: 'radio',
      },
      options: ['Standard', 'Inverted'],
      defaultValue: 'standard',
      description: 'Variant of the spinner',
    },
    size: {
      name: 'Size',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small', 'Extra small'],
      description: 'Size of the spinner',
    },
  },
  args: {
    size: 'Large',
    variant: 'Standard',
  },
};

const Template = ({ size, variant }) => {
  const sizeLookup = { 'Large': 'lg', 'Medium': 'md', 'Small': 'sm', 'Extra small': 'xs' };
  const variantLookup = { Standard: 'standard', Inverted: 'inverted' };

  return format(
    `
  <sdds-spinner 
    size="${sizeLookup[size]}"  
    variant="${variantLookup[variant]}">
  </sdds-spinner>
  `,
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Inverted = Template.bind({});
Inverted.args = {
  variant: 'Inverted',
};
