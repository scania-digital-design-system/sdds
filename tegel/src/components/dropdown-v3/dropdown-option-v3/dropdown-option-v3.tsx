import { Component, h, Host, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'sdds-dropdown-option-v3',
  styleUrl: 'dropdown-option-v3.scss',
  shadow: true,
})
export class DropdownOptionV3 {
  @Prop() selected: boolean = false;

  @Prop() label: string;

  @Prop() value: string;

  @Prop() disabled: boolean = false;

  @State() size: 'sm' | 'md' | 'lg' = 'lg';

  @State() multiselect: boolean = false;

  @State() modeVariant: 'primary' | 'secondary' = 'primary';

  @Element() host: any;

  parentEl: HTMLSddsDropdownV3Element;

  connectedCallback() {
    this.parentEl = this.host.closest('sdds-dropdown-v3')
      ? this.host.closest('sdds-dropdown-v3')
      : (this.parentEl = this.host.getRootNode().host);
    if (this.parentEl) {
      this.size = this.parentEl.size;
      this.modeVariant = this.parentEl.modeVariant;
      this.multiselect = this.parentEl.multiselect;
    }
  }

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
              if (!this.multiselect) {
                this.parentEl.open = !this.parentEl.open;
              } else {
                //this.selected = !this.selected;
              }
            }}
            class={`${this.size} ${this.disabled ? 'disabled' : ''}`}
          >
            <slot></slot>
            {!this.multiselect && this.selected && <sdds-icon name="tick" size="16px"></sdds-icon>}
            {this.multiselect && (
              <input
                class="sdds-form-input"
                disabled={this.disabled}
                type="checkbox"
                checked={this.selected}
              />
            )}
          </button>
        </li>
      </Host>
    );
  }
}
