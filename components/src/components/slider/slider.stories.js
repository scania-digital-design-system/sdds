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
    valueTwo: {
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
width: 200px;
}
</style>`;
const Template = ({ type, min, max, value, valueTwo }) => {
  type = type === 'default' ? 'basic' : type;
  return `
  ${style}
  <sdds-theme></sdds-theme>
  <div class="demo">
  <sdds-slider  type="${type}" min="${min}" max="${max}" value="${value}" value-two="${valueTwo}" >
    
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
  max: '200',
  value: '100'
};
export const dualPoint = Template.bind({});
dualPoint.args = {
  type: 'dualPoint',
  min: '0',
  max: '200',
  value: '100',
  valueTwo: '200'
};
