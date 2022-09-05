export default {
  title: 'Utilities/FormTest',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = ({ topPart = false }) => `

<div class="sdds-container">
  <div class="sdds-row">
    <div
      class="sdds-col-xs-12 sdds-col-sm-12 sdds-col-md-12 sdds-col-lg-12 sdds-col-xl-12 sdds-col-xxl-12 sdds-col-max-12"
    >
      <h1>Form Example</h1>
    </div>
    <div
      class="sdds-col-xs-12 sdds-col-sm-12 sdds-col-md-6 sdds-col-lg-3 sdds-col-xl-3 sdds-col-xxl-3 sdds-col-max-3"
    >
      <form id="form-sdds" class="form">
        <sdds-textfield
          name="user"
          type="text"
          value="username"
        ></sdds-textfield>

        <sdds-textfield
          name="pw"
          type="password"
          value="a-unique-password"
        ></sdds-textfield>
        
        <div class="sdds-checkbox-item">
          <input
            name="checkbox"
            class="sdds-form-input"
            checked
            type="checkbox"
          />
          <label class="sdds-form-label" for="radio-button1">
            Checkbox
          </label>
        </div>

        <div class="sdds-radio-button-group">
          <div class="sdds-radio-item">
            <input
              class="sdds-form-input"
              type="radio"
              checked
              name="radio-button"
            />
            <label class="sdds-form-label" for="radio-button1">
              Radiobutton
            </label>
          </div>
        </div>

        <div class="sdds-dropdown">
          <select name="dropdown" id="mySelect">
            <option value="truck">Truck</option>
            <option value="bus">Bus</option>
          </select>
        </div>

        <div>
          <input
            class="sdds-btn sdds-btn-primary sdds-btn-sm"
            type="submit"
          />
        </div>
      </form>
    </div>

    <div
      class="sdds-col-xs-12 sdds-col-sm-12 sdds-col-md-6 sdds-col-lg-3 sdds-col-xl-3 sdds-col-xxl-3 sdds-col-max-3"
    >
      <form id="form-vanilla" class="form2">
        <div>
          <input type="text" name="user" value="username" />
        </div>
        <div>
          <input type="password" name="password" value="a-unique-password" />
        </div>
        <select name="dropdown">
          <option value="truck">Truck</option>
          <option value="bus">Bus</option>
        </select>

        <div>
          <input type="radio" checked name="radio-button" />
          <label> Radiobutton </label>
        </div>

        <div>
          <input name="checkbox" checked type="checkbox" />
          <label> Checkbox </label>
        </div>
        <div>
          <input class="sdds-btn sdds-btn-primary" type="submit" />
        </div>
      </form>
    </div>
  </div>
</div>

<div class="show-data">

</div>
`;

export const Basic = Template.bind({});

console.log('scripts');

function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

let loaded = false;

ready(function () {
  if (loaded) {
    return;
  }

  loaded = true;

  const formSdds = document.querySelector('#form-sdds');
  const formVanilla = document.querySelector('#form-vanilla');

  formSdds.addEventListener('submit', (event) => {
    console.log('submitting SDDS form');
    event.preventDefault();
    event.stopPropagation();
    console.log(event);

    const formData = new FormData(formSdds);
    console.log(...formData);
  });

  formVanilla.addEventListener('submit', (event) => {
    console.log('submitting vanilla form');
    event.preventDefault();
    event.stopPropagation();
    console.log(event);

    const formData = new FormData(formVanilla);
    console.log(...formData);
  });
});
