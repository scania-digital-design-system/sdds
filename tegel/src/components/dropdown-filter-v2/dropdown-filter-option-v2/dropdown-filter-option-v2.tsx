import { Component, h, Host, Prop, Element, State } from '@stencil/core';
import { HostElement } from '@stencil/core/internal';

@Component({
  tag: 'sdds-dropdown-filter-option-v2',
  styleUrl: 'dropdown-filter-option-v2.scss',
  shadow: true,
})
export class SddsDropdownFilterOptionV2 {
  @Prop() selected: boolean = false;

  @Prop() label: string;

  @Prop({ reflect: true }) value: string;

  @Prop() disabled: boolean = false;

  @Prop() hidden: boolean = false;

  @State() size: 'sm' | 'md' | 'lg' = 'lg';

  @State() modeVariant: 'primary' | 'secondary' = 'primary';

  @Element() host: HostElement;

  parentEl: HTMLSddsDropdownFilterV2Element;

  connectedCallback = () => {
    this.parentEl = this.host.closest('sdds-dropdown-filter-v2');
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
      <Host class={`${this.hidden ? 'hidden' : ''}`}>
        <li
          class={`
          ${this.disabled ? 'disabled' : ''}
          ${this.selected ? 'selected' : ''}
          ${this.modeVariant}
          `}
        >
          <button
            onClick={() => {
              if (this.parentEl && !this.disabled) {
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
