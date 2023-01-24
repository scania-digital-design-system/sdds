import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Slider',
  argTypes: {
    min: {
      name: 'Min. value',
      description: 'Sets the minimum value for the slider.',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: {
          summary: 0,
        },
      },
    },
    max: {
      name: 'Max. value',
      description: 'Sets the maximum value for the slider.',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: {
          summary: 100,
        },
      },
    },
    initialValue: {
      name: 'Initial value',
      description: 'Sets the initial value for the slider.',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: {
          summary: 50,
        },
      },
    },
    showLabel: {
      name: 'Show label',
      description: 'Toggles if the lable should be shown or hidden.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    labelText: {
      name: 'Label text',
      description: 'Sets the text for the label.',
      control: {
        type: 'text',
      },
      if: {
        arg: 'showLabel',
        truthy: true,
      },
    },
    showTicks: {
      name: 'Show ticks',
      description: 'Toggles if ticks should be shown or hidden.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    numTicks: {
      name: 'Number of ticks',
      description: 'Sets the number of ticks to be displayed.',
      control: {
        type: 'number',
      },
      if: {
        arg: 'showTicks',
        truthy: true,
      },
      table: {
        defaultValue: {
          summary: 3,
        },
      },
    },
    showTickNumbers: {
      name: 'Show tick numbers',
      description: 'Toggles if tick numbers should be shown or hidden.',
      control: {
        type: 'boolean',
      },
      if: {
        arg: 'showTicks',
        truthy: true,
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    snapToTicks: {
      name: 'Snap to ticks',
      description: 'Snaps the scrubber to the closest tick when dragging.',
      control: {
        type: 'boolean',
      },
      if: {
        arg: 'showTicks',
        truthy: true,
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    showTooltip: {
      name: 'Show tooltip',
      description: 'Toggles if the tooltip should be shown or hidden.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    showControls: {
      name: 'Show controls (not compatible with input field)',
      description: 'Toggles if controls should be shown or hidden.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    step: {
      name: 'Step value',
      description: 'Sets the value to increment/decrement with when using controls.',
      control: {
        type: 'number',
      },
      if: {
        arg: 'showControls',
        truthy: true,
      },
      table: {
        defaultValue: {
          summary: 1,
        },
      },
    },
    showInput: {
      name: 'Show value input field (not compatible with controls)',
      description: 'Toggles if the values input field should be shown or hidden.',
      control: {
        type: 'boolean',
      },
      if: {
        arg: 'showControls',
        truthy: false,
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    small: {
      name: 'Small',
      description: 'Toggles if the small variant of the scrubber should be used.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    readonly: {
      name: 'Read Only',
      description: 'Puts the control in a read-only state.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    disabled: {
      name: 'Disabled',
      description: 'Disables the slider.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
  parameters: {
    notes: readme,
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=9649%3A20759&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=9649%3A20759&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  args: {
    min: 0,
    max: 100,
    initialValue: 50,
  },
};

const style = `
  <style>
  /* demo-wrapper is for demonstration purposes only*/
    .demo-wrapper {
      width: 80%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 100%;
      padding-top: 100px;
      padding-left: 40px;
      padding-right: 40px;
    }    
  </style>
`;

const Template = ({
  min,
  max,
  initialValue,
  showLabel,
  labelText,
  showTicks,
  numTicks,
  showTickNumbers,
  snapToTicks,
  showTooltip,
  showControls,
  step,
  showInput,
  small,
  readonly,
  disabled,
}) =>
  formatHtmlPreview(`
    ${style}
    <div class="demo-wrapper">
      <sdds-slider id="sdds-slider"
        min="${min}" 
        max="${max}" 
        ${showControls && step ? `step="${step}"` : ''}
        value="${initialValue}" 
        ${showTicks ? `ticks="${numTicks}"` : ''} 
        ${showTickNumbers ? 'show-tick-numbers' : ''} 
        ${snapToTicks ? 'snap' : ''} 
        ${showLabel ? `label="${labelText}"` : ''} 
        ${showTooltip ? 'tooltip' : ''} 
        ${showControls ? 'controls' : ''} 
        ${showInput ? 'input' : ''} 
        ${disabled ? 'disabled' : ''} 
        ${small ? 'size="sm"' : ''}
        ${readonly ? 'read-only' : ''} 
        >

      </sdds-slider>
    </div>
  `);

let sliderStoryLoaded = false;

function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  if (sliderStoryLoaded) {
    return;
  }

  sliderStoryLoaded = true;

  const slider = document.querySelector('#sdds-slider');
  if (!slider) {
    return;
  }

  /*
    @ATTENTION
    Keep in mind that storybook does stuff, so if any story control is changed,
    the page has to be reloaded for this event listener to work. Also it will only
    work in the Canvas-tab
  */

  console.log('adding slider event');

  slider.addEventListener('sliderChange', (event) => {
    console.log('Got a sliderChange event', (event as any).detail.value);
  });
});

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  initialValue: 50,
  showLabel: false,
  labelText: 'Label',
  showTicks: false,
  numTicks: 3,
  showTickNumbers: false,
  snapToTicks: false,
  showTooltip: true,
  showControls: false,
  step: 1,
  showInput: false,
  small: false,
  readonly: false,
  disabled: false,
};
