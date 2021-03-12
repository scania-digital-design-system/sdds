export default {
  title: 'Component/Tooltip',
};

const ComponentTooltip = ({...Basic}) => {
  
  return `
  <style>
    #button-1 {
    display: inline-block;
    }
  </style>
  <c-theme name="scania" global="true"></c-theme>
  
  <div class="sdds-container" style="margin-top:10rem;">
    <div class="sdds-row">
      <div class="sdds-col-xxlg-5 sdds-col-xlg-5 sdds-col-lg-5 sdds-col-md-5">

        <sdds-tooltip selector="#button-1" text='${Basic.text}' ></sdds-tooltip>
        <sdds-button id="button-1" type="primary" text="Button"></sdds-button>
        
      </div>
    </div>
  </div>
  `
};

export const Basic = ComponentTooltip.bind({});
Basic.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}