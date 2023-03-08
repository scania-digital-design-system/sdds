import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sdds-textarea',
  styleUrl: 'textarea.scss',
  shadow: false,
})
export class Textarea {
  /** Textinput for focus state */
  textEl?: HTMLTextAreaElement;

  /** Label text */
  @Prop() label: string = '';

  /** Name attribute */
  @Prop() name: string = '';

  /** Helper text */
  @Prop() helper: string = '';

  /** Textarea cols attribute */
  @Prop() cols: number;

  /** Textarea rows attribute */
  @Prop() rows: number;

  /** Label position: `no-label` (default), `inside`, `outside` */
  @Prop() labelPosition = 'no-label';

  /** Placeholder text */
  @Prop() placeholder: string = '';

  /** Value of the input text */
  @Prop() value: string = null;

  /** Set input in disabled state */
  @Prop() disabled: boolean = false;

  /** Set input in readonly state */
  @Prop() readonly: boolean = false;

  /** Error state of input */
  @Prop() state: string;

  /** Max length of input */
  @Prop() maxlength: number;

  /** Control of autofocus */
  @Prop() autofocus: boolean = false;

  /** With setting */
  @Prop() noMinWidth: boolean = false;

  /** Listen to the focus state of the input */
  @State() focusInput;

  /** Change event for the textarea */
  @Event({
    eventName: 'customChange',
    composed: true,
    bubbles: true,
    cancelable: true,
  })
  customChange: EventEmitter;

  handleChange(event): void {
    this.customChange.emit(event);
  }

  /** Blur event for the textarea */
  @Event({
    eventName: 'customBlur',
    composed: true,
    bubbles: true,
    cancelable: true,
  })
  customBlur: EventEmitter<FocusEvent>;

  handleBlur(event): void {
    this.customBlur.emit(event);
    this.focusInput = false;
  }

  /** Input event for the textarea */
  @Event({
    eventName: 'customInput',
    composed: true,
    bubbles: true,
    cancelable: true,
  })
  customInput: EventEmitter<InputEvent>;

  // Data input event in value prop
  handleInput(event): void {
    this.customInput.emit(event);
    this.value = event.target.value;
  }

  /** Focus event for the textarea */
  @Event({
    eventName: 'customFocus',
    composed: true,
    bubbles: true,
    cancelable: true,
  })
  customFocus: EventEmitter<FocusEvent>;

  /* Set the input as focus when clicking the whole textfield with suffix/prefix */
  handleFocus(event): void {
    if (!this.readonly) {
      this.textEl.focus();
      this.focusInput = true;
      this.customFocus.emit(event);
    }
  }

  render() {
    return (
      <div
        class={`
        sdds-textarea-container
        ${this.noMinWidth ? 'no-min-width' : ''}
        ${this.labelPosition === 'inside' ? 'sdds-textarea-label-inside' : ''}
        ${this.focusInput ? 'sdds-textarea-focus' : ''}
        ${this.disabled ? 'sdds-textarea-disabled' : ''}
        ${this.readonly ? 'sdds-textarea-readonly' : ''}
        ${this.value ? 'sdds-textarea-data' : ''}
        ${this.state == 'error' || this.state == 'success' ? `sdds-textarea-${this.state}` : ''}
        `}
        onClick={(event) => this.handleFocus(event)}
      >
        {this.label.length > 0 && <span class={'sdds-textarea-label'}>{this.label}</span>}
        <div class="sdds-textarea-wrapper">
          <textarea
            class={'sdds-textarea-input'}
            ref={(inputEl) => (this.textEl = inputEl as HTMLTextAreaElement)}
            disabled={this.disabled}
            readonly={this.readonly}
            placeholder={this.placeholder}
            value={this.value}
            name={this.name}
            autofocus={this.autofocus}
            maxlength={this.maxlength}
            cols={this.cols}
            rows={this.rows}
            onFocus={(event) => this.handleFocus(event)}
            onBlur={(event) => this.handleBlur(event)}
            onInput={(event) => this.handleInput(event)}
            onChange={(event) => this.handleChange(event)}
          ></textarea>
          <span class="sdds-textarea-resizer-icon">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8536 0.853553C12.0488 0.658291 12.0488 0.341709 11.8536 0.146447C11.6583 -0.0488155 11.3417 -0.0488155 11.1464 0.146447L0.146447 11.1464C-0.0488155 11.3417 -0.0488155 11.6583 0.146447 11.8536C0.341709 12.0488 0.658291 12.0488 0.853553 11.8536L11.8536 0.853553ZM11.8536 4.64645C12.0488 4.84171 12.0488 5.15829 11.8536 5.35355L5.35355 11.8536C5.15829 12.0488 4.84171 12.0488 4.64645 11.8536C4.45118 11.6583 4.45118 11.3417 4.64645 11.1464L11.1464 4.64645C11.3417 4.45118 11.6583 4.45118 11.8536 4.64645ZM11.8536 8.64645C12.0488 8.84171 12.0488 9.15829 11.8536 9.35355L9.35355 11.8536C9.15829 12.0488 8.84171 12.0488 8.64645 11.8536C8.45118 11.6583 8.45118 11.3417 8.64645 11.1464L11.1464 8.64645C11.3417 8.45118 11.6583 8.45118 11.8536 8.64645Z"
                fill="currentColor"
              />
            </svg>
          </span>

          <svg
            class="sdds-textarea-icon__readonly"
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

          <span class="sdds-textarea-icon__readonly-label">This field is non-editable</span>
        </div>
        {this.helper.length > 0 && <span class={'sdds-textarea-helper'}>{this.helper}</span>}
        {this.maxlength > 0 && (
          <div class={'sdds-textarea-textcounter'}>
            {this.value === null ? 0 : this.value?.length}
            <span class="sdds-textfield-textcounter-divider"> / </span> {this.maxlength}
          </div>
        )}
      </div>
    );
  }
}
