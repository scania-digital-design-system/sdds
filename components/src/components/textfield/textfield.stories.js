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

const textfieldTemplate = ({...Basic}) => {
  return `
  ${style}
  <c-theme></c-theme>

  <div class="demo">
    <sdds-textfield
      type="${Basic.type}"
      placeholder="${Basic.placeholderText}" >
    </sdds-textfield>
  </div>

  `
};

export const Basic = textfieldTemplate.bind({});

Basic.args = {}

const textfieldMediumTemplate = ({...Medium}) => {
  return `
  ${style}
  <c-theme></c-theme>

  <div class="demo">
    <sdds-textfield
     size="md"
     type="${Medium.type}"
     placeholder="${Medium.placeholderText}" >
    </sdds-textfield>
  </div>

  `
};

export const Medium = textfieldMediumTemplate.bind({});

Medium.args = {};


const textfieldDisabledTemplate = ({...disabled}) => {
  return `
  ${style}
  <c-theme></c-theme>

  <div class="demo">
    <sdds-textfield
      type="${disabled.type}"
      disabled="true"
      size="${disabled.size == 'Medium' ? 'md' : ''}"
      placeholder="${disabled.placeholderText}" >
    </sdds-textfield>
  </div>

  <div class="demo">
    <sdds-textfield
      type="${disabled.type}"
      disabled="true"
      size="${disabled.size == 'Medium' ? 'md' : ''}"
      labelinside="Label inside"
      placeholder="${disabled.placeholderText}" >
    </sdds-textfield>
  </div>
  `
};

export const disabled = textfieldDisabledTemplate.bind({});

disabled.argTypes = {
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

disabled.args = {
  size: 'Default'
};


const textfieldLabelInsideTemplate = ({...labelInside}) => {
  return `
  ${style}
  <c-theme></c-theme>

  <div class="demo">
    <sdds-textfield
      type="${labelInside.type}"
      size="${labelInside.size == 'Medium' ? 'md' : ''}"
      labelinside="${labelInside.label}"
      placeholder="${labelInside.placeholderText}" >
    </sdds-textfield>
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
  },
}

labelInside.args = {
  label: 'Label text',
  size: 'Default'
};

const textfieldLabelOutsideTemplate = ({...labelOutside}) => {
  return `
  ${style}
  <c-theme></c-theme>
  <div>
    <sdds-textfield
        size="${labelOutside.size}"
        placeholder="${labelOutside.placeholderText}" >
        <span class="sdds-textfield-label" slot="sdds-label">${labelOutside.label}</span>
    </sdds-textfield>
  </div>
  `
};

export const labelOutside = textfieldLabelOutsideTemplate.bind({});

labelOutside.argTypes = {
  size: {
    control: {
      type: 'select',
      options: [
        'Default',
        'Medium'
      ],
    }
  },
}

labelOutside.args = {
  label:'Label',
  size: 'Default'
};


const textfieldHelperTemplate = ({...Helper}) => {
  return `
  ${style}
  <c-theme></c-theme>
  <div class="demo">
    <sdds-textfield placeholder="${Helper.placeholderText}" >
      <span slot="sdds-helper">${Helper.text}</span>
    </sdds-textfield>
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
  <c-theme></c-theme>
  <div class="demo">
    <sdds-textfield 
      error="true" 
      placeholder="${Error.placeholderText}">
      <span slot="sdds-helper">${Error.helper}</span>
    </sdds-textfield>
  </div>
  `
};

export const Error = textfieldErrorTemplate.bind({});

Error.args =  {
  helper: 'Helper text'
};

const textfieldTextCounterTemplate = ({...TextCounter}) => {
  return `
  ${style}
  <c-theme></c-theme>
  <div class="demo">
    <sdds-textfield 
      error="${TextCounter.error}"
      maxlength="${TextCounter.maxlength}"
      type="${TextCounter.type}"
      size="${TextCounter.size == 'Medium' ? 'md' : ''}"
      labelinside="${TextCounter.label}"
      placeholder="${TextCounter.placeholderText}" >
    </sdds-textfield>
  </div>
  `
};

export const TextCounter = textfieldTextCounterTemplate.bind({});

TextCounter.args = {
  label: 'Label text',
  size: 'Default',
  maxlength: 20,
  helper: '',
  error: false,
  disabled:''
};

const textfieldPrefixTemplate = ({...PrefixText}) => {
  return `
  ${style}
  <c-theme></c-theme>

  <div class="demo">
    <sdds-textfield
      error="${PrefixText.error}"
      disabled="${PrefixText.disabled}"
      maxlength="${PrefixText.maxlength}"
      type="${PrefixText.type}"
      size="${PrefixText.size == 'Medium' ? 'md' : ''}"
      labelinside="${PrefixText.label}"
      placeholder="${PrefixText.placeholderText}" >
        <span class="sdds-textfield-prefix" slot="sdds-prefix">$</span>
        <span slot="sdds-helper">${PrefixText.helper}</span>
    </sdds-textfield>
  </div>

  <div class="demo">
    <sdds-textfield
      error="${PrefixText.error}"
      disabled="${PrefixText.disabled}"
      maxlength="${PrefixText.maxlength}"
      type="${PrefixText.type}"
      size="${PrefixText.size == 'Medium' ? 'md' : ''}"
      placeholder="${PrefixText.placeholderText}" >
        <label slot="sdds-label">${PrefixText.label}</label>
        <span slot="sdds-prefix">$</span>
        <span slot="sdds-helper">${PrefixText.helper}</span>
    </sdds-textfield>
  </div>

    `
  };

export const PrefixText = textfieldPrefixTemplate.bind({});

PrefixText.argTypes = {
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

PrefixText.args = {
  label: 'Label text',
  size: 'Default',
  maxlength: 20,
  helper: 'Helper text',
  error: false,
  disabled: false
};

const textfieldSuffixTemplate = ({...SuffixText}) => {
  return `
  ${style}
  <c-theme></c-theme>

  <div class="demo">
    <sdds-textfield
      error="${SuffixText.error}"
      disabled="${SuffixText.disabled}"
      maxlength="${SuffixText.maxlength}"
      type="${SuffixText.type}"
      size="${SuffixText.size == 'Medium' ? 'md' : ''}"
      labelinside="${SuffixText.label}"
      placeholder="${SuffixText.placeholderText}" >
        <span slot="sdds-suffix">$</span>
        <span slot="sdds-helper">${SuffixText.helper}</span>
    </sdds-textfield>
  </div>

  <div class="demo">
    <sdds-textfield
      error="${SuffixText.error}"
      disabled="${SuffixText.disabled}"
      maxlength="${SuffixText.maxlength}"
      type="${SuffixText.type}"
      size="${SuffixText.size == 'Medium' ? 'md' : ''}"
      placeholder="${SuffixText.placeholderText}" >
        <label slot="sdds-label">${SuffixText.label}</label>
        <span slot="sdds-suffix">$</span>
        <span slot="sdds-helper">${SuffixText.helper}</span>
    </sdds-textfield>
  </div>

    `
  };

export const SuffixText = textfieldSuffixTemplate.bind({});

SuffixText.argTypes = {
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

SuffixText.args = {
  label: 'Label text',
  size: 'Default',
  maxlength: 20,
  helper: 'Helper text',
  error: false,
  disabled: false
};


const textfieldIconTemplate = ({...Icon}) => {
  return `
  ${style}
  <c-theme></c-theme>

  <div class="demo">
    <sdds-textfield
      error="${Icon.error}"
      disabled="${Icon.disabled}"
      maxlength="${Icon.maxlength}"
      type="${Icon.type}"
      size="${Icon.size == 'Medium' ? 'md' : ''}"
      placeholder="${Icon.placeholderText}" >
        <label slot="sdds-label">${Icon.label}</label>
        <<c-icon name="scania-cross" slot="sdds-prefix"></c-icon>
        <span slot="sdds-helper">${Icon.helper}</span>
    </sdds-textfield>
  </div>

  <div class="demo">
    <sdds-textfield
      error="${Icon.error}"
      disabled="${Icon.disabled}"
      maxlength="${Icon.maxlength}"
      type="${Icon.type}"
      size="${Icon.size == 'Medium' ? 'md' : ''}"
      placeholder="${Icon.placeholderText}" >
        <label slot="sdds-label">${Icon.label}</label>
        <c-icon name="scania-cross" slot="sdds-suffix"></c-icon>
        <span slot="sdds-helper">${Icon.helper}</span>
    </sdds-textfield>
  </div>

    `
  };

export const Icon = textfieldIconTemplate.bind({});

Icon.argTypes = {
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

Icon.args = {
  label: 'Label text',
  size: 'Default',
  maxlength: 20,
  helper: 'Helper text',
  error: false,
  disabled: false
};