import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Slider',
  argTypes: {
    min: {
      name: 'Min. value',
      description: 'Sets the minimum value for the slider.',
      control: {
        type: 'text',
      },
    },
    max: {
      name: 'Max. value',
      description: 'Sets the maximum value for the slider.',
      control: {
        type: 'text',
      },
    },
    initialValue: {
      name: 'Initial value',
      description: 'Sets the initial value for the slider.',
      control: {
        type: 'text',
      },
    },
    showLabel: {
      name: 'Show label',
      description: 'Toggles if the lable should be shown or hidden.',
      control: {
        type: 'boolean',
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
    },
    numTicks: {
      name: 'Number of ticks',
      description: 'Sets the number of ticks to be displayed.',
      control: {
        type: 'text',
      },
      if: {
        arg: 'showTicks',
        truthy: true,
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
    },
    showTooltip: {
      name: 'Show tooltip',
      description: 'Toggles if the tooltip should be shown or hidden.',
      control: {
        type: 'boolean',
      },
    },
    showControls: {
      name: 'Show controls (not compatible with input field)',
      description: 'Toggles if controls should be shown or hidden.',
      control: {
        type: 'boolean',
      },
    },
    step: {
      name: 'Step value',
      description: 'Sets the value to increment/decrement with when using controls.',
      control: {
        type: 'text',
      },
      if: {
        arg: 'showControls',
        truthy: true,
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
    },
    small: {
      name: 'Small',
      description: 'Toggles if the small variant of the scrubber should be used.',
      control: {
        type: 'boolean',
      },
    },
    readonly: {
      name: 'Read Only',
      description: 'Puts the control in a read-only state.',
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      name: 'Disabled',
      description: 'Disables the slider.',
      control: {
        type: 'boolean',
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
    min: '0',
    max: '100',
    initialValue: '50',
    showLabel: false,
    labelText: 'Label',
    showTicks: false,
    numTicks: '3',
    showTickNumbers: false,
    snapToTicks: false,
    showTooltip: true,
    showControls: false,
    step: '1',
    showInput: false,
    small: false,
    readonly: false,
    disabled: false,
  },
};
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

    <!-- Script tag for demo purposes -->
    <script>
    slider = document.querySelectorAll('sdds-slider')[0]

    slider.removeEventListener('sddsChange', null)
    slider.addEventListener('sddsChange', (event) => {
      console.log('Slider changed, value:', event.detail.value);
    });

    </script>
  `);

export const Default = Template.bind({});
