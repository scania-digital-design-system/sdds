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

  @State() currentTheme = { components: [] };

  @State() style: Array<CSSStyleSheet>;

  /** Which input type, text, password or similar */
  @Prop() type: string = 'text';

  /** Label that will be put outside the input */
  @Prop() label: string = "";

   /** Label that will be put inside the input */
  @Prop() labelinside: string = "";

  /** Placeholder text */
  @Prop() placeholder: string = "";

  /** Value of the input text */
  @Prop() value = "";

  /** Set input in disabled state */
  @Prop() disabled: boolean = false;

  /** Size of the input */
  @Prop() size = "";

  /** Error state of input */
  @Prop() error: boolean;

  /** Helper text outside input */
  @Prop() helper: string = '';

  /** Max length of input */
  @Prop() maxlength: number;

  /** Listen to the focus state of the input */
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

  //Listener if input enters focus state
  @Listen('focus')
  handleFocusIn() {
    this.focusInput = true;
  }

  //Listener if input leaves focus state
  @Listen('focusout')
  handleFocusOut() {
    this.focusInput = false;
    if(this.value.length > 0 ) {
      this.focusInput = true;
    }
  }

  //Data input event in value prop
  handleInputChange(event): void {
    this.value = event.target.value;
  }

  render() {
    return (
      <div class={`${this.focusInput ? 'sdds-textfield-container active':' sdds-textfield-container'} ${this.labelinside.length > 0 ? 'sdds-textfield-container-label-inside' : ''}`}>
        {this.label.length > 0 &&
         <label class={`sdds-textfield-label ${this.disabled ? 'sdds-textfield-label-disabled' : ''}`}>{this.label}</label>
        }
        {/* <slot name="sdds-prefix" /> */}
        <input
          class={`${this.size !== 'md' ? 'sdds-textfield-input' : 'sdds-textfield-input-md'} ${this.error == true ? 'sdds-textfield-input-error' : ''}`}
          type={this.type}
          disabled={this.disabled}
          placeholder={this.placeholder}
          value={this.value}
          maxlength={this.maxlength}
          onInput={(event) => this.handleInputChange(event)}
        />
        {this.labelinside.length > 0 &&
          <label class="sdds-textfield-label-inside">{this.labelinside}</label>
        }
        <div class={`sdds-textfield-bar ${this.error == true ? 'sdds-textfield-bar-error' : ''}`}></div>
        {this.helper.length > 0 && <div class={`sdds-textfield-helper ${this.error == true ? 'sdds-textfield-helper-error' : ''}`}>
          { this.helper }
        </div>}
        {this.maxlength > 0 &&
          <div class="sdds-textfield-textcounter" >
            {this.value.length}<span class="sdds-textfield-textcounter-divider"> / </span>{this.maxlength}
          </div>
        }
         {/* <slot name="sdds-suffix"/> */}
      </div>
    );
  }
}


//FIXME: Naming of component SDDS- 