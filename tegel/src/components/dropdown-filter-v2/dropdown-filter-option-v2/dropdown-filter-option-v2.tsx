import { Component, h, Host, Prop, Element } from '@stencil/core';
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

  @Prop() size: 'sm' | 'md' | 'lg' = 'lg';

  @Prop() disabled: boolean = false;

  @Prop() hidden: boolean = false;

  @Element() host: HostElement;

  parentEl: HTMLSddsDropdownFilterV2Element;

  connectedCallback = () => {
    this.parentEl = this.host.closest('sdds-dropdown-filter-v2');
    if (this.parentEl) {
      this.size = this.parentEl.size;
      if (!this.value) {
        this.value = this.label;
      }
    }
  };

  render() {
    return (
      <Host class={`${this.hidden ? 'hidden' : ''}`}>
        <li class={`${this.disabled ? 'disabled' : ''}`}>
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
