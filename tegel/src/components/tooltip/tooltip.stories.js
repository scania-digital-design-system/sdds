export default {
  title: 'Components/Tooltip',
  parameters: {
    layout: 'centered',
    // docs: { inlineStories: false, iframeHeight: 250 },
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

const ComponentTooltip = ({ ...Default }) => `
   <sdds-tooltip 
      placement="${Default.tooltipPosition}" 
      selector="#button-1" 
      text="${Default.text}" 
      mouse-over-tooltip="${Default.mouseOverTooltip}"/>
      <p>Paragraph tag inside of Tooltip with <b>bold</b> and <i>italic</i> tags too.</p>
    </sdds-tooltip>
    <sdds-button size= 'sm' id="button-1" text='Hover me'></sdds-button>
  `;

export const Default = ComponentTooltip.bind({});
