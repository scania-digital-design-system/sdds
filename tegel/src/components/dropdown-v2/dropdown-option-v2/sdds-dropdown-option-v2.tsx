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

  /** Sets the dropdown options as disabled. */
  @Prop() disabled: boolean = false;

  /** Sets the dropdown options as selected. */
  @State() selected: boolean = false;

  @Prop() parentEl: any;

  @State() multiselect: boolean;

  @State() size: 'sm' | 'md' | 'lg' = 'lg';

  @Element() host: HostElement;

  private parentElement: HTMLSddsDropdownV2Element;

  private label: string;

  /** Method to deselect the dropdown option. */
  @Method()
  async deselect() {
    this.selected = false;
  }

  /** Method to select the dropdown option. */
  @Method()
  async select() {
    this.selected = true;
  }

  /** Click event for the dropdown option. */
  @Event({
    eventName: 'sddsSelect',
    composed: true,
    cancelable: false,
    bubbles: true,
  })
  sddsSelect: EventEmitter<{
    selected: boolean;
    value: string;
  }>;

  /** Focus event for the dropdown option. */
  @Event({
    eventName: 'sddsFocus',
    composed: true,
    bubbles: true,
    cancelable: false,
  })
  sddsFocus: EventEmitter<FocusEvent>;

  /** Blur event for the dropdown option. */
  @Event({
    eventName: 'sddsBlur',
    composed: true,
    bubbles: true,
    cancelable: false,
  })
  sddsBlur: EventEmitter<FocusEvent>;

  connectedCallback = () => {
    this.parentElement =
      this.host.parentElement.tagName === 'SDDS-DROPDOWN-V2'
        ? (this.host.parentElement as HTMLSddsDropdownV2Element)
        : ((this.host.getRootNode() as ShadowRoot).host as HTMLSddsDropdownV2Element);
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
        this.parentElement.removeValue(this.value);
        this.selected = false;
        this.handleClick();
      }
    }
  };

  handleClick = () => {
    this.sddsSelect.emit({
      value: this.value,
      selected: this.selected,
    });
  };

  handleFocus = (event) => {
    this.sddsFocus.emit(event);
  };

  handleBlur = (event) => {
    this.sddsBlur.emit(event);
  };

  render() {
    return (
      <Host>
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
              onFocus={(event) => this.handleFocus(event)}
              onBlur={(event) => this.handleBlur(event)}
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
