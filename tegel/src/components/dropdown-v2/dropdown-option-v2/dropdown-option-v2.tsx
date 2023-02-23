import { Component, h, Prop, Element, State } from '@stencil/core';
import { Host, HostElement } from '@stencil/core/internal';

@Component({
  tag: 'sdds-dropdown-option-v2',
  styleUrl: 'dropdown-option-v2.scss',
  shadow: false,
})
export class DropdownOptionV2 {
  /** Sets the dropdown option in a selected state */
  @Prop() selected: boolean = false;

  /** The value of the dropdown option */
  @Prop() value: string;

  /** Label text for the dropdown */
  @Prop() label: string;

  /** Sets the dropdown option in a disabled state */
  @Prop() disabled: boolean = false;

  @State() size: 'sm' | 'md' | 'lg' = 'lg';

  @State() multiselect: boolean = false;

  @State() modeVariant: 'primary' | 'secondary' = null;

  @Element() host: HostElement;

  parentEl: HTMLSddsDropdownV2Element;

  connectedCallback() {
    this.parentEl = this.host.closest('sdds-dropdown-v2')
      ? this.host.closest('sdds-dropdown-v2')
      : (this.parentEl = this.host.parentElement as HTMLSddsDropdownV2Element);
    if (this.parentEl) {
      this.size = this.parentEl.size;
      this.modeVariant = this.parentEl.modeVariant;
      this.multiselect = this.parentEl.multiselect;
    }
  }

  render() {
    return (
      <Host>
        <div
          class={`sdds-dropdown-option-webcomponent
        sdds-mode-variant-${this.modeVariant}`}
        >
          <div
            class={`
          button-wrapper
          ${this.disabled ? 'disabled' : ''}
          ${this.selected ? 'selected' : ''}
          `}
          >
            {this.multiselect ? (
              <sdds-checkbox
                class={`
                ${this.size}
                ${this.disabled ? 'disabled' : ''}
                ${this.selected ? 'selected' : ''}
                ${this.multiselect ? 'multiselect' : ''}
              `}
                checked={this.selected}
                disabled={this.disabled}
              >
                {this.label}
              </sdds-checkbox>
            ) : (
              <button
                role="option"
                onClick={() => {
                  if (!this.multiselect) {
                    this.parentEl.open = !this.parentEl.open;
                  }
                }}
                class={`
            ${this.size}
            ${this.disabled ? 'disabled' : ''}
            ${this.selected ? 'selected' : ''}
            ${this.multiselect ? 'multiselect' : ''}
            `}
              >
                {this.label}
                {!this.multiselect && this.selected && (
                  <sdds-icon name="tick" size="16px"></sdds-icon>
                )}
              </button>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
