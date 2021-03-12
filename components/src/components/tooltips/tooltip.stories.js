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
  
  <sdds-tooltip selector="#button-1" border="${Basic.tooltipBorder}" text='${Basic.text}' ></sdds-tooltip>
  
  <sdds-button id="button-1" type="primary" text="Button"></sdds-button>
  `
};

export const Basic = ComponentTooltip.bind({});
Basic.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}