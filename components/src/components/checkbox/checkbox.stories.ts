export default {
  title: 'Components/Checkbox/Native',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      name: 'Disabled',
      description: 'Disables the checkbox',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    checked: {
      name: 'Checked',
      description: 'Checks the checkbox',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    label: {
      name: 'Label',
      description: 'The label of the component',
      defaultValue: 'Label',
      type: 'string',
    },
  },
};

const Template = args => `
        <div class="sdds-checkbox-item">
          ${args.label && `<label class="sdds-form-label" for="cb-option-2">  ${args.label} </label>`}
          <input class="sdds-form-input" type="checkbox" ${args.checked && `checked="checked"`}  ${args.disabled && 'disabled'}>
        </div>
      `;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
};
