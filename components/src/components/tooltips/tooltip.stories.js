export default {
  title: 'Component/Tooltip',
  argTypes: {
    position: {
      defaultValue: 'primary',
      description: 'Five different tooltip examples, including change of direction arrows',
      control: {
        type: 'radio',
        options: ['Default', 'top-left', 'top-right', 'bottom-right', 'bottom-left']
      }
    },   
  }
};

const ComponentTooltip = ({text=''}) => {


  return `
  <c-theme name="scania" global="true"></c-theme>
  <sdds-tooltip text="${text}"> </sdds-tooltip>
  `
};

export const Basic = ComponentTooltip.bind({});
Basic.args = {
  text: 'Tooltip',
}