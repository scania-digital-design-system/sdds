import { Component, Host, h, Prop, State, Element } from '@stencil/core';
import { HostElement, Method } from '@stencil/core/internal';
import { SddsCheckboxCustomEvent } from '../../../components';

@Component({
  tag: 'sdds-dropdown-option-v2',
  styleUrl: 'sdds-dropdown-option-v2.scss',
  shadow: true,
})
export class SddsDropdownOptionV2 {
  @Prop() value: string;

  @Prop() selected: boolean;

  @Prop() disabled: boolean;

  @State() multiselect: boolean;

  @State() size: 'sm' | 'md' | 'lg' = 'lg';

  @State() modeVariant: 'primary' | 'secondary';

  @Element() host: HostElement;

  private parentElement: HTMLSddsDropdownV2Element;

  private label: string;

  @Method()
  async deselect() {
    this.selected = false;
  }

  connectedCallback = () => {
    this.parentElement = this.host.parentElement as HTMLSddsDropdownV2Element;
    this.modeVariant = this.parentElement.modeVariant;
    this.multiselect = this.parentElement.multiselect;
    this.size = this.parentElement.size;
    this.label = this.host.innerHTML;
  };

  handleSingleselect = () => {
    this.selected = true;
    this.parentElement.setValue(this.value, this.label);
    this.parentElement.close();
  };

  handleMultiselect = (
    event: SddsCheckboxCustomEvent<{ checkboxId: string; checked: boolean; value?: string }>,
  ) => {
    if (event.detail.checked) {
      this.parentElement.setValue(this.value, this.label);
      this.selected = true;
    } else {
      this.parentElement.removeValue(this.value, this.label);
      this.selected = false;
    }
  };

  render() {
    return (
      <Host class={`${this.modeVariant ? `sdds-mode-variant-${this.modeVariant}` : ''}`}>
        <div
          class={`dropdown-option 
          ${this.size}
          ${this.selected ? 'selected' : ''}
          ${this.disabled ? 'disabled' : ''}
          `}
        >
          {this.multiselect && (
            <div
              class="multiselect"
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  this.parentElement.close();
                }
              }}
            >
              <sdds-checkbox
                onSddsChange={(event) => {
                  this.handleMultiselect(event);
                }}
                disabled={this.disabled}
                checked={this.selected}
              >
                <slot></slot>
              </sdds-checkbox>
            </div>
          )}
          {!this.multiselect && (
            <button
              onClick={() => {
                this.handleSingleselect();
              }}
              disabled={this.disabled}
            >
              <div class="single-select">
                <slot></slot>
                {this.selected && <sdds-icon name="tick" size="16px"></sdds-icon>}
              </div>
            </button>
          )}
        </div>
      </Host>
    );
  }
}
