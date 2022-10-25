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

  //TODO: Should this have prmary, danger, warning etc?
  /** Type of button */
  @Prop() type: 'primary' | 'secondary' | 'ghost' | 'danger' = 'primary';

  // Button variant
  @Prop() variant: 'default' | 'variant' = 'default';

  @Prop() size: 'sm' | 'md' | 'lg' = 'lg';

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
        class={`sdds-btn sdds-btn-${this.type}
        ${`sdds-btn-${this.size}`}
        ${this.disabled ? 'disabled' : ''}
        ${this.fullbleed ? 'sdds-btn-fullbleed' : ''}
        ${this.variant === 'variant' ? 'sdds-on-white-bg' : ''}
        ${this.onlyIcon ? 'sdds-btn-only-icon' : ''}`}
      >
        <span>{this.text}</span>
        <slot name="icon" />
      </button>
    );
  }
}
