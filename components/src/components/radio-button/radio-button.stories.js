import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Radio Button',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      name: 'Label',
      description: 'The label for the radio button',
      defaultValue: 'Label text',
      controls: {
        type: 'string',
      },
    },
    disabled: {
      name: 'Disabled',
      description: 'Disables the radio button',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    checked: {
      name: 'Checked',
      description: 'Marks the radio button as checked',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = args =>
  formatHtmlPreview(`
   <div class="sdds-radio-button-group">
   <div class="sdds-radio-item">
     <input class="sdds-form-input" type="radio" name="rb-example" id="rb-option-1" checked="" ${args.disabled ? 'disabled' : ''}>
     <label class="sdds-form-label" for="rb-option-1">
       ${args.label} 1
     </label>
   </div>
 </div>
 <div class="sdds-radio-button-group">
   <div class="sdds-radio-item">
     <input class="sdds-form-input" type="radio" name="rb-example" id="rb-option-1" ${args.checked ? 'checked="checked"' : ''} >
     <label class="sdds-form-label" for="rb-option-1">
       ${args.label} 2
     </label>
   </div>

   </div>
`);

export const Default = Template.bind({});
Default.args = {
  label: 'Label Text',
};
