export default {
  title: 'Component/TextField'
};

const style =`<style>
body {
  background-color: var(--sdds-grey-100);
}

.demo {
  // margin: 40px;
}
</style>`;

const textfieldTEmplate = ({...Basic}) => {
  return `
  ${style}
  <c-theme name="scania" global="true"></c-theme>

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

  <c-textfield class="demo" placeholder="Placeholder text" ></c-textfield>
  <c-textfield class="demo" type="text" value="Text value" placeholder="Placeholder text" ></c-textfield>
  <c-textfield class="demo" type="password" value="password" placeholder="Placeholder" ></c-textfield>

  `
};

export const Basic = textfieldTEmplate.bind({});

Basic.args = {
}



const textfieldMediumTemplate = ({placeholderText}) => {
  return `
  ${style}
  <c-theme name="scania" global="true"></c-theme>
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

  <c-textfield class="demo" size="md" placeholder="${placeholderText}" ></c-textfield>
  <c-textfield class="demo" size="md" type="text" value="text value" placeholder="${placeholderText}" ></c-textfield>
  <c-textfield class="demo" size="md" type="password" value="password" placeholder="${placeholderText}" ></c-textfield>

  `
};

export const medium = textfieldMediumTemplate.bind({});

medium.args = {
  placeholderText: 'Placeholder text'
};


const textfieldDisabledTemplate = ({placeholderText}) => {
  return `
  ${style}
  <c-theme name="scania" global="true"></c-theme>
  <input class="sdds-textfield-input" disabled type="text" placeholder="${placeholderText}">
  <input class="sdds-textfield-input-md" disabled type="text" placeholder="${placeholderText}">
  <c-textfield class="demo" type="text" disabled="true" placeholder="${placeholderText}" ></c-textfield>
  <c-textfield class="demo" size="md" type="text" disabled="true" placeholder="${placeholderText}" ></c-textfield>

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
  <c-textfield class="demo" labelinside="Label text" placeholder="${placeholderText}" ></c-textfield>
  <c-textfield class="demo" type="text" labelinside="Username" placeholder="${placeholderText}" value="CoolUser" ></c-textfield>
  <c-textfield class="demo" type="password" labelinside="Password" placeholder="${placeholderText}" value="Text input" ></c-textfield>
  <c-textfield class="demo" size="md" labelinside="Label text" labelinside="true" placeholder="${placeholderText}" ></c-textfield>
  <c-textfield class="demo" size="md" type="text" labelinside="Username" placeholder="${placeholderText}" value="CoolUser" ></c-textfield>
  <c-textfield class="demo" size="md" type="password" labelinside="Password" placeholder="${placeholderText}" value="Text input" ></c-textfield>
  `
};

export const labelInside = textfieldLabelInsideTemplate.bind({});

labelInside.args = {
  placeholderText: 'Placeholder'
};

const textfieldLabelOutsideTemplate = ({placeholderText}) => {
  return `
  <c-theme name="scania" global="true"></c-theme>
  <div class="sdds-textfield">
    <input class="sdds-textfield-input" type="text" placeholder="${placeholderText}">
    <label class="sdds-textfield-label-outside>label</label>
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






