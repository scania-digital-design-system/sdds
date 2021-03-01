export default {
    title: 'Component/Dropdown',
    argTypes: {
      size: {
        control: {
          type: 'select',
          options:['large', 'small', 'medium']
        },
        defaultValue: 'large',
        description: 'Size of the dropdown'
      },
      label:{
        type:'string',
        defaultValue: 'Select option',
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
  
  const Template = ({size,label,disabled=false,labelPosition,helper='',state='default'}) => {
    return `
    <c-theme name="scania"></c-theme>
    <sdds-dropdown 
      size="${size}"
      label="${label}"
      disabled="${disabled}"
      label-position="${labelPosition}"
      helper="${helper}"
      state="${state}">
      <sdds-dropdown-option value="option-1">Option 1</sdds-dropdown-option>
      <sdds-dropdown-option value="option-2">Option 2</sdds-dropdown-option>
      <sdds-dropdown-option value="option-3">Option 3</sdds-dropdown-option>
    </sdds-dropdown>
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
    labelPosition:'outside'
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