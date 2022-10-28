import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Toggle',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      name: 'Size',
      control: {
        type: 'radio',
        options: ['default', 'small'],
      },
      defaultValue: 'radio',
      description: 'Size of the toggle',
    },
    headline: {
      name: 'Headline',
      description: 'Optional value to be used to clarify what the toggle is switching on / off',
    },
    disabled: {
      name: 'Disabled',
      description: 'Should it be disabled?',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
  args: {
    headline: '',
  },
};

const Template = ({ size, disabled = false, headline = '' }) => {
  let sizeValue = '';
  switch (size) {
    case 'small':
      sizeValue = 'sdds-toggle-sm';
      break;
    default:
      sizeValue = '';
      break;
  }

  const headlineDiv = headline.length > 0 ? `<div class="sdds-toggle-headline">${headline}</div>` : '';

  return formatHtmlPreview(`
      <div class="sdds-toggle ${sizeValue} ${disabled ? 'disabled' : ''}" tabindex="0">
        ${headlineDiv}
        <input type="checkbox" class="sdds-toggle-input" id="customSwitch1">
        <span class="sdds-toggle-switch"></span>
        <label class="sdds-toggle-label" for="customSwitch1">Toggle this switch element</label>
      </div>
  `);
};

export const Default = Template.bind({});
Default.args = {};

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
  disabled: true,
};
