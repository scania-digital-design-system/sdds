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
          name: 'Dark-grey',
          value: '#868fa2',
        },
      ],
    },
  },
  argTypes: {
    mode: {
      control: {
        type: 'radio',
        options: { Standard: 'standard', Inverted: 'inverted' },
      },
      defaultValue: 'standard',
      description: 'Mode of the spinner',
    },
    size: {
      control: {
        type: 'radio',
        options: { Large: 'lg', Medium: 'md', Small: 'sm', XSmall: 'xs' },
      },
      defaultValue: 'lg',
      description: 'Size of the spinner',
    },
  },
};

const Template = ({ size, mode }) => {
  return `
  <sdds-spinner size="${size}" mode="${mode}">
  </sdds-spinner>
  `;
};

export const Standard = Template.bind({});
Standard.args = {
  mode: 'standard',
};

export const Inverted = Template.bind({});
Inverted.args = {
  mode: 'inverted',
};
Inverted.parameters = {
  backgrounds: { default: 'Dark-grey' },
};
