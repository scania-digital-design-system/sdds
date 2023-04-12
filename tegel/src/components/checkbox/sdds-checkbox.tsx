import { Component, h, Prop, Event, EventEmitter, Method, Element } from '@stencil/core';
import { HostElement } from '@stencil/core/internal';
import { appendHiddenInput } from '../../utils/utils';

@Component({
  tag: 'sdds-checkbox',
  styleUrl: 'sdds-checkbox.scss',
  shadow: true,
})
export class SddsCheckbox {
  /** Name for the checkbox's input element. */
  @Prop() name: string;

  /** ID for the checkbox's input element. Randomly generated if not specified. */
  @Prop() checkboxId: string = crypto.randomUUID();

  /** Sets the checkbox in a disabled state */
  @Prop() disabled: boolean = false;

  /** Sets the checkbox as checked */
  @Prop({ reflect: true }) checked: boolean = false;

  /** Value for the checkbox */
  @Prop() value: string;

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
    eventName: 'sddsChange',
    composed: true,
    cancelable: false,
    bubbles: true,
  })
  sddsChange: EventEmitter<{
    checkboxId: string;
    checked: boolean;
    value?: string;
  }>;

  handleChange = () => {
    this.checked = !this.checked;
    this.sddsChange.emit({
      checkboxId: this.checkboxId,
      checked: this.checked,
      value: this.value,
    });
  };

  render() {
    appendHiddenInput(this.host, this.name, this.checked ? this.value : '', this.disabled);
    return (
      <div class="sdds-checkbox-webcomponent">
        <input
          type="checkbox"
          name={this.name}
          value={this.value}
          id={this.checkboxId}
          checked={this.checked}
          disabled={this.disabled}
          onChange={() => this.handleChange()}
        />
        <label htmlFor={this.checkboxId}>
          <slot name="label"></slot>
        </label>
      </div>
    );
  }
}
