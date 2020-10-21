import {
  Component, h, Prop, State, Element, Watch, Host, Listen
} from '@stencil/core';

import BsDropdown from 'bootstrap/js/src/dropdown';
import { themeStyle } from '../../helpers/themeStyle';

@Component({
  tag: 'c-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class Dropdown {
  @Prop({ context: 'store' }) ContextStore: any;

  /** Per default, this will inherit the value from c-theme name property */
  @Prop({ mutable: true }) theme: string;

  /** Button interaction pattern for dropdown */
  @Prop() buttonType: string = "primary";

  /** Dropdown direction: dropup, dropright, dropleft */
  @Prop() direction: string;

  /** Custom dropdown menu alignment: dropdown-menu-right */
  @Prop() menuAlignment: string;

  @State() store: any;

  @State() tagName: string;

  @State() currentTheme = { components: [] };

  @State() style: Array<CSSStyleSheet>;

  @State() items: Array<any> = [];

  @State() dropdown;

  @Element() el;

  @State() node: HTMLElement;

  @Listen('click', { target: 'window' })
  handleClick(ev) {
    const target = ev ? ev.composedPath()[0] : window.event.target[0];

    if(this.node === target || target.getAttribute('slot') === 'dropdown-title') {
      const status = this.el.classList.contains('active') ? 'active' : 'inactive';
      this.toggle(status);
    } else {
      this.toggle('active');
    }    
  }

  @Watch('theme')
  setTheme(name = undefined) {
    this.theme = name || this.store.getState().theme.current;
    this.currentTheme = this.store.getState().theme.items[this.theme];
  }

  toggle(status){
    if(status === 'active') {
      this.dropdown.hide();
      this.el.classList.remove('active')
    } else {
      this.dropdown.show();
      this.el.classList.add('active')
    }
  }

  componentWillLoad() {
    this.store = this.ContextStore || (window as any).CorporateUi.store;

    this.setTheme(this.theme);

    this.store.subscribe(() => {
      this.setTheme();
      
      themeStyle(this.currentTheme, this.tagName, this.style, this.el);
    });

    if (!(this.el && this.el.nodeName)) return;

    this.tagName = this.el.nodeName.toLowerCase();
  }

  componentDidLoad() {
    this.style = this.el.shadowRoot.adoptedStyleSheets || [];
    
    themeStyle(this.currentTheme, this.tagName, this.style, this.el);
    this.dropdown = new BsDropdown(this.node);
  }

  render() {
    return (
      <Host>
        <div class={`
          dropdown
          ${this.direction ? this.direction : ''}
        `}>
          <button 
          class={`btn btn-${this.buttonType} dropdown-toggle`} 
          type="button" id="dropdownMenuButton" 
          data-toggle="dropdown" 
          aria-haspopup="true" 
          aria-expanded="false" 
          onClick={(ev)=>this.handleClick(ev)} 
          ref={(node) => this.node = node}>
            <slot name="dropdown-title" data-toggle="dropdown"></slot>
          </button>
          <div class={`
            dropdown-menu
            ${this.menuAlignment ? this.menuAlignment : ''}
          `}>
            <slot name="dropdown-item" />
          </div>
        </div>
      </Host>
    )
  }
}
