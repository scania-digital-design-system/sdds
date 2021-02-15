export default {
  title: 'Component/Toggles'
};

const Template = () => {
  return `
    <style>
    .demo-toggle {
      margin: 2rem;
    }
    </style>
    <c-theme name="scania"></c-theme>
    <div class="demo-toggle sdds-toggle">
      <input type="checkbox" class="sdds-toggle-input" id="customSwitch1">
      <span class="sdds-toggle-switch"></span>
      <label class="sdds-toggle-label" for="customSwitch1">Toggle this switch element</label>
    </div>
    <div class="demo-toggle sdds-toggle">
      <input type="checkbox" class="sdds-toggle-input" id="customSwitch2">
      <span class="sdds-toggle-switch"></span>
      <label class="sdds-toggle-label" for="customSwitch2">Toggle this switch element</label>
    </div>
  `
};

export const Basic = Template.bind({});

Basic.args = {}