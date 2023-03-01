import { Component, Host, h, Prop, State, Element, Event } from '@stencil/core';
import { EventEmitter, HostElement, Method } from '@stencil/core/internal';
import { SddsCheckboxCustomEvent } from '../../../components';

@Component({
  tag: 'sdds-dropdown-option-v2',
  styleUrl: 'sdds-dropdown-option-v2.scss',
  shadow: true,
})
export class SddsDropdownOptionV2 {
  /** Value for the dropdown option. */
  @Prop() value: string;

  /** Sets the dropdown options as selected. */
  @Prop() selected: boolean = false;

  /** Sets the dropdown options as disabled. */
  @Prop() disabled: boolean = false;

  @Prop() parentEl: any;

  @State() multiselect: boolean;

  @State() size: 'sm' | 'md' | 'lg' = 'lg';

  @State() modeVariant: 'primary' | 'secondary';

  @Element() host: HostElement;

  private parentElement: HTMLSddsDropdownV2Element;

  private label: string;

  /** Method to deselect the dropdown option. */
  @Method()
  async deselect() {
    this.selected = false;
  }

  connectedCallback = () => {
    this.parentElement =
      this.host.parentElement.tagName === 'SDDS-DROPDOWN-V2'
        ? (this.host.parentElement as HTMLSddsDropdownV2Element)
        : ((this.host.getRootNode() as ShadowRoot).host as HTMLSddsDropdownV2Element);
    this.modeVariant = this.parentElement.modeVariant;
    this.multiselect = this.parentElement.multiselect;
    this.size = this.parentElement.size;
    this.label = this.host.textContent.trim();
  };

  handleSingleSelect = () => {
    if (!this.disabled) {
      this.selected = true;
      this.parentElement.setValue(this.value, this.label);
      this.parentElement.close();
      this.handleClick();
    }
  };

  handleMultiselect = (
    event: SddsCheckboxCustomEvent<{ checkboxId: string; checked: boolean; value?: string }>,
  ) => {
    if (!this.disabled) {
      if (event.detail.checked) {
        this.parentElement.setValue(this.value, this.label);
        this.selected = true;
        this.handleClick();
      } else {
        this.parentElement.removeValue(this.value, this.label);
        this.selected = false;
        this.handleClick();
      }
    }
  };

  handleClick = () => {
    this.sddsClick.emit({
      value: this.value,
      selected: this.selected,
    });
  };

  /** Click event for the dropdown option. */
  @Event({
    eventName: 'sddsClick',
    composed: true,
    bubbles: true,
    cancelable: false,
  })
  sddsClick: EventEmitter<{
    selected: boolean;
    value: string;
  }>;

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
                this.handleSingleSelect();
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
