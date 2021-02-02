export default {
  title: 'Component/TextField'
};

const style =`<style>

.demo {
  margin-top: 20px;
}
</style>`;

const textfieldTEmplate = ({...Basic}) => {
  return `
  ${style}
  <c-theme name="scania" global="true"></c-theme>

  <div class="demo">
    Regular HTML
    <div class=sdds-textfield-container>
      <input class="sdds-textfield-input" type="text" placeholder="Placeholder" />
      <div class="sdds-textfield-bar"></div>
    </div>
    <div class=sdds-textfield-container>
      <input class="sdds-textfield-input" type="text" value="Text value" placeholder="Placeholder" />
      <div class="sdds-textfield-bar"></div>
    </div>
    <div class=sdds-textfield-container>
      <input class="sdds-textfield-input" type="password" value="password" placeholder="Placeholder" />
      <div class="sdds-textfield-bar"></div>
    </div>
  </div>

  <div class="demo">
  Web-component
    <c-textfield class="demo" placeholder="Placeholder text" ></c-textfield>
    <c-textfield class="demo" type="text" value="Text value" placeholder="Placeholder text" ></c-textfield>
    <c-textfield class="demo" type="password" value="password" placeholder="Placeholder" ></c-textfield>
  </div>

  `
};

export const Basic = textfieldTEmplate.bind({});

Basic.args = {}

const textfieldMediumTemplate = ({placeholderText}) => {
  return `
  ${style}
  <c-theme name="scania" global="true"></c-theme>
  <div class="demo">
    Regular HTML
    <div class=sdds-textfield-container>
      <input class="sdds-textfield-input-md" type="text" placeholder="${placeholderText}" />
      <div class="sdds-textfield-bar"></div>
    </div>
    <div class=sdds-textfield-container>
      <input class="sdds-textfield-input-md" type="text" value="Text value" placeholder="${placeholderText}" />
      <div class="sdds-textfield-bar"></div>
    </div>
    <div class=sdds-textfield-container>
      <input class="sdds-textfield-input-md" type="password" value="password" placeholder="${placeholderText}" />
      <div class="sdds-textfield-bar"></div>
    </div>
  </div>

  <div class="demo">
    Web-component
    <c-textfield class="demo" size="md" placeholder="${placeholderText}" ></c-textfield>
    <c-textfield class="demo" size="md" type="text" value="Text value" placeholder="${placeholderText}" ></c-textfield>
    <c-textfield class="demo" size="md" type="password" value="password" placeholder="${placeholderText}" ></c-textfield>
  </div>
  `
};

export const medium = textfieldMediumTemplate.bind({});

medium.args = {
  placeholderText: 'Placeholder'
};


const textfieldDisabledTemplate = ({placeholderText}) => {
  return `
  ${style}
  <c-theme name="scania" global="true"></c-theme>
  <div class="demo">
    Regular HTML
    <div class=sdds-textfield-container>
      <input class="sdds-textfield-input" disabled type="text" placeholder="${placeholderText}" />
      <div class="sdds-textfield-bar"></div>
    </div>
    <div class=sdds-textfield-container>
      <input class="sdds-textfield-input-md" disabled type="text" placeholder="${placeholderText}" />
      <div class="sdds-textfield-bar"></div>
    </div>
    <div class=sdds-textfield-container>
      <label class="sdds-textfield-label sdds-textfield-label-disabled">Label text</label>
      <input class="sdds-textfield-input" disabled type="text" placeholder="${placeholderText}" />
      <div class="sdds-textfield-bar"></div>
    </div>
  </div>

  <div class="demo">
    Web-component
    <c-textfield class="demo" type="text" disabled="true" placeholder="${placeholderText}" ></c-textfield>
    <c-textfield class="demo" type="text" disabled="true" labelinside="Label text" placeholder="${placeholderText}" ></c-textfield>
    <c-textfield class="demo" type="text" disabled="true" label="Label text" placeholder="${placeholderText}" ></c-textfield>
  </div>
  `
};

export const disabled = textfieldDisabledTemplate.bind({});

disabled.args = {
  placeholderText: 'Placeholder'
};


const textfieldLabelInsideTemplate = ({placeholderText}) => {
  return `
  ${style}
  <c-theme name="scania" global="true"></c-theme>
  Web-component

  <div class="demo">
    Default size
    <span>
      <c-textfield class="demo" labelinside="Label text" placeholder="${placeholderText}" ></c-textfield>
    </span>
    <span>
      <c-textfield class="demo" type="text" labelinside="Username" placeholder="${placeholderText}" value="CoolUser" ></c-textfield>
    </span>
    <span>
      <c-textfield class="demo" type="password" labelinside="Password" placeholder="${placeholderText}" value="Text input" ></c-textfield>
    </span>
  </div>
  <div class="demo">
    Medium size
    <span>
      <c-textfield class="demo" size="md" labelinside="Label text" labelinside="true" placeholder="${placeholderText}" ></c-textfield>
    </span>
    <span>
      <c-textfield class="demo" size="md" type="text" labelinside="Username" placeholder="${placeholderText}" value="CoolUser" ></c-textfield>
    </span>
    <span>
      <c-textfield class="demo" size="md" type="password" labelinside="Password" placeholder="${placeholderText}" value="Text input" ></c-textfield>
    </span>
  </div>

  `
};

export const labelInside = textfieldLabelInsideTemplate.bind({});

labelInside.args = {
  placeholderText: 'Placeholder'
};

const textfieldLabelOutsideTemplate = ({placeholderText}) => {
  return `
  ${style}
  <c-theme name="scania"></c-theme>
  <div>
    Regular HTML
    <div class=sdds-textfield-container>
      <label class="sdds-textfield-label">Label</label>
      <input class="sdds-textfield-input" type="text" value="text" placeholder="${placeholderText}" />
      <div class="sdds-textfield-bar"></div>
    </div>
    <div class=sdds-textfield-container>
    <label class="sdds-textfield-label">Label</label>
    <input class="sdds-textfield-input-md" type="text" value="text" placeholder="${placeholderText}" />
    <div class="sdds-textfield-bar"></div>
  </div>
  </div>
  <div>
    Web-component
    <c-textfield class="demo" label="Label text" placeholder="${placeholderText}" ></c-textfield>
    <c-textfield class="demo" size="md" label="Label text" label="true" placeholder="${placeholderText}" ></c-textfield>
  </div>
  `
};

export const labelOutside = textfieldLabelOutsideTemplate.bind({});

labelOutside.args = {
  placeholderText: 'Placeholder'
};


// const textfieldPrefix = ({placeholderText}) => {
//   return `
//   <c-theme name="scania" global="true"></c-theme>
//   <div class="sdds-textfield">
//     <input class="sdds-textfield-input" type="text" placeholder="${placeholderText}">
//     <label class="sdds-textfield-label-outside>label</label>
//   </div>
//   `
// };

// export const prefix = textfieldPrefix.bind({});

// prefix.args = {
//   placeholderText: 'Placeholder'
// };

// const textfieldSuffix = ({placeholderText}) => {
//   return `
//   <c-theme name="scania" global="true"></c-theme>
//   <div class="sdds-textfield">
//     <input class="sdds-textfield-input" type="text" placeholder="${placeholderText}">
//     <label class="sdds-textfield-label-outside>label</label>
//   </div>
//   `
// };

// export const suffix = textfieldSuffix.bind({});

// suffix.args = {
//   placeholderText: 'Placeholder'
// };

//Error example
//Helper example
//Counter example





