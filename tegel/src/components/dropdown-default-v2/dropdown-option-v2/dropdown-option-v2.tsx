import { Component, h, Host, Prop, Element, State } from '@stencil/core';
import { HostElement } from '@stencil/core/internal';

@Component({
  tag: 'sdds-dropdown-option-v2',
  styleUrl: 'dropdown-option-v2.scss',
  shadow: true,
})
export class SddsDropdownOptionV2 {
  @Prop() selected: boolean = false;

  @Prop() label: string;

  @Prop() value: string;

  @Prop() disabled: boolean = false;

  @State() size: 'sm' | 'md' | 'lg' = 'lg';

  @State() modeVariant: 'primary' | 'secondary' = 'primary';

  @Element() host: HostElement;

  parentEl: HTMLSddsDropdownV2Element;

  connectedCallback = () => {
    this.parentEl = this.host.closest('sdds-dropdown-v2');
    if (this.parentEl) {
      this.size = this.parentEl.size;
      this.modeVariant = this.parentEl.modeVariant;
      if (!this.value) {
        this.value = this.label;
      }
    }
  };

  render() {
    return (
      <Host>
        <li
          class={`
          ${this.disabled ? 'disabled' : ''}
          ${this.selected ? 'selected' : ''}
          ${this.modeVariant}
          `}
        >
          <button
            onClick={() => {
              if (this.parentEl) {
                this.parentEl.open = !this.parentEl.open;
              }
            }}
            class={`${this.size} ${this.disabled ? 'disabled' : ''}`}
          >
            {this.label}
            {this.selected && <sdds-icon name="tick" size="16px"></sdds-icon>}
          </button>
        </li>
      </Host>
    );
  }
}