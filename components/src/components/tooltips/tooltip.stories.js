export default {
  title: 'Component/Tooltip',
  argTypes: {
    tooltipBorder: {
      control: {
        type: 'select',
        options:['default', 'top-left', 'top-right', 'bottom-right', 'bottom-left']
      },
      defaultValue: 'top-left',
      description: 'Five different tooltip examples, including change of direction arrows'
    },
  }
};

const ComponentTooltip = ({...Basic}) => {
  
  return `
  <style>
    #button-1 {
    margin-left: 300px;
    margin-top: 80px;
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
  text: 'Text',
}

export const Basic1 = ComponentTooltip.bind({});
Basic1.args = {
  text: 'Text',
}