export default {
  title: 'Component/Tooltip',
  argTypes: {
    tooltipPosition: {
      control: {
        type: 'select',
        options:['bottom-start', 'bottom', 'bottom-end', 'top-start', 'top', 'top-end', 'left-start', 'left', 'left-end', 'right-start', 'right', 'right-end']
      },
      defaultValue: 'bottom',
      description: 'Position of the tooltip'
    },
  }
};

const ComponentTooltip = ({...Basic}) => {
  
  return `
  <style>
    #button-1 {
    display: inline-block;
    }
  </style>
  <c-theme name="scania" global="true"></c-theme>
  
  <div class="sdds-container" style="margin-top:40rem;margin-left:40rem;">
    <div class="sdds-row">
      <div class="sdds-col-xxlg-5 sdds-col-xlg-5 sdds-col-lg-5 sdds-col-md-5">

        <sdds-tooltip placement="${Basic.tooltipPosition}" selector="#button-1" text='${Basic.text}' ></sdds-tooltip>
        <sdds-button id="button-1" type="primary" text="Button"></sdds-button>
        
      </div>
    </div>
  </div>
  `
};

export const Basic = ComponentTooltip.bind({});
Basic.args = {
  text: 'Lorem ipsum dolor sit amet',
}