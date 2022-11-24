import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Checkbox',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      name: 'Disabled',
      description: 'Disables the checkbox',
      control: {
        type: 'boolean',
      },
    },
    checked: {
      name: 'Checked',
      description: 'Checks the checkbox',
      control: {
        type: 'boolean',
      },
    },
    label: {
      name: 'Label text',
      description: 'The label of the component',
      type: 'string',
    },
  },
  args: {
    disabled: false,
    checked: false,
    label: 'Label',
  },
};

const Template = ({ checked, disabled, label }) =>
  formatHtmlPreview(`
    <div class="sdds-checkbox-item">
      <input class="sdds-form-input" type="checkbox" id="unique-id" ${
        checked ? 'checked="checked"' : ''
      }  ${disabled ? 'disabled' : ''}>
      ${
        label
          ? `<label class="sdds-form-label" for="unique-id" ${
              disabled ? 'disabled' : ''
            }>  ${label} </label>`
          : ''
      }
    </div>
  `);

export const Default = Template.bind({});
