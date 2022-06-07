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

  /** Set input in readonly state */
  @Prop() readonly: boolean = false;

  /** Size of the input */
  @Prop() size = '';

  /** With setting */
  @Prop() nominwidth: boolean = false;

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

  // Listener if input enters focus state
  @Listen('focus')
  handleFocusIn() {
    this.focusInput = true;
  }

  // Listener if input leaves focus state
  @Listen('focusout')
  handleFocusOut() {
    this.focusInput = false;
  }

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
  }

  render() {
    let className = ' sdds-textfield-input';
    if (this.size === 'md') {
      className += className + '-md';
    }
    if (this.size === 'sm') {
      className += className + '-sm';
    }
    return (
      <div
        class={`
        ${this.nominwidth ? 'sdds-form-textfield-nomin' : ''}
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
        ${this.readonly ? 'sdds-form-textfield-readonly' : ''}
        ${this.size == 'md' ? 'sdds-form-textfield-md' : ''}
        ${this.size == 'sm' ? 'sdds-form-textfield-sm' : ''}
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
              class={className}
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

          <svg
            class="sdds-textfield-icon__readonly"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.6242 10.7946L17.1365 7.28228C17.6247 6.79412 17.6247 6.00266 17.1365 5.5145L14.485 2.86295C13.9968 2.37479 13.2054 2.37479 12.7172 2.86295L9.20483 6.3753L10.0887 7.25919L11.3914 5.95654L14.0429 8.6081L12.7403 9.91075L13.6242 10.7946ZM13.6011 3.74684L16.2526 6.39839L14.9268 7.72421L12.2753 5.07265L13.6011 3.74684Z"
              fill="#0D0F13"
            />
            <path
              d="M7.43707 9.91075L5.00974 12.3381L4.01561 15.9837L7.6613 14.9896L10.0886 12.5623L10.9725 13.4462L8.54519 15.8735C8.39136 16.0274 8.20004 16.1384 7.99014 16.1956L3.28932 17.4774C3.07294 17.5364 2.84154 17.475 2.68295 17.3164C2.52436 17.1578 2.46291 16.9264 2.52191 16.71L3.80377 12.0092C3.861 11.7993 3.97202 11.608 4.12585 11.4542L6.55318 9.02686L7.43707 9.91075Z"
              fill="#0D0F13"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.43306 1.43306C1.67714 1.18898 2.07287 1.18898 2.31695 1.43306L18.5671 17.6832C18.8112 17.9273 18.8112 18.323 18.5671 18.5671C18.323 18.8112 17.9273 18.8112 17.6832 18.5671L1.43306 2.31695C1.18898 2.07287 1.18898 1.67714 1.43306 1.43306Z"
              fill="#0D0F13"
            />
          </svg>
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
