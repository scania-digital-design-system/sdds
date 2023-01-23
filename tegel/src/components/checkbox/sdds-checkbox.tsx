import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sdds-checkbox',
  styleUrl: 'sdds-checkbox.scss',
  shadow: false,
})
export class SddsCheckbox {
  /** Name for the checkbox's input element. */
  @Prop() name: string;

  /** ID for the checkbox's input element. Randomly generated if not specified. */
  @Prop() checkboxId: string = crypto.randomUUID();

  /** Label text for the checkbox */
  @Prop() label: string;

  /** Sets the checkbox in a disabled state */
  @Prop() disabled: boolean = false;

  /** Sets the checkbox as checked
   *
   * **NOTE**: If you're listening for events you need to set this ID yourself to identify the checkbox, as the default ID is random and will be different every time.
   */
  @Prop() checked: boolean = false;

  /** Sends unique checkbox identifier and status when it is checked/unchecked. */
  @Event({
    eventName: 'sddsCheckboxChangeEvent',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sddsCheckboxChangeEvent: EventEmitter<{
    checkboxId: string;
    checked: boolean;
    disabled: boolean;
  }>;

  render() {
    return (
      <div class="sdds-checkbox-webcomponent">
        <input
          type="checkbox"
          name={this.name}
          id={this.checkboxId}
          checked={this.checked}
          disabled={this.disabled}
          onChange={() => {
            this.checked = !this.checked;
            this.sddsCheckboxChangeEvent.emit({
              checkboxId: this.checkboxId,
              checked: this.checked,
              disabled: this.disabled,
            });
          }}
        />
        {this.label && <label htmlFor={this.checkboxId}>{this.label}</label>}
      </div>
    );
  }
}
