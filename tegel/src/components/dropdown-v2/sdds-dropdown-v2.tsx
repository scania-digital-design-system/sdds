import { Component, Host, h, Element, State } from '@stencil/core';
import { HostElement, Prop, Watch } from '@stencil/core/internal';
import { renderHiddenInput } from '../../utils/utils';

@Component({
  tag: 'sdds-dropdown-v2',
  styleUrl: 'sdds-dropdown-v2.scss',
  shadow: true,
})
export class SddsDropdownV2 {
  @Prop() name: string;

  @Prop() disabled: boolean;

  @Prop() helper: string;

  @Prop() label: string;

  @Prop() labelPosition: 'inside' | 'outside';

  @Prop() modeVariant: 'primary' | 'secondary';

  @Prop() openDirection: 'up' | 'down' | 'auto' = 'auto';

  @Prop() placeholder: string;

  @Prop() size: 'sm' | 'md' | 'lg' = 'lg';

  @Prop() error: boolean;

  @Prop() success: boolean;

  @Prop() multiselect: boolean;

  @Prop() filter: boolean;

  @State() value: string;

  @State() selected: boolean = false;

  @State() filterHasFocus: boolean = false;

  private filterElement;

  @Element() host: HostElement;

  @Watch('value')
  selectionMade() {
    this.selected = !!this.value;
    // TODO - ADD EVENT EMITTING HERE?
  }

  render() {
    renderHiddenInput(this.host, this.name, this.value, this.disabled);
    return (
      <Host>
        {this.label && this.labelPosition === 'outside' && (
          <div class="label-outside">{this.labelPosition}</div>
        )}
        <div class={`dropdown-select ${this.size}`}>
          {this.filter ? (
            <button
              class={`
              filter
              ${this.filterHasFocus ? 'focus' : ''}
              `}
              onClick={() => {
                this.filterElement.focus();
              }}
              onFocus={() => {
                this.filterElement.focus();
              }}
            >
              <div class="value-wrapper">
                <input
                  // eslint-disable-next-line no-return-assign
                  ref={(element) => (this.filterElement = element)}
                  type="text"
                  placeholder={this.placeholder}
                  name=""
                  id=""
                  onFocus={() => {
                    this.filterHasFocus = !this.filterHasFocus;
                  }}
                  onBlur={() => {
                    this.filterHasFocus = !this.filterHasFocus;
                  }}
                />
              </div>
              <sdds-icon name="chevron_down" size="16px"></sdds-icon>
            </button>
          ) : (
            <button
              class={`
          ${this.value ? 'value' : 'placeholder'}
          `}
            >
              <div class="value-wrapper">
                {this.label && this.labelPosition === 'inside' && this.placeholder && (
                  <div class={`label-inside ${this.size}`}>{this.label}</div>
                )}
                {this.label && this.labelPosition === 'inside' && !this.placeholder && (
                  <div
                    class={`
                label-inside-as-placeholder
                ${this.size}
                ${this.selected ? 'selected' : ''}
                `}
                  >
                    {this.label}
                  </div>
                )}
                {this.placeholder && (
                  <div class={`placeholder ${this.size}`}>{this.placeholder}</div>
                )}
              </div>
            </button>
          )}
        </div>

        {/* DROPDOWN LIST */}
        <slot></slot>
        {/* DROPDOWN LIST */}
        {this.helper && (
          <div class={`helper ${this.error ? 'error' : ''}`}>
            {this.error && <sdds-icon name="error" size="16px"></sdds-icon>}
            {this.helper}
          </div>
        )}
      </Host>
    );
  }
}
