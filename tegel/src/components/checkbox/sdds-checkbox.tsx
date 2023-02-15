import { Component, h, Prop, Event, EventEmitter, Method, Element } from '@stencil/core';
import { HostElement } from '@stencil/core/internal';

@Component({
  tag: 'sdds-checkbox',
  styleUrl: 'sdds-checkbox.scss',
  shadow: false,
  scoped: true,
})
export class SddsCheckbox {
  /** Name for the checkbox's input element. */
  @Prop() name: string;

  /** ID for the checkbox's input element. Randomly generated if not specified. */
  @Prop() checkboxId: string = crypto.randomUUID();

  /** Sets the checkbox in a disabled state */
  @Prop() disabled: boolean = false;

  /** Make the checkbox required */
  @Prop() required: boolean = false;

  /** Sets the checkbox as checked */
  @Prop({ reflect: true }) checked: boolean = false;

  @Element() host: HostElement;

  /** Toggles the checked value of the component. */
  @Method()
  async toggleCheckbox() {
    this.checked = !this.checked;
    return {
      checkboxId: this.checkboxId,
      checked: this.checked,
    };
  }

  /** Sends unique checkbox identifier and checked status when it is checked/unchecked. */
  @Event({
    eventName: 'checkboxChange',
    composed: true,
    cancelable: false,
    bubbles: true,
  })
  checkboxChange: EventEmitter<{
    checkboxId: string;
    checked: boolean;
  }>;

  handleChange = () => {
    this.checked = !this.checked;
    this.checkboxChange.emit({
      checkboxId: this.checkboxId,
      checked: this.checked,
    });
  };

  render() {
    return (
      <div class="sdds-checkbox-webcomponent">
        <input
          aria-checked={this.checked}
          aria-required={this.required}
          aria-describedby={this.host.getAttribute('aria-describedby')}
          aria-labelledby={this.host.getAttribute('aria-labelledby')}
          required={this.required}
          type="checkbox"
          name={this.name}
          id={this.checkboxId}
          checked={this.checked}
          disabled={this.disabled}
          onChange={() => {
            this.handleChange();
          }}
        />
        <label htmlFor={this.checkboxId}>
          <slot></slot>
        </label>
      </div>
    );
  }
}
