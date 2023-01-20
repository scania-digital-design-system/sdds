import { Component, h, Prop, Element, State } from '@stencil/core';
import { HostElement } from '@stencil/core/internal';

@Component({
  tag: 'sdds-dropdown-option-v3',
  styleUrl: 'dropdown-option-v3.scss',
  shadow: false,
})
export class DropdownOptionV3 {
  /** Sets the dropdown option in a selected state */
  @Prop() selected: boolean = false;

  /** The value of the dropdown option */
  @Prop() value: string;

  /** The value of the dropdown option */
  @Prop() label: string;

  /** Sets the dropdown option in a disabled state */
  @Prop() disabled: boolean = false;

  @State() size: 'sm' | 'md' | 'lg' = 'lg';

  @State() multiselect: boolean = false;

  @State() modeVariant: 'primary' | 'secondary' = 'primary';

  @Element() host: HostElement;

  parentEl: HTMLSddsDropdownV3Element;

  connectedCallback() {
    this.parentEl = this.host.closest('sdds-dropdown-v3')
      ? this.host.closest('sdds-dropdown-v3')
      : (this.parentEl = this.host.parentElement as HTMLSddsDropdownV3Element);
    if (this.parentEl) {
      this.size = this.parentEl.size;
      this.modeVariant = this.parentEl.modeVariant;
      this.multiselect = this.parentEl.multiselect;
    }
    console.log(this.host.innerHTML);
  }

  componentWillRender() {
    if (!this.label) {
      this.label = this.host.innerHTML.replace('<!---->', '');
    }
  }

  render() {
    return (
      <div class={`sdds-dropdown-option-webcomponent`}>
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
              }
            }}
            class={`${this.size} ${this.disabled ? 'disabled' : ''}`}
          >
            {this.label}
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
      </div>
    );
  }
}
