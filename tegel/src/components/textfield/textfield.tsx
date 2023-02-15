import { Component, h, State, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sdds-textfield',
  styleUrl: 'textfield.scss',
  shadow: false,
})
export class Textfield {
  /** Textinput for focus state */
  textInput?: HTMLInputElement;

  /** Which input type, text, password or similar */
  @Prop({ reflect: true }) type: 'text' | 'password' = 'text';

  /** Position of the label for the textfield. */
  @Prop() labelPosition: 'inside' | 'outside' | 'no-label' = 'no-label';

  /** Label text */
  @Prop() label: string = '';

  /** Helper text */
  @Prop() helper: string;

  /** Placeholder text */
  @Prop() placeholder: string = '';

  /** Value of the input text */
  @Prop({ reflect: true }) value: string = '';

  /** Set input in disabled state */
  @Prop() disabled: boolean = false;

  /** Set input in readonly state */
  @Prop() readonly: boolean = false;

  /** Size of the input */
  @Prop() size: 'sm' | 'md' | 'lg' = 'lg';

    /** Mode variant of the textarea */

  @Prop() modeVariant: 'primary' | 'secondary' = null;

  /** With setting */
  @Prop() noMinWidth: boolean = false;

  /** Name property */
  @Prop() name = '';

  /** Error state of input */
  @Prop() state: 'error' | 'success' | 'default' = 'default';

  /** Max length of input */
  @Prop() maxLength: number;

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

  // Data input event in value prop
  handleInput(e): void {
    this.value = e.target.value;
  }

  // Change event isn't a composed:true by default in for input
  handleChange(e): void {
    this.customChange.emit(e);
  }

  /** Set the input as focus when clicking the whole textfield with suffix/prefix */
  handleFocusClick(): void {
    this.textInput.focus();
    this.focusInput = true;
  }

  render() {
    let className = ' sdds-textfield-input';
    if (this.size === 'md') {
      className += `${className}-md`;
    }
    if (this.size === 'sm') {
      className += `${className}-sm`;
    }
    return (
      <div
        class={`
        ${this.noMinWidth ? 'sdds-form-textfield-nomin' : ''}
        ${
          this.focusInput && !this.disabled
            ? 'sdds-form-textfield sdds-textfield-focus'
            : ' sdds-form-textfield'
        }
        ${this.value ? 'sdds-textfield-data' : ''}
        ${
          this.labelPosition === 'inside' && this.size !== 'sm'
            ? 'sdds-textfield-container-label-inside'
            : ''
        }
        ${this.disabled ? 'sdds-form-textfield-disabled' : ''}
        ${this.readonly ? 'sdds-form-textfield-readonly' : ''}
        ${this.modeVariant !== null ? `sdds-mode-variant-${this.modeVariant}`: ''}
        ${this.size === 'md' ? 'sdds-form-textfield-md' : ''}
        ${this.size === 'sm' ? 'sdds-form-textfield-sm' : ''}
        ${
          this.state === 'error' || this.state === 'success'
            ? `sdds-form-textfield-${this.state}`
            : ''
        }
        `}
      >
        {this.labelPosition === 'outside' && (
          <div class="sdds-textfield-label-outside">
            <div>{this.label}</div>
          </div>
        )}
        <div onClick={() => this.handleFocusClick()} class="sdds-textfield-container">
          <div class={`sdds-textfield-slot-wrap-prefix sdds-textfield-${this.state}`}>
            <slot name="sdds-prefix" />
          </div>

          <div class="sdds-textfield-input-container">
            <input
              onFocus={(e) => {
                if (this.readonly) {
                  e.preventDefault();
                  this.textInput.blur();
                  return;
                }
                this.focusInput = true;
              }}
              onBlur={() => {
                this.focusInput = false;
              }}
              ref={(inputEl) => (this.textInput = inputEl as HTMLInputElement)}
              class={className}
              type={this.type}
              disabled={this.disabled}
              placeholder={this.placeholder}
              value={this.value}
              autofocus={this.autofocus}
              maxlength={this.maxLength}
              name={this.name}
              onInput={(e) => this.handleInput(e)}
              onChange={(e) => this.handleChange(e)}
            />

            {this.labelPosition === 'inside' && this.size !== 'sm' && (
              <label class="sdds-textfield-label-inside">{this.label}</label>
            )}
          </div>
          <div class="sdds-textfield-bar"></div>

          <div class={`sdds-textfield-slot-wrap-suffix sdds-textfield-${this.state}`}>
            <slot name="sdds-suffix" />
          </div>
          <span class="sdds-textfield-icon__readonly">
            <sdds-icon name="edit_inactive" size="20px"></sdds-icon>
          </span>
          <span class="sdds-textfield-icon__readonly-label">This field is non-editable</span>
        </div>

        <div class="sdds-textfield-helper">
          {this.state === 'error' && (
            <div class="sdds-textfield-helper-error-state">
              <sdds-icon name="error" size="16px"></sdds-icon>
              {this.helper}
            </div>
          )}
          {this.state !== 'error' && this.helper}

          {this.maxLength > 0 && (
            <div class="sdds-textfield-textcounter">
              {this.value === null ? 0 : this.value?.length}
              <span class="sdds-textfield-textcounter-divider"> / </span>
              {this.maxLength}
            </div>
          )}
        </div>
      </div>
    );
  }
}
