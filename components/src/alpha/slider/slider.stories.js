export default {
  title: 'Pre-Alpha/Slider',
  type: {
    control: {
      type: 'radio',
      options: ['default', 'basic', 'continuousValue', 'dualPoint'],
    },
    defaultValue: 'default',
    description: 'Type of slider',
  },
  min: {
    control: {
      type: 'number',
    },
    defaultValue: 'default',
    description: 'Minimum value of slider',
  },
  max: {
    control: {
      type: 'number',
    },
    defaultValue: 'default',
    description: 'Maximum value of the slider',
  },
  value: {
    control: {
      type: 'number',
    },
    defaultValue: 'default',
    description: 'Value of the thumb',
  },
  valueTwo: {
    control: {
      type: 'number',
    },
    defaultValue: 'default',
    description: 'Value for the second rane',
  },
};

const Template = ({ type, min, max, value, valueTwo }) => {
  type = type === 'default' ? 'basic' : type;
  return `
  <sdds-slider type="${type}" min="${min}" max="${max}" value="${value}" value-two="${valueTwo}">
  </sdds-slider>
  `;
};

export const Basic = Template.bind({});
Basic.args = {
  type: 'basic',
  min: '0',
  max: '200',
  value: '100',
};

export const ContinuousValue = Template.bind({});
ContinuousValue.args = {
  type: 'continuousValue',
  min: '0',
  max: '200',
  value: '100',
};
export const DualPoint = Template.bind({});
DualPoint.args = {
  type: 'dualPoint',
  min: '0',
  max: '200',
  value: '100',
  valueTwo: '200',
};
