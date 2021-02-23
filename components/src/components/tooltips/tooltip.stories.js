export default {
  title: 'Component/Tooltip',
  argTypes: {}
};

const ComponentTooltip = ({text='HOOOOVER YEA'}) => {


  return `
  <c-theme name="scania" global="true"></c-theme>
  <div>
  <sdds-tooltip text="${text}"> </sdds-tooltip>
  </div>
  `
};

export const Basic = ComponentTooltip.bind({});
Basic.args = {
  text: 'yessir',
}