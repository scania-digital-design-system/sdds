import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'sdds-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class SddsButton {
  // TODO: Make this mandatory prop. Send warning to user if empty and it is not icon only version of button.
  /** Text inside a button */
  @Prop() text: string = '';

  @Prop() type: string;

  @Prop() size: 'sm' | 'md' | '' = '';

  /** Control for disabled state of component */
  @Prop() disabled: boolean = false;

  /** When enabled, makes button take 100% width */
  @Prop() fullbleed: boolean = false;

  @State() onlyIcon: boolean = false;

  componentWillLoad() {
    if (this.text === '') {
      this.onlyIcon = true;
    }
  }

  render() {
    return (
      <button
        class={`sdds-btn sdds-btn-${this.type} ${this.size !== '' ? `sdds-btn-${this.size}` : ''} ${this.disabled ? 'disabled' : ''} ${this.fullbleed ? 'sdds-btn-fullbleed' : ''}

        ${this.onlyIcon ? 'sdds-btn-only-icon' : ''}`}
      >
        <span>{this.text}</span>
        <slot name="icon" />
      </button>
    );
  }
}
