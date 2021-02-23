export default {
  title: 'Component/Tooltip',
  argTypes: {}
};

const ComponentTooltip = ({}) => {


  return `
  <c-theme name="scania" global="true"></c-theme>
  <sdds-tooltip>  </sdds-tooltip>
  `
};

export const Basic = ComponentTooltip.bind({});
Basic.args = {}