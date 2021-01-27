export default {
  title: 'Component/TextField'
};

const textfieldTEmplate = ({placeholderText}) => {
  return `
  <c-theme name="scania" global="true"></c-theme>
  <input class="sdds-textfield-input" type="text" placeholder="${placeholderText}">
  `
};

export const Basic = textfieldTEmplate.bind({});

Basic.args = {
  placeholderText: 'Placeholder text'
}



const textfieldMediumTemplate = ({placeholderText}) => {
  return `
  <c-theme name="scania" global="true"></c-theme>
  <input class="sdds-textfield-input-md" type="text" placeholder="${placeholderText}">
  `
};

export const medium = textfieldMediumTemplate.bind({});

medium.args = {
  placeholderText: 'Placeholder text'
};


const textfieldLabelInsideTemplate = ({placeholderText}) => {
  return `
  <c-theme name="scania" global="true"></c-theme>
  <div class="sdds-textfield">
    <input class="sdds-textfield-input" type="text" placeholder="${placeholderText}">
    <label class="sdds-textfield-label-inside>label</label>
  </div>
  `
};

export const labelInside = textfieldLabelInsideTemplate.bind({});

labelInside.args = {
  placeholderText: 'Placeholder text'
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
  placeholderText: 'Placeholder text'
};



const textfieldPrefix = ({placeholderText}) => {
  return `
  <c-theme name="scania" global="true"></c-theme>
  <div class="sdds-textfield">
    <input class="sdds-textfield-input" type="text" placeholder="${placeholderText}">
    <label class="sdds-textfield-label-outside>label</label>
  </div>
  `
};

export const prefix = textfieldPrefix.bind({});

prefix.args = {
  placeholderText: 'Placeholder text'
};


const textfieldSuffix = ({placeholderText}) => {
  return `
  <c-theme name="scania" global="true"></c-theme>
  <div class="sdds-textfield">
    <input class="sdds-textfield-input" type="text" placeholder="${placeholderText}">
    <label class="sdds-textfield-label-outside>label</label>
  </div>
  `
};

export const suffix = textfieldSuffix.bind({});

suffix.args = {
  placeholderText: 'Placeholder text'
};






