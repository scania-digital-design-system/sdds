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
  tag: 'sdds-datetime',
  styleUrl: 'datetime.scss',
  shadow: true,
})
export class Datetime {
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

  /** Change event for the datetime */
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

  /** Set the input as focus when clicking the whole datetime with suffix/prefix */
  handleFocusClick(): void {
    this.textInput.focus();
  }

  render() {
    return (
      <div
        class={`
        ${this.nominwidth ? 'sdds-form-datetime-nomin' : ''}
        ${
          this.focusInput
            ? 'sdds-form-datetime sdds-datetime-focus'
            : ' sdds-form-datetime'
        }
        ${this.value.length > 0 ? 'sdds-datetime-data' : ''}
        ${
          this.labelInside.length > 0
            ? 'sdds-datetime-container-label-inside'
            : ''
        }
        ${this.disabled ? 'sdds-form-datetime-disabled' : ''}
        ${this.size == 'md' ? 'sdds-form-datetime-md' : ''}
        ${
          this.state == 'error' || this.state == 'success'
            ? `sdds-form-datetime-${this.state}`
            : ''
        }
        `}
      >
        <slot name="sdds-label" />

        <div
          onClick={() => this.handleFocusClick()}
          class="sdds-datetime-container sdds-datetime-container"
        >
          <div class="sdds-datetime-input-container">
            <input
              ref={(inputEl) => (this.textInput = inputEl as HTMLInputElement)}
              class={`${
                this.size !== 'md'
                  ? 'sdds-datetime-input'
                  : 'sdds-datetime-input-md'
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

            <div class="datetime-icon icon-datetime-local">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.625 2.977a1 1 0 1 0-2 0v2.985l-11.344.01V2.99a1 1 0 1 0-2 0v2.985H6.25a4.2 4.2 0 0 0-4.2 4.2V25.77a4.2 4.2 0 0 0 4.2 4.2h19.54a4.2 4.2 0 0 0 4.2-4.2V10.167a4.2 4.2 0 0 0-4.191-4.2l-2.174-.004V2.977ZM4.05 10.174a2.2 2.2 0 0 1 2.2-2.2l16.376-.013 3.17.006a2.2 2.2 0 0 1 2.195 2.2v1.847H4.05l-.001-1.84Zm0 3.84V25.77a2.2 2.2 0 0 0 2.2 2.2h19.54a2.2 2.2 0 0 0 2.2-2.2V14.014H4.05Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div class="datetime-icon icon-time">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  d="M17 7a1 1 0 1 0-2 0v8a2 2 0 0 0 2 2h6a1 1 0 1 0 0-2h-6V7Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2ZM4 16C4 9.373 9.373 4 16 4s12 5.373 12 12-5.373 12-12 12S4 22.627 4 16Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {this.labelInside.length > 0 && (
              <label class="sdds-datetime-label-inside">
                {this.labelInside}
              </label>
            )}
          </div>
          <div class="sdds-datetime-bar"></div>
        </div>

        <div class="sdds-datetime-helper">
          <slot name="sdds-helper" />

          {this.maxlength > 0 && (
            <div class="sdds-datetime-textcounter">
              {this.value.length}
              <span class="sdds-datetime-textcounter-divider"> / </span>
              {this.maxlength}
            </div>
          )}
        </div>
      </div>
    );
  }
}
