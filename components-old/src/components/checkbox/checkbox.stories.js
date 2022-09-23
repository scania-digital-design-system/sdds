export default {
  title: 'Component/Checkbox',
};

const Template = () => `
      <div>
        <div class="sdds-checkbox-item">
          <input class="sdds-form-input" type="checkbox" name="cb-example" id="cb-option-1">
          <label class="sdds-form-label" for="cb-option-1">
            Label Text 1
          </label>
        </div>
        <div class="sdds-checkbox-item">
          <input class="sdds-form-input" type="checkbox" name="cb-example" id="cb-option-2">
          <label class="sdds-form-label" for="cb-option-2">
            Label Text 2
          </label>
        </div>
        <div class="sdds-checkbox-item">
          <input class="sdds-form-input" type="checkbox" name="cb-example" id="cb-option-3" checked="checked" disabled>
          <label class="sdds-form-label" for="cb-option-3">
            Label Text 3
          </label>
        </div>
        <div class="sdds-checkbox-item">
          <input class="sdds-form-input" type="checkbox" name="cb-example" id="cb-option-4" disabled>
          <label class="sdds-form-label" for="cb-option-4">
            Label Text 4
          </label>
        </div>
      </div>
      `;

export const Basic = Template.bind({});

Basic.args = {};
