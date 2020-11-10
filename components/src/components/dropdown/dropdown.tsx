import {
  Component, h, Prop, State, Element, Watch, Host, Listen
} from '@stencil/core';

import BsDropdown from 'bootstrap/js/src/dropdown';
import { themeStyle } from '../../helpers/themeStyle';
import store from '../../store';

@Component({
  tag: 'c-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class Dropdown {
  /** Per default, this will inherit the value from c-theme name property */
  @Prop({ mutable: true }) theme: string;

  /** Button interaction pattern for dropdown */
  @Prop() buttonType: string = "primary";

  /** Dropdown direction: dropup, dropright, dropleft */
  @Prop() direction: string;

  /** Custom dropdown menu alignment: dropdown-menu-right */
  @Prop() menuAlignment: string;

  @State() store = store.state;

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
    this.theme = name || this.store.theme.current;
    this.currentTheme = this.store.theme.items[this.theme];
    themeStyle(this.currentTheme, this.tagName, this.style, this.el);
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
    this.store.theme = store.get('theme');

    store.use({set: (function(value){
      if(value === 'theme') this.theme = store.state.theme.current;
    }).bind(this)});

    this.setTheme(this.theme);

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
