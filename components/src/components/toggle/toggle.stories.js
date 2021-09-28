export default {
  title: 'Component/Toggles',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['default', 'small'],
      },
      defaultValue: 'default',
      description: 'Size of the toggle',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    headline: {
      description:
        'Optional value to be used to clarify what the toggle is switching on / off',
    },
    disabled: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    headline: '',
  },
};

const Template = ({ size, disabled = '', headline = '' }) => {
  let sizeValue = '';
  switch (size) {
    case 'small':
      sizeValue = 'sdds-toggle-sm';
      break;
    default:
      sizeValue = '';
      break;
  }

  let headlineDiv =
    headline.length > 0
      ? `<div class="sdds-toggle-headline">${headline}</div>`
      : '';
  return `
    <style>
    .demo-container{
      width: 500px;
    }
    .demo-toggle {
      margin: 5rem 2rem;
    }
    </style>
    <sdds-theme></sdds-theme>
    <div class="demo-container">
      <div class="demo-toggle sdds-toggle ${sizeValue} ${disabled}" tabindex="0">
        ${headlineDiv}
        <input type="checkbox" class="sdds-toggle-input" id="customSwitch1">
        <span class="sdds-toggle-switch"></span>
        <label class="sdds-toggle-label" for="customSwitch1">Toggle this switch element</label>
      </div>
      <div class="demo-toggle sdds-toggle ${sizeValue} ${disabled}" tabindex="1">
        <input type="checkbox" checked="checked" class="sdds-toggle-input" id="customSwitch2">
        <span class="sdds-toggle-switch"></span>
        <label class="sdds-toggle-label" for="customSwitch2">Toggle this switch element</label>
      </div>
    </div>
  `;
};

export const Basic = Template.bind({});
Basic.args = {};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Headline = Template.bind({});
Headline.args = {
  headline: 'Headline',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: 'disabled',
};
