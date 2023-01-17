import { Component, Host, h, Prop, State, Element } from '@stencil/core';
import { HostElement } from '@stencil/core/internal';

@Component({
  tag: 'sdds-dropdown-multiselect-option-v2',
  styleUrl: 'dropdown-multiselect-option-v2.scss',
  shadow: true,
})
export class DropdownMultiselectOptionV2 {
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
            class={`${this.size} ${this.disabled ? 'disabled' : ''}`}
            onClick={() => {
              this.selected = !this.selected;
            }}
          >
            {this.label}
            <input class="sdds-form-input" type="checkbox" checked={this.selected} />
          </button>
        </li>
      </Host>
    );
  }
}
