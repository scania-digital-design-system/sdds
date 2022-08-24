const style = `
  <style>
    .storybook-slider-wrapper {
      width: 100%;
      top: 200px;
      position: relative;
      margin: 0 auto;
      padding-top: 200px;
      padding-bottom: 200px;
      background-color: transparent;
      padding-left: 40px;
      padding-right: 40px;
    }
    .storybook-slider-wrapper.sdds-on-white-bg {
      background-color: #fff;
    }
  </style>
`;

export default {
  title: 'Component/Slider',
  parameters: {},
  argTypes: {
    initialValue: {
      name: 'Initial value',
      description: 'Initial value for slider',
      control: {
        type: 'text',
      },
    },
    min: {
      name: 'Min. value',
      description: 'Minimum value',
      control: {
        type: 'text',
      },
    },
    max: {
      name: 'Max. value',
      description: 'Maximum value',
      control: {
        type: 'text',
      },
    },
    showLabel: {
      name: 'Show label',
      description: 'Show or hide label',
      control: {
        type: 'boolean',
      },
    },
    labelText: {
      name: 'Label text',
      description: 'Text for label',
      control: {
        type: 'text',
      },
    },
    showTooltip: {
      name: 'Show tooltip',
      description: 'Show or hide tooltip',
      control: {
        type: 'boolean',
      },
    },
    showDividers: {
      name: 'Show dividers',
      description: 'Show or hide dividers',
      control: {
        type: 'boolean',
      },
    },
    numDividers: {
      name: 'Number of dividers',
      description: 'Set the number of dividers to display',
      control: {
        type: 'text',
      },
    },
    showDividerNumbers: {
      name: 'Show divider numbers',
      description: 'Show or hide divider numbers',
      control: {
        type: 'boolean',
      },
    },
    showControls: {
      name: 'Show controls',
      description: 'Show or hide controls',
      control: {
        type: 'boolean',
      },
    },
    step: {
      name: 'Step value',
      description: 'Value to increment/decrease when using controls',
      control: {
        type: 'text',
      },
    },
    showInput: {
      name: 'Show value input field',
      description: 'Show or hide value input field',
      control: {
        type: 'boolean',
      },
    },
    colorTheme: {
      name: 'Color theme',
      description: 'Display a different color theme',
      control: {
        type: 'radio',
        options: ['On-grey', 'On-white'],
      },
    },
    disabled: {
      name: 'Disabled',
      description: 'Put control in disabled state',
      control: {
        type: 'boolean',
      },
    },
  },
};

const ComponentSlider = ({ ...Basic }) => {
  let classes = '';

  switch (Basic.colorTheme) {
    case 'On-white':
      classes = 'sdds-on-white-bg';
      break;
    default:
      break;
  }

  return `
    ${style}
    <div class="storybook-slider-wrapper ${classes}">
      <sdds-slider 
        min="${Basic.min}" 
        max="${Basic.max}" 
        step="${Basic.step}" 
        value="${Basic.initialValue}" 
        ${Basic.showDividers && 'dividers="' + Basic.numDividers + '"'} 
        ${Basic.showDividerNumbers && 'show-divider-numbers'} 
        ${Basic.showLabel && 'label="' + Basic.labelText + '"'} 
        ${Basic.showTooltip && 'tooltip'} 
        ${Basic.showControls && 'controls'} 
        ${Basic.showInput && 'input'} 
        ${Basic.disabled && 'disabled'} 
        class="${classes}"
        >

      </sdds-slider>
    </div>
  `;
};

export const Basic = ComponentSlider.bind({});
Basic.args = {
  initialValue: '50',
  showLabel: false,
  labelText: 'Label',
  showTooltip: true,
  showDividers: false,
  numDividers: '3',
  showDividerNumbers: false,
  showControls: false,
  showInput: false,
  min: '0',
  max: '100',
  step: '1',
  colorTheme: 'On-grey',
  disabled: false,
};
