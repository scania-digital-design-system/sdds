import readme from './readme.md';

export default {
  title: 'Components/Tooltip',
  parameters: {
    layout: 'centered',
    notes: readme,
    docs: {
      source: {
        state: 'closed',
      },
    },
  },

  argTypes: {
    tooltipPosition: {
      name: 'Tooltip position',
      control: {
        type: 'select',
        options: ['Bottom-start', 'Bottom', 'Bottom-end', 'Top-start', 'Top', 'Top-end', 'Left-start', 'Left', 'Left-end', 'Right-start', 'Right', 'Right-end'],
      },
      description: 'Position of the tooltip',
    },
    text: {
      name: 'Tooltip text',
      description: 'Text that will be displayed inside tooltip',
      control: {
        type: 'text',
      },
    },
    mouseOverTooltip: {
      name: 'Open while hovering over tooltip',
      control: 'boolean',
      description: 'Keep the tooltip visible as long as the mouse hover over it',
    },
  },
  args: {
    tooltipPosition: 'Bottom',
    text: 'Text inside tooltip',
    mouseOverTooltip: true,
  },
};

const positionLookup = {
  'Bottom-start': 'bottom-start',
  'Bottom': 'bottom',
  'Bottom-end': 'bottom-end',
  'Top-start': 'top-start',
  'Top': 'top',
  'Top-end': 'top-end',
  'Left-start': 'left-start',
  'Left': 'left',
  'Left-end': 'left-end',
  'Right-start': 'right-start',
  'Right': 'right',
  'Right-end': 'right-end',
};

const ComponentTooltip = ({ tooltipPosition, mouseOverTooltip, text }) => `
   <div class='demo-wrapper'>
   <sdds-tooltip 
      placement="${positionLookup[tooltipPosition]}" 
      selector="#button-1" 
      text="${text}" 
      mouse-over-tooltip="${mouseOverTooltip}">
      <p> Paragraph tag inside of Tooltip with <b>bold</b> and <i>italic</i> tags too. </p>
    </sdds-tooltip>
    <sdds-button size= 'sm' id="button-1" text='Hover me'></sdds-button></div>

    <style> 
    .demo-wrapper{ 
      height: 200px; 
      display: flex; 
      justify-content: center; 
      align-items: center; 
    } 
    </style>
  `;

export const Default = ComponentTooltip.bind({});
