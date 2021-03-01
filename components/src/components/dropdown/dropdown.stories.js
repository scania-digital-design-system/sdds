export default {
    title: 'Component/Dropdown',
    argTypes: {
      labelPosition: {
        control: {
          type: 'select',
          options:['no-label', 'inside', 'outside']
        },
        defaultValue: 'no-label',
        description: 'Label text position'
      },
    }
  };
  
  const Template = ({disabled=false,labelPosition='no-label'}) => {
    return `
    <c-theme name="scania"></c-theme>
    <sdds-dropdown label="Select option" disabled="${disabled}" label-position="${labelPosition}">
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