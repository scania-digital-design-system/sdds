import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Slider',
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
      if: {
        arg: 'showLabel',
        truthy: true,
      },
    },
    showTooltip: {
      name: 'Show tooltip',
      description: 'Show or hide tooltip',
      control: {
        type: 'boolean',
      },
    },
    showTicks: {
      name: 'Show ticks',
      description: 'Show or hide ticks',
      control: {
        type: 'boolean',
      },
    },
    numTicks: {
      name: 'Number of ticks',
      description: 'Set the number of ticks to display',
      control: {
        type: 'text',
      },
      if: {
        arg: 'showTicks',
        truthy: true,
      },
    },
    snapToTicks: {
      name: 'Snap to ticks',
      description: 'Snap the scrubber to the closest tick when dragging',
      control: {
        type: 'boolean',
      },
      if: {
        arg: 'showTicks',
        truthy: true,
      },
    },
    showTickNumbers: {
      name: 'Show tick numbers',
      description: 'Show or hide tick numbers',
      control: {
        type: 'boolean',
      },
      if: {
        arg: 'showTicks',
        truthy: true,
      },
    },
    showControls: {
      name: 'Show controls (not compatible with input field)',
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
      if: {
        arg: 'showControls',
        truthy: true,
      },
    },
    showInput: {
      name: 'Show value input field (not compatible with controls)',
      description: 'Show or hide value input field',
      control: {
        type: 'boolean',
      },
      if: {
        arg: 'showControls',
        truthy: false,
      },
    },
    disabled: {
      name: 'Disabled',
      description: 'Put control in disabled state',
      control: {
        type: 'boolean',
      },
    },
    readonly: {
      name: 'Read Only',
      description: 'Put control in read-only state',
      control: {
        type: 'boolean',
      },
    },
    small: {
      name: 'Small',
      description: 'Use small variant',
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
    initialValue: '50',
    showLabel: false,
    labelText: 'Label',
    showTooltip: true,
    showTicks: false,
    numTicks: '3',
    showTickNumbers: false,
    showControls: false,
    showInput: false,
    min: '0',
    max: '100',
    step: '1',
    disabled: false,
    small: false,
    snapToTicks: false,
    readonly: false,
  },
};
const Template = ({
  initialValue,
  min,
  max,
  showLabel,
  labelText,
  showTooltip,
  showTicks,
  numTicks,
  showTickNumbers,
  snapToTicks,
  showControls,
  step,
  showInput,
  disabled,
  readonly,
  small,
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
