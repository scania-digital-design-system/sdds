import { formatHtmlPreview } from '../../utils/utils';

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
    id: {
      type: 'boolean',
      table: {
        disable: true,
      },
    },
  },
};

const Template = args => {
  console.log(args);
  return formatHtmlPreview(`
    <div class="sdds-checkbox-item">
      <input class="sdds-form-input" type="checkbox" id="${args.id}" ${args.checked ? 'checked="checked"' : ''}  ${args.disabled ? 'disabled' : ''}>
      ${args.label ? `<label class="sdds-form-label" for="${args.id}" ${args.disabled && 'disabled'}>  ${args.label} </label>` : ''}
    </div>
  `);
};

export const Default = Template.bind({});
Default.args = {
  id: 'example-default',
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'example-disabled',
  disabled: true,
};
export const Checked = Template.bind({});
Checked.args = {
  id: 'example-checked',
  checked: true,
};
