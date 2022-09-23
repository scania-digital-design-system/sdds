export default {
  title: 'Component/Radio Button',
};

const Template = () => `
    <div class="sdds-radio-button-group">
      <div class="sdds-radio-item">
        <input class="sdds-form-input" type="radio" name="rb-example" id="rb-option-1">
        <label class="sdds-form-label" for="rb-option-1">
          Label Text 1
        </label>
      </div>
      <div class="sdds-radio-item">
        <input class="sdds-form-input" type="radio" name="rb-example" id="rb-option-2">
        <label class="sdds-form-label" for="rb-option-2">
          Label Text 2
        </label>
      </div>
      <div class="sdds-radio-item">
        <input class="sdds-form-input" type="radio" name="rb-example-disabled" id="rb-option-3" checked="checked" disabled>
        <label class="sdds-form-label" for="rb-option-3">
          Label Text 3
        </label>
      </div>
      <div class="sdds-radio-item">
        <input class="sdds-form-input" type="radio" name="rb-example-disabled" id="rb-option-4" disabled>
        <label class="sdds-form-label" for="rb-option-4">
          Label Text 4
        </label>
      </div>
    </div>
    `;

export const Basic = Template.bind({});

Basic.args = {};
