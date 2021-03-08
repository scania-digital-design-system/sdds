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

  class SDDSTooltip extends HTMLElement {
    constructor() {
  
      super();

    }
    
    connectedCallback() {
      this._target = document.querySelector('#button-1');
      document.querySelector('#tooltip-1').hidden = true;

      this._target.addEventListener('mouseenter', this._show);
      this._target.addEventListener('mouseleave', this._hide);

    }

    _show() {
      document.querySelector('#tooltip-1').hidden = false;
    }

    _hide() {
      document.querySelector('#tooltip-1').hidden = true;
    }

    disconnectedCallback() {
    }

  }

  window.customElements.define('sdds-tooltip', SDDSTooltip);
  
  return `
  <c-theme name="scania" global="true"></c-theme>
  
  <sdds-tooltip id="tooltip-1" border="${tooltipBorder}" text='${text}' ></sdds-tooltip>
  
  <sdds-button id="button-1" type="primary" text="Button"></sdds-button>
  
  <h1 id="hett">HELLO THERE</h1>
  `
};

export const Basic = ComponentTooltip.bind({});
Basic.args = {
  text: 'Text'
}