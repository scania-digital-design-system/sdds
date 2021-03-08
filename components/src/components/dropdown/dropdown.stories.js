import readme from './readme.md';

export default {
  title: 'Component/Dropdown',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true
      }
    },
    notes: readme
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options:['large', 'small', 'medium']
      },
      defaultValue: 'large',
      description: 'Size of the dropdown'
    },
    placeholder:{
      type:'string',
      defaultValue: 'Select option',
      description:'Placeholder text when no option is selected'
    },
    label:{
      type:'string',
      defaultValue: 'Label text',
      description:'Label text explains about dropdown'
    },
    labelPosition: {
      control: {
        type: 'select',
        options:['no-label', 'inside', 'outside']
      },
      defaultValue: 'no-label',
      description: 'Label text position'
    },
    state: {
      control: {
        type: 'select',
        options:['default', 'error']
      },
      defaultValue: 'default',
      description: 'Support error state'
    },
  }
};
  
const Template = ({size,label,disabled=false,labelPosition,helper='',state='default',placeholder}) => {
  return `
  <c-theme name="scania"></c-theme>
  
  <div class="sdds-container" style="margin-top:10rem;">
    <div class="sdds-row">
      <div class="sdds-col-xxlg-5 sdds-col-xlg-5 sdds-col-lg-5 sdds-col-md-5">
        <sdds-dropdown 
          size="${size}"
          placeholder="${placeholder}"
          disabled="${disabled}"
          label-position="${labelPosition}"
          label="${label}"
          helper="${helper}"
          state="${state}">
          <sdds-dropdown-option value="option-1">Option 1</sdds-dropdown-option>
          <sdds-dropdown-option value="option-2">Option 2</sdds-dropdown-option>
          <sdds-dropdown-option value="option-3">Option 3</sdds-dropdown-option>
        </sdds-dropdown>
      </div>
    </div>
  </div>
  `
};

export const Basic = Template.bind({});
Basic.args = {
  disabled: false
}

export const LabelInside = Template.bind({});
LabelInside.args = {
  disabled: false,
  labelPosition:'inside'
}

export const LabelOutside = Template.bind({});
LabelOutside.args = {
  disabled: false,
  labelPosition:'outside',
  label:'Label text'
}

export const Helper = Template.bind({});
Helper.args = {
  helper: 'Helper text'
}

export const Error = Template.bind({});
Error.args = {
  state: 'error',
  helper:'Error message'
}