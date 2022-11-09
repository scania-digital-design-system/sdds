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
    id: {
      type: 'boolean',
      table: {
        disable: true,
      },
    },
  },
  args: {
    disabled: false,
    checked: false,
    label: 'Label',
  },
};

const Template = args =>
  formatHtmlPreview(`
    <div class="sdds-checkbox-item">
      <input class="sdds-form-input" type="checkbox" id="${args.id}" ${args.checked ? 'checked="checked"' : ''}  ${args.disabled ? 'disabled' : ''}>
      ${args.label ? `<label class="sdds-form-label" for="${args.id}" ${args.disabled && 'disabled'}>  ${args.label} </label>` : ''}
    </div>
  `);

export const Default = Template.bind({});
Default.args = {
  id: 'example-default',
};
