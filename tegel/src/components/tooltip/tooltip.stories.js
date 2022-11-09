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
        options: {
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
        },
      },
      defaultValue: 'bottom',
      description: 'Position of the tooltip',
    },
    text: {
      name: 'Tooltip text',
      defaultValue: 'Text inside tooltip',
      description: 'Text that will be displayed inside tooltip',
      control: {
        type: 'text',
      },
    },
    mouseOverTooltip: {
      name: 'Open while hovering over tooltip',
      control: 'boolean',
      defaultValue: true,
      description: 'Keep the tooltip visible as long as the mouse hover over it',
    },
  },
};

const ComponentTooltip = ({ tooltipPosition, mouseOverTooltip, text }) => `
   <div class='demo-wrapper'>
   <sdds-tooltip 
      placement="${tooltipPosition}" 
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
