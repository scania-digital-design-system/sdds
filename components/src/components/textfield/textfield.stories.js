export default {
  title: 'Component/TextField',
  argTypes: {
    placeholderText: {
      name: 'Placeholder',
      control: {
        type: 'text'
      }
    },
    type: {
      name: 'Type',
      control: {
      type: 'select',
      options: [
        'password',
        'text'
      ],
     },
    }
  },
  args: {
    placeholderText: 'Placeholder',
    type: 'text'
  }
};

const style =`<style>

.demo {
  margin-top: 20px;
}
</style>`;

const textfieldTEmplate = ({...Basic}) => {
  return `
  ${style}
  <c-theme name="scania"></c-theme>

  <h5>HTML</h5>
  <div class="demo">

    <div class="sdds-textfield-container">
      <input class="sdds-textfield-input" type="${Basic.type}" placeholder="${Basic.placeholderText}" />
      <div class="sdds-textfield-bar"></div>
    </div>

  </div>

  <h5>Web-component</h5>
  <div class="demo">

    <c-textfield class="demo" type="${Basic.type}" placeholder="${Basic.placeholderText}" ></c-textfield>
  </div>

  `
};

export const Basic = textfieldTEmplate.bind({});

Basic.args = {}

const textfieldMediumTemplate = ({...Medium}) => {
  return `
  ${style}
  <c-theme name="scania"></c-theme>

  <h5>HTML</h5>
  <div class="demo">

    <div class="sdds-textfield-container">
      <input class="sdds-textfield-input-md" type="${Medium.type}" placeholder="${Medium.placeholderText}" />
      <div class="sdds-textfield-bar"></div>
    </div>

  </div>

  <h5>Web-component</h5>
  <div class="demo">

    <c-textfield class="demo" size="md" type="${Medium.type}" placeholder="${Medium.placeholderText}" ></c-textfield>
  </div>

  `
};

export const Medium = textfieldMediumTemplate.bind({});

Medium.args = {};


const textfieldDisabledTemplate = ({...disabled}) => {
  return `
  ${style}
  <c-theme name="scania"></c-theme>
  <h5>HTML</h5>
  <div class="demo">

    <div class="sdds-textfield-container">
      <input class="sdds-textfield-input" disabled type="${disabled.type}" placeholder="${disabled.placeholderText}" />
      <div class="sdds-textfield-bar"></div>
    </div>
    <div class="sdds-textfield-container">
      <input class="sdds-textfield-input-md" disabled type="${disabled.type}" placeholder="${disabled.placeholderText}" />
      <div class="sdds-textfield-bar"></div>
    </div>
    <div class="sdds-textfield-container">
      <label class="sdds-textfield-label sdds-textfield-label-disabled">Label text</label>
      <input class="sdds-textfield-input" disabled type="${disabled.type}" placeholder="${disabled.placeholderText}" />
      <div class="sdds-textfield-bar"></div>
    </div>
  </div>

  <h5>Web-component</h5>
  <div class="demo">
    <c-textfield class="demo" type="${disabled.type}" disabled="true" placeholder="${disabled.placeholderText}" ></c-textfield>
    <c-textfield class="demo" type="${disabled.type}" disabled="true" labelinside="Label text" placeholder="${disabled.placeholderText}" ></c-textfield>
    <c-textfield class="demo" type="${disabled.type}" disabled="true" label="Label text" placeholder="${disabled.placeholderText}" ></c-textfield>
  </div>
  `
};

export const disabled = textfieldDisabledTemplate.bind({});

disabled.args = {};


const textfieldLabelInsideTemplate = ({...labelInside}) => {
  return `
  ${style}
  <c-theme name="scania"></c-theme>
  <h5>Web-component</h5>

  <div class="demo">
    <span>
      <c-textfield class="demo" type="${labelInside.type}" size="${labelInside.size == 'Medium' ? 'md' : ''}" labelinside="${labelInside.label}" placeholder="${labelInside.placeholderText}" ></c-textfield>
    </span>
  </div>

  `
};

export const labelInside = textfieldLabelInsideTemplate.bind({});

labelInside.argTypes = {
  size: {
    control: {
      type: 'select',
      options: [
        'Default',
        'Medium'
      ],
    }
  }
}

labelInside.args = {
  label: 'Label text',
  size: 'Default'
};

const textfieldLabelOutsideTemplate = ({...labelOutside}) => {
  return `
  ${style}
  <c-theme name="scania"></c-theme>
  <h5>HTML</h5>
  <div>

    <div class="sdds-textfield-container">
      <label class="sdds-textfield-label">Label</label>
      <input class="sdds-textfield-input" type="${labelOutside.type}" placeholder="${labelOutside.placeholderText}" />
      <div class="sdds-textfield-bar"></div>
    </div>
  </div>

  <h5>Web-component</h5>
  <div>
    <c-textfield class="demo" label="Label text" placeholder="${labelOutside.placeholderText}" ></c-textfield>
  </div>
  `
};

export const labelOutside = textfieldLabelOutsideTemplate.bind({});

labelOutside.args = {};


const textfieldHelperTemplate = ({...Helper}) => {
  return `
  ${style}
  <c-theme name="scania"></c-theme>
  <h5>HTML</h5>
    <div class="sdds-textfield-container">
      <input class="sdds-textfield-input" type="text" placeholder="${Helper.placeholderText}" />
      <div class="sdds-textfield-bar"></div>
      <div class="sdds-textfield-helper">${Helper.text}</div>
    </div>
  `
};

export const Helper = textfieldHelperTemplate.bind({});

Helper.args = {
  text: 'Helper text'
};



const textfieldErrorTemplate = ({...Error}) => {
  return `
  ${style}
  <c-theme name="scania"></c-theme>
  <h5>HTML</h5>
    <div class="sdds-textfield-container">
      <input class="sdds-textfield-input sdds-textfield-input-error" type="text" placeholder="${Error.placeholderText}" />
      <div class="sdds-textfield-bar sdds-textfield-bar-error"></div>
      <div class="sdds-textfield-helper sdds-textfield-helper-error">${Error.text}</div>
    </div>
  `
};

export const Error = textfieldErrorTemplate.bind({});

Error.args = {
  text: 'Error text'
};

{/* <c-textfield class="demo" error="${TextCounter.error}" helper="${TextCounter.helper}" maxlength="${TextCounter.maxlength}" type="${TextCounter.type}" size="${TextCounter.size == 'Medium' ? 'md' : ''}" labelinside="${TextCounter.label}" placeholder="${TextCounter.placeholderText}" ></c-textfield> */}

const textfieldTextCounterTemplate = ({...TextCounter}) => {
  return `
  ${style}
  <c-theme name="scania"></c-theme>
  <h5>Web-Component</h5>
  <c-textfield class="demo" error="${TextCounter.error}" helper="${TextCounter.helper}" maxlength="${TextCounter.maxlength}" type="${TextCounter.type}" size="${TextCounter.size == 'Medium' ? 'md' : ''}" labelinside="${TextCounter.label}" placeholder="${TextCounter.placeholderText}" >
    <span slot="sdds-prefix">333$</span> <span slot="sdds-suffix">3</sdds>
  </c-textfield>

  `
};

export const TextCounter = textfieldTextCounterTemplate.bind({});

TextCounter.args = {
  label: 'Label text',
  size: 'Default',
  maxlength: 20,
  helper: '',
  error: false
};

