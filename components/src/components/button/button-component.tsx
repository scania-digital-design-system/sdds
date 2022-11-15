import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class SddsButton {
  // TODO: Make this mandatory prop. Send warning to user if empty and it is not icon only version of button.
  /** Text inside a button */
  @Prop() text: string = '';

  /** Type of button */
  @Prop() type: 'primary' | 'secondary' | 'ghost' | 'danger' = 'primary';

  /** Size of button */
  @Prop() size: 'sm' | 'md' | '' = '';

  /** Control for disabled state of component */
  @Prop() disabled: boolean = false;

  /** When enabled, makes button take 100% width */
  @Prop() fullbleed: boolean = false;

  render() {
    return (
      <button
        class={`sdds-btn sdds-btn-${this.type} ${
          this.size == 'sm' || this.size == 'md' ? `sdds-btn-${this.size}` : ''
        } ${this.disabled ? 'disabled' : ''} ${
          this.fullbleed ? 'sdds-btn-fullbleed' : ''
        }`}
      >
        {this.text}
        <slot name="icon" />
      </button>
    );
  }
}
