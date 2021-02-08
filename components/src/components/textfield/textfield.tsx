import {
  Component, h, State, Watch, Element, Prop, Listen,
} from '@stencil/core';

import { themeStyle } from '../../helpers/themeStyle';
import store from '../../store';

@Component({
  tag: 'c-textfield',
  styleUrl: 'textfield.scss',
  shadow: true,
})
export class Textfield {
  @State() store = store.state;

  @State() tagName: string;

  @State() theme: string;

  @State() currentTheme = { icons: { }, components: [] };

  @State() style: Array<CSSStyleSheet>;

  @Prop() type: string = 'text';

  @Prop() label: string = "";

  @Prop() labelinside: string = "";

  @Prop() placeholder: string = "";

  @Prop() value = "";

  @Prop() disabled;

  @Prop() size = "";

  @State() focusInput;


  @Element() el: any;

  @Watch('theme')
  setTheme(name = undefined) {
    this.theme = name || this.store.theme.current;
    this.currentTheme = this.store.theme.items[this.theme];
    themeStyle(this.currentTheme, this.tagName, this.style, this.el);
  }

  componentWillLoad() {
    this.store.theme = store.state.theme;
    this.theme = this.store.theme.current;
    this.currentTheme = this.store.theme[this.theme];

    store.use({set: (function(value){
      if(value === 'theme') this.theme = store.state.theme.current;
    }).bind(this)});

    if (!(this.el && this.el.nodeName)) return;

    this.tagName = this.el.nodeName.toLowerCase();
  }

  componentDidLoad() {
    this.style = this.el.shadowRoot['adoptedStyleSheets'] || [];

    themeStyle(this.currentTheme, this.tagName, this.style, this.el)

    //If <input> contains predefined values
    if(this.value.length > 0 ) {
      this.focusInput = true;
    }
  }

  //Focus states
  @Listen('focus')
  handleFocusIn() {
    this.focusInput = true;
  }

  @Listen('focusout')
  handleFocusOut() {
    this.focusInput = false;
    if(this.value.length > 0 ) {
      this.focusInput = true;
    }
  }

  //Data input event
  handleInputChange(event): void {
    this.value = event.target.value;
  }

  render() {
    return (
      <div class={`${this.focusInput ? 'sdds-textfield-container active':' sdds-textfield-container'} ${this.labelinside.length > 0 ? 'sdds-textfield-container-label-inside' : ''}`}>
        {this.label.length > 0 &&
         <label class={`sdds-textfield-label ${this.disabled ? 'sdds-textfield-label-disabled' : ''}`}>{this.label}</label>
        }
        <input
          class={this.size !== 'md' ? 'sdds-textfield-input' : 'sdds-textfield-input-md'}
          type={this.type}
          disabled={this.disabled}
          placeholder={this.placeholder}
          value={this.value}
          onInput={(event) => this.handleInputChange(event)}
        />
        {this.labelinside.length > 0 &&
          <label class="sdds-textfield-label-inside">{this.labelinside}</label>
        }
        <div class="sdds-textfield-bar"></div>
        {/* <div class="sdds-textfield-helper-text">helper text</div> */}
      </div>
    );
  }
}