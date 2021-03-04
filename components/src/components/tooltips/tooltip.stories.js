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

const ComponentTooltip = ({tooltipBorder, text=''}) => {

  return `
  <style>
  .tooltip-wrap {visibility: hidden;}
  .target-wrap:hover .tooltip-wrap {
    visibility: visible;
  }
  .target-wrap:hover {
    cursor: pointer;
  }
  .target-wrap {
    margin: 10rem 10rem;
    display: inline-block;
    background: #16417F;
    color: white;
    padding: 2rem;
    border-radius: 1rem;
  }
  </style>

  <c-theme name="scania" global="true"></c-theme>

  <div class="target-wrap">
  Hover me!
  <span class="tooltip-wrap">
  <sdds-tooltip border="${tooltipBorder}" text='${text}' data-tooltip="${text}" ></sdds-tooltip>
  </span>
  </div>
  `
};

export const Basic = ComponentTooltip.bind({});
Basic.args = {
  text: 'Text'
}