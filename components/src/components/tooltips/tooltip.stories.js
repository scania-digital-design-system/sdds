export default {
  title: 'Component/Tooltip',
  argTypes: {
    tooltipBorder: {
      control: {
        type: 'select',
        options:['default', 'top-left', 'top-right', 'bottom-right', 'bottom-left']
      },
      defaultValue: 'default',
      description: 'Five different tooltip examples, including change of direction arrows'
    },
  }
};

const ComponentTooltip = ({tooltipBorder, text=''}) => {

  return `
  <c-theme name="scania" global="true"></c-theme>
  <sdds-tooltip border="${tooltipBorder}" text='${text}'></sdds-tooltip>
  `
};

export const Basic = ComponentTooltip.bind({});
Basic.args = {
  text: 'Text'
}