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
  
      this._tooltip = document.querySelector('#ttp');
      if (!this._tooltip)
        return;

      this._show = this._show.bind(this._tooltip);
      this._hide = this._hide.bind(this._tooltip);
    }
    
    connectedCallback() {
      
      this._hide();
  
      this._tooltip = document.querySelector('#tooltip-1');
      if (!this._tooltip)
        return;
  
      this._target = document.querySelector('#button-1');
      if (!this._target)
        return;
  
      this._target.addEventListener('focus', this._show);
      this._target.addEventListener('blur', this._hide);
      this._target.addEventListener('mouseenter', this._show);
      this._target.addEventListener('mouseleave', this._hide);
    }
  
    disconnectedCallback() {
  
      if (!this._target)
        return;
  
        this._target.removeEventListener('focus', this._show);
        this._target.removeEventListener('blur', this._hide);
        this._target.removeEventListener('mouseenter', this._show);
        this._target.removeEventListener('mouseleave', this._hide);
        this._target = null;
    }
  
    _show() {
      this.hidden = false;
    }
  
    _hide() {
      this.hidden = true;
    }
  }

  window.customElements.get('sdds-tooltip', SDDSTooltip);

  return `
  <c-theme name="scania" global="true"></c-theme>

  <sdds-tooltip id="tooltip-1" border="${tooltipBorder}" text='${text}' selector="button-1" ></sdds-tooltip>

  <sdds-button id="button-1" type="primary" text="Button"></sdds-button>
  `
};

export const Basic = ComponentTooltip.bind({});
Basic.args = {
  text: 'Text'
}