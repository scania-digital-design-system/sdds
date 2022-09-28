export default {
  title: 'Component/Spinner',
  parameters: {
    layout: 'centered', // Center the component horizontally and vertically in the Canvas
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

const style = `<style>
  
.demo {
display: flex;
justify-content: center;
align-items: center;
background-color: #F6F6F7; 
width: auto;
height: auto;

}
</style>`;
const Template = ({ size, mode }) => {
  return `
  ${
    mode === 'inverted'
      ? '<div style="    background-color: #0f3263; display: flex; width: 300px; height: 300px; justify-content: center; align-items: center;">'
      : ''
  }
  <sdds-spinner size="${size}" mode="${mode}">
  </sdds-spinner>
  ${mode === 'inverted' ? '</div>' : ''}

  `;
};

export const Basic = Template.bind({});
