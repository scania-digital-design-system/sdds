import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { HostElement } from '@stencil/core/internal';

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

  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' = 'lg';

  /** Control for disabled state of component */
  @Prop() disabled: boolean = false;

  /** When enabled, makes button take 100% width */
  @Prop() fullbleed: boolean = false;

  /** Set the mode variant of the the button. */
  @Prop() modeVariant: 'primary' | 'secondary' = null;

  @State() onlyIcon: boolean = false;

  @Element() host: HostElement;

  componentWillLoad() {
    if (this.text === '') {
      this.onlyIcon = true;
      this.host.setAttribute('only-icon', '');
    }
  }

  render() {
    return (
      <Host class={`${this.modeVariant !== null ? `sdds-mode-variant-${this.modeVariant}` : ''}`}>
        <button
          class={`sdds-btn sdds-btn-${this.type} 
        ${`sdds-btn-${this.size}`}
        ${this.disabled ? 'disabled' : ''}
        ${this.fullbleed ? 'sdds-btn-fullbleed' : ''}
        ${this.onlyIcon ? 'sdds-btn-only-icon' : ''}`}
        >
          <span class="sdds-btn-text">{this.text}</span>
          <slot name="icon" />
        </button>
      </Host>
    );
  }
}
