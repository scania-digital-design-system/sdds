import { Component, State, h, Prop, Listen, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sdds-datetime',
  styleUrl: 'datetime.scss',
  shadow: true,
})
export class Datetime {
  /** Textinput for focus state */
  textInput?: HTMLInputElement;

  /** Which input type, text, password or similar */
  @Prop({ reflect: true }) type: 'datetime-local' | 'date' | 'time' = 'datetime-local';

  /** Value of the input text */
  @Prop({ reflect: true }) value = '';

  /** Default value of the component. Format for time: HH-MM. Format for date: YY-MM-DD. Format for date-time: YY-MM-DDTHH-MM */
  @Prop() defaultValue: string | 'none' = 'none';

  /** Set input in disabled state */
  @Prop() disabled: boolean = false;

  /** Size of the input */
  @Prop() size: 'sm' | 'md' | '' = '';

  /** Resets min width rule */
  @Prop() noMinWidth: boolean = false;

  /** Set the variant of the datetime component. */
  @Prop() modeVariant: 'primary' | 'secondary' = null;

  /** Name property */
  @Prop() name = '';

  /** Error state of input */
  @Prop() state: string;

  /** Autofocus for input */
  @Prop() autofocus: boolean = false;

  /** Label text for the component */
  @Prop() label: string = '';

  /** Helper text for the component */
  @Prop() helper: string = '';

  /** Listen to the focus state of the input */
  @State() focusInput: boolean;

  /** Change event for the datetime */
  @Event({
    composed: true,
    bubbles: true,
    cancelable: true,
  })
  sddsChange: EventEmitter;

  /** Blur event for the datetime */
  @Event({
    composed: true,
    bubbles: true,
    cancelable: false,
  })
  sddsBlur: EventEmitter<FocusEvent>;

  /** Focus event for the datetime */
  @Event({
    eventName: 'sddsFocus',
    composed: true,
    bubbles: true,
    cancelable: false,
  })
  sddsFocus: EventEmitter<FocusEvent>;

  getDefaultValue = () => {
    const dateTimeObj = {
      year: this.defaultValue.slice(0, 4),
      month: this.defaultValue.slice(5, 7),
      day: this.defaultValue.slice(8, 10),
      hours: this.defaultValue.slice(11, 13),
      minutes: this.defaultValue.slice(14, 16),
    };
    switch (this.type) {
      case 'datetime-local':
        return `${dateTimeObj.year}-${dateTimeObj.month}-${dateTimeObj.day}T${dateTimeObj.hours}:${dateTimeObj.minutes}`;
      case 'date':
        return `${dateTimeObj.year}-${dateTimeObj.month}-${dateTimeObj.day}`;
      case 'time':
        return `${this.defaultValue.slice(0, 2)}:${this.defaultValue.slice(3, 5)}`;
      default:
        throw new Error('Invalid type.');
    }
  };

  componentWillLoad() {
    if (this.defaultValue !== 'none') {
      this.value = this.getDefaultValue();
    }
  }

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
    this.sddsChange.emit(e);
  }

  // Change event isn't a composed:true by default in for input
  handleChange(e: Event): void {
    this.sddsChange.emit(e);
  }

  /** Set the input as focus when clicking the whole datetime with suffix/prefix */
  handleFocusClick(e): void {
    this.textInput.focus();
    this.sddsFocus.emit(e);
  }

  /** Set the input as focus when clicking the whole datetime with suffix/prefix */
  handleBlur(e): void {
    this.textInput.blur();
    this.sddsBlur.emit(e);
  }

  render() {
    let className = ' sdds-datetime-input';
    if (this.size === 'md') {
      className += `${className}-md`;
    }
    if (this.size === 'sm') {
      className += `${className}-sm`;
    }
    return (
      <div
        class={`
        ${this.noMinWidth ? 'sdds-form-datetime-nomin' : ''}
        ${this.focusInput ? 'sdds-form-datetime sdds-datetime-focus' : ' sdds-form-datetime'}
        ${this.value.length > 0 ? 'sdds-datetime-data' : ''}
        ${this.disabled ? 'sdds-form-datetime-disabled' : ''}
        ${this.size === 'md' ? 'sdds-form-datetime-md' : ''}
        ${this.size === 'sm' ? 'sdds-form-datetime-sm' : ''}
        ${
          this.state === 'error' || this.state === 'success'
            ? `sdds-form-datetime-${this.state}`
            : ''
        }
        ${this.modeVariant !== null ? `sdds-mode-variant-${this.modeVariant}` : ''}
        `}
      >
        {this.label && (
          <label htmlFor={this.name} class="sdds-datetime-label">
            {this.label}
          </label>
        )}
        <div
          onClick={(e) => this.handleFocusClick(e)}
          class="sdds-datetime-container sdds-datetime-container"
        >
          <div class="sdds-datetime-input-container">
            <input
              ref={(inputEl) => (this.textInput = inputEl as HTMLInputElement)}
              class={className}
              type={this.type}
              disabled={this.disabled}
              value={this.value}
              autofocus={this.autofocus}
              name={this.name}
              onInput={(e) => this.handleInput(e)}
              onBlur={(e) => this.handleBlur(e)}
              onChange={(e) => this.handleChange(e)}
            />

            <div class="datetime-icon icon-datetime-local">
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.625 2.977a1 1 0 1 0-2 0v2.985l-11.344.01V2.99a1 1 0 1 0-2 0v2.985H6.25a4.2 4.2 0 0 0-4.2 4.2V25.77a4.2 4.2 0 0 0 4.2 4.2h19.54a4.2 4.2 0 0 0 4.2-4.2V10.167a4.2 4.2 0 0 0-4.191-4.2l-2.174-.004V2.977ZM4.05 10.174a2.2 2.2 0 0 1 2.2-2.2l16.376-.013 3.17.006a2.2 2.2 0 0 1 2.195 2.2v1.847H4.05l-.001-1.84Zm0 3.84V25.77a2.2 2.2 0 0 0 2.2 2.2h19.54a2.2 2.2 0 0 0 2.2-2.2V14.014H4.05Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div class="datetime-icon icon-time">
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
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
          </div>
          <div class="sdds-datetime-bar"></div>
        </div>

        <div class="sdds-datetime-helper">
          {this.helper && (
            <div class="sdds-helper">
              {this.state === 'error' && <sdds-icon name="error" size="16px"></sdds-icon>}
              {this.helper}
            </div>
          )}
        </div>
      </div>
    );
  }
}
