export default {
  title: 'Component/Tooltip',
  argTypes: {
    tooltipPosition: {
      control: {
        type: 'select',
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
  <sdds-theme></sdds-theme>

  <div class="sdds-container" style="margin-top:40rem;margin-left:40rem;">
    <div class="sdds-row">
      <div class="sdds-col-xxlg-5 sdds-col-xlg-5 sdds-col-lg-5 sdds-col-md-5">
        <sdds-tooltip placement="${Basic.tooltipPosition}" selector="#button-1" text="${Basic.text}" offset-distance="${Basic.offsetDistance}" offset-skidding="${Basic.offsetSkidding}" mouse-over-tooltip="${Basic.mouseOverTooltip}">             
            <p>Paragraph tag inside of Tooltip with <b>bold</b> and <i>italic</i> tags too.</p>  
        </sdds-tooltip>
        <sdds-button type="primary" text="Button" id="button-1"></sdds-button>
        <sdds-tooltip placement="${Basic.tooltipPosition}" selector="#button-2" text="${Basic.text}" offset-distance="${Basic.offsetDistance}" offset-skidding="${Basic.offsetSkidding}" mouse-over-tooltip="${Basic.mouseOverTooltip}" /></sdds-tooltip>
        <sdds-button type="primary" text="Button" id="button-2"></sdds-button>
      </div>
    </div>
  </div>
  `;

export const Basic = ComponentTooltip.bind({});
Basic.args = {
  text: 'Text that will be displayed in tooltip',
  offsetDistance: 20,
  offsetSkidding: 30,
  mouseOverTooltip: false,
};
