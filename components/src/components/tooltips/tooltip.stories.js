export default {
  title: 'Component/Tooltip',
  argTypes: {
    position: {
      control: {
        type: 'select',
        options:['default', 'top-left', 'top-right', 'bottom-right', 'bottom-left']
      },
      defaultValue: 'default',
      description: 'Five different tooltip examples, including change of direction arrows'
    }  
  }
};

const ComponentTooltip = ({position, text=''}) => {

  let borderValue='';
  switch (position) {
    case 'top-left':
      borderValue = 'style="border-radius: 0rem 1rem 1rem 1rem;"';
      break;
    case 'top-right':
      borderValue = 'style="border-radius: 1rem 0rem 1rem 1rem;"';
      break;
    case 'bottom-right':
      borderValue = 'style="border-radius: 1rem 1rem 0rem 1rem;"'
      break;
    case 'bottom-left':
      borderValue = 'style="border-radius: 1rem 1rem 1rem 0rem;"'
      break;
    default: 
      borderValue= '';
      break;
  }

  return `
  <c-theme name="scania" global="true"></c-theme>
  <sdds-tooltip text='${text}' position="${borderValue}"></sdds-tooltip>
  `
};

export const Basic = ComponentTooltip.bind({});
Basic.args = {
  text: 'Text',
}