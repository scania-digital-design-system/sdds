export default {
    title: 'Component/Dropdown'
  };
  
  const Template = ({disabled=false}) => {
    return `
    <c-theme name="scania"></c-theme>
    <sdds-dropdown label="Select option" disabled="${disabled}">
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