export default {
  title: 'Component/Slider',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['default', 'basic', 'continuousValue', 'dualPoint']
      },
      defaultValue: 'default',
      description: 'Type of slider'
    },
    min: {
      control: {
        type: 'number'
      },
      defaultValue: 'default',
      description: 'Minimum value of slider'
    },
    max: {
      control: {
        type: 'number'
      },
      defaultValue: 'default',
      description: 'Maximum value of the slider'
    },
    value: {
      control: {
        type: 'number'
      },
      defaultValue: 'default',
      description: 'Value of the thumb'
    },
    value2: {
      control: {
        type: 'number'
      },
      defaultValue: 'default',
      description: 'Value for the second rane'
    }
  }
};

const style = `<style>
  
.demo {
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
background-color:  #F6F6F7; 
height: 200px;
width: 200px;
}
</style>`;
const Template = ({ type, min, max, value, value2 }) => {
  type = type === 'default' ? 'basic' : type;

  return `
  ${style}
  <sdds-theme></sdds-theme>
  <div class="demo">
  <sdds-slider  type="${type}" min="${min}" max="${max}" value="${value}" value2="${value2}" >
    
  </sdds-slider>
  </div>

  `;
};

export const Basic = Template.bind({});
Basic.args = {
  type: 'basic',
  min: '0',
  max: '200',
  value: '100'
};

export const continuousValue = Template.bind({});
continuousValue.args = {
  type: 'continuousValue',
  min: '0',
  max: '100',
  value: '0'
};
export const dualPoint = Template.bind({});
dualPoint.args = {
  type: 'dualPoint',
  min: '0',
  max: '200',
  value: '100',
  value2: '200'
};
