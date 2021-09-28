import {
  Component,
  h,
  State,
  Prop,
  Listen,
  Event,
  EventEmitter,
} from '@stencil/core';
@Component({
  tag: 'sdds-textfield',
  styleUrl: 'textfield.scss',
  shadow: true,
})
export class Textfield {
  /** Textinput for focus state */
  textInput?: HTMLInputElement;

  /** Which input type, text, password or similar */
  @Prop({ reflect: true }) type: string = 'text';

  /** Label that will be put inside the input */
  @Prop() labelInside: string = '';

  /** Placeholder text */
  @Prop() placeholder: string = '';

  /** Value of the input text */
  @Prop({ reflect: true }) value = '';

  /** Set input in disabled state */
  @Prop() disabled: boolean = false;

  /** Size of the input */
  @Prop() size = '';

  /** Name property */
  @Prop() name = '';

  /** Error state of input */
  @Prop() state: string;

  /** Max length of input */
  @Prop() maxlength: number;

  /** Autofocus for input */
  @Prop() autofocus: boolean = false;

  /** Listen to the focus state of the input */
  @State() focusInput;

  /** Change event for the textfield */
  @Event({
    composed: true,
    bubbles: true,
    cancelable: true,
  })
  customChange: EventEmitter;

  //Listener if input enters focus state
  @Listen('focus')
  handleFocusIn() {
    this.focusInput = true;
  }

  //Listener if input leaves focus state
  @Listen('focusout')
  handleFocusOut() {
    this.focusInput = false;
  }

  //Data input event in value prop
  handleInput(e): void {
    this.value = e.target.value;
  }

  //Change event isn't a composed:true by default in for input
  handleChange(e): void {
    this.customChange.emit(e);
  }

  //** Set the input as focus when clicking the whole textfield with suffix/prefix */
  handleFocusClick(): void {
    this.textInput.focus();
  }

  render() {
    return (
      <div
        class={`
        ${
          this.focusInput
            ? 'sdds-form-textfield sdds-textfield-focus'
            : ' sdds-form-textfield'
        }
        ${this.value.length > 0 ? 'sdds-textfield-data' : ''}
        ${
          this.labelInside.length > 0
            ? 'sdds-textfield-container-label-inside'
            : ''
        }
        ${this.disabled ? 'sdds-form-textfield-disabled' : ''}
        ${this.size == 'md' ? 'sdds-form-textfield-md' : ''}
        ${
          this.state == 'error' || this.state == 'success'
            ? `sdds-form-textfield-${this.state}`
            : ''
        }
        `}
      >
        <slot name="sdds-label" />

        <div
          onClick={() => this.handleFocusClick()}
          class="sdds-textfield-container"
        >
          <slot name="sdds-prefix" />

          <div class="sdds-textfield-input-container">
            <input
              ref={(inputEl) => (this.textInput = inputEl as HTMLInputElement)}
              class={`${
                this.size !== 'md'
                  ? 'sdds-textfield-input'
                  : 'sdds-textfield-input-md'
              }`}
              type={this.type}
              disabled={this.disabled}
              placeholder={this.placeholder}
              value={this.value}
              autofocus={this.autofocus}
              maxlength={this.maxlength}
              name={this.name}
              onInput={(e) => this.handleInput(e)}
              onChange={(e) => this.handleChange(e)}
            />

            {this.labelInside.length > 0 && (
              <label class="sdds-textfield-label-inside">
                {this.labelInside}
              </label>
            )}
          </div>
          <div class="sdds-textfield-bar"></div>

          <slot name="sdds-suffix" />
        </div>

        <div class="sdds-textfield-helper">
          <slot name="sdds-helper" />

          {this.maxlength > 0 && (
            <div class="sdds-textfield-textcounter">
              {this.value.length}
              <span class="sdds-textfield-textcounter-divider"> / </span>
              {this.maxlength}
            </div>
          )}
        </div>
      </div>
    );
  }
}
