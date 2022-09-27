export default {
  title: 'Component/Spinner',
  parameters: {
    layout: 'centered', // Center the component horizontally and vertically in the Canvas
  },
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['default', 'small', 'medium'],
      },
      defaultValue: 'default',
      description: 'Size of the button',
    },
    type: {
      control: {
        type: 'radio',
        options: ['default', 'circular', 'cube', 'linear'],
      },
      defaultValue: 'default',
      description: 'Size of the button',
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
const Template = ({ size, type }) => {
  type = type === 'default' ? 'circular' : type;
  let sizeValue = '';
  switch (size) {
    case 'small':
      sizeValue = 'sm';
      break;
    case 'medium':
      sizeValue = 'md';
      break;
    default:
      sizeValue = '';
      break;
  }

  return `
  <sdds-spinner>
  </sdds-spinner>

  `;
};

export const Basic = Template.bind({});
