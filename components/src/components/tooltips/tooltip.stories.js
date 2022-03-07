export default {
  title: 'Component/Tooltip',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    tooltipPosition: {
      control: {
        type: 'radio',
        options: [
          'bottom-start',
          'bottom',
          'bottom-end',
          'top-start',
          'top',
          'top-end',
          'left-start',
          'left',
          'left-end',
          'right-start',
          'right',
          'right-end',
        ],
      },
      defaultValue: 'bottom',
      description: 'Position of the tooltip',
    },
  },
};

const ComponentTooltip = ({ ...Basic }) => `
    <sdds-tooltip 
      placement="${Basic.tooltipPosition}"
      selector="#button-1" 
      text="${Basic.text}" 
      mouse-over-tooltip="${Basic.mouseOverTooltip}">             
    </sdds-tooltip>
    <sdds-button type="primary" text="Hover me!" id="button-1"></sdds-button>

    <sdds-tooltip 
      placement="${Basic.tooltipPosition}" 
      selector="#button-2" 
      text="${Basic.text}" 
      mouse-over-tooltip="${Basic.mouseOverTooltip}"/>
      <p>Paragraph tag inside of Tooltip with <b>bold</b> and <i>italic</i> tags too.</p>
    </sdds-tooltip>
    <sdds-button type="secondary" text="Hover me!" id="button-2"></sdds-button>

  `;

export const Basic = ComponentTooltip.bind({});
Basic.args = {
  text: 'Text that will be displayed in tooltip',
  mouseOverTooltip: false,
};
