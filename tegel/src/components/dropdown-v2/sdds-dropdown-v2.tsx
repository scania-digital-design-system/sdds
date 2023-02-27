import { Component, Host, h, Element, State } from '@stencil/core';
import { HostElement, Method, Prop, Watch } from '@stencil/core/internal';
import { renderHiddenInput } from '../../utils/utils';

@Component({
  tag: 'sdds-dropdown-v2',
  styleUrl: 'sdds-dropdown-v2.scss',
  shadow: true,
})
export class SddsDropdownV2 {
  /** Name for the dropdowns input element. */
  @Prop() name: string;

  /** Sets the dropdown in a disabled state */
  @Prop() disabled: boolean;

  /** Helper text for the dropdown. */
  @Prop() helper: string;

  /** Label text for the dropdown. */
  @Prop() label: string;

  /** Label text position */
  @Prop() labelPosition: 'inside' | 'outside';

  @Prop() modeVariant: 'primary' | 'secondary';

  /** The direction the dropdown should open, auto if not specified. */
  @Prop() openDirection: 'up' | 'down' | 'auto' = 'auto';

  /** Placeholder text for the dropdown. */
  @Prop() placeholder: string;

  /** The size of the dropdown. */
  @Prop() size: 'sm' | 'md' | 'lg' = 'lg';

  /** Sets the dropdown in an error state */
  @Prop() error: boolean;

  /** Sets the dropdown in a success state */
  @Prop() success: boolean;

  /** Enables multiselect in the dropdown. */
  @Prop() multiselect: boolean;

  /** Enables filtration in the dropdown. */
  @Prop() filter: boolean;

  @State() open: boolean = true;

  @State() value: Array<string>;

  @State() valueLabels: Array<string>;

  @State() selected: boolean = false;

  @State() filterHasFocus: boolean = false;

  private filterElement;

  private filterResult: number;

  private dropdownList;

  private children: Array<HTMLSddsDropdownOptionV2Element>;

  /** @internal Method for setting the value of the dropdown. */
  @Method()
  async setValue(newValue: string, newValueLabel: string) {
    if (this.multiselect) {
      this.value = this.value ? (this.value = [...this.value, newValue]) : [newValue];
      this.valueLabels = this.valueLabels
        ? (this.valueLabels = [...this.valueLabels, newValueLabel])
        : [newValueLabel];
    } else {
      this.value = [newValue];
      this.valueLabels = [newValueLabel];
      this.children = this.children.map((element: HTMLSddsDropdownOptionV2Element) => {
        if (element.value !== newValue) {
          element.deselect();
        }
        return element;
      });
    }
  }

  /** @internal Method for removing the value of the dropdown. */
  @Method()
  async removeValue(oldValue: string, oldValueLabel: string) {
    if (this.multiselect) {
      if (this.value) {
        this.value = this.value.filter((item) => item !== oldValue);
        this.valueLabels = this.valueLabels.filter((item) => item !== oldValueLabel);
      }
    } else {
      this.value = null;
    }
  }

  /** Method for closing the dropdown. */
  @Method()
  async close() {
    this.open = false;
  }

  @Element() host: HostElement;

  connectedCallback = () => {
    this.children = Array.from(this.host.children) as Array<HTMLSddsDropdownOptionV2Element>;
    this.children.map((element) => {
      if (element.selected) {
        this.value = this.value ? (this.value = [...this.value, element.value]) : [element.value];
        this.valueLabels = this.valueLabels
          ? (this.valueLabels = [...this.valueLabels, element.innerHTML])
          : [element.innerHTML];
      }
      return element;
    });
  };

  componentDidRender() {
    this.getOpenDirection();
  }

  handleFilter = (event) => {
    const query = event.target.value.toLowerCase();
    this.filterResult = this.children.filter((element) => {
      if (!element.innerHTML.toLowerCase().includes(query.toLowerCase())) {
        element.setAttribute('hidden', '');
      } else {
        element.removeAttribute('hidden');
      }
      return !element.getAttribute('hidden');
    }).length;
  };

  @Watch('value')
  selectionMade() {
    this.selected = !!this.value;
  }

  getOpenDirection = () => {
    if (this.openDirection === 'auto') {
      const dropdownMenuHeight = this.dropdownList.offsetHeight;
      const distanceToBottom = this.host.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      if (distanceToBottom + dropdownMenuHeight + 57 > viewportHeight) {
        this.openDirection = 'up';
      } else {
        this.openDirection = 'down';
      }
    }
  };

  render() {
    renderHiddenInput(this.host, this.name, this.value?.toString(), this.disabled);
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
                {this.label && this.labelPosition === 'inside' && this.placeholder && (
                  <div class={`label-inside ${this.size}`}>{this.label}</div>
                )}
                {this.label && this.labelPosition === 'inside' && !this.placeholder && (
                  <div
                    class={`
                    label-inside-as-placeholder
                    ${this.size}
                    ${this.value?.length ? 'selected' : ''}
                    ${this.open ? 'focus' : ''}
                    `}
                  >
                    {this.label}
                  </div>
                )}
                <input
                  // eslint-disable-next-line no-return-assign
                  ref={(element) => (this.filterElement = element)}
                  type="text"
                  onInput={(event) => this.handleFilter(event)}
                  placeholder={this.placeholder}
                  value={this.value ? this.valueLabels : null}
                  name=""
                  id=""
                  onFocus={() => {
                    this.filterHasFocus = true;
                  }}
                  onBlur={() => {
                    //this.filterHasFocus = false;
                  }}
                />
              </div>
              <sdds-icon
                onClick={() => {
                  this.open = !this.open;
                }}
                class={`${this.open ? 'open' : 'closed'}`}
                name="chevron_down"
                size="16px"
              ></sdds-icon>
            </button>
          ) : (
            <button
              onClick={() => {
                this.open = !this.open;
              }}
              class={`
                ${this.value ? 'value' : 'placeholder'}
                ${this.open ? 'open' : 'closed'}
                `}
            >
              <div class={`value-wrapper ${this.size}`}>
                {this.label && this.labelPosition === 'inside' && this.placeholder && (
                  <div class={`label-inside ${this.size}`}>{this.label}</div>
                )}
                {this.label && this.labelPosition === 'inside' && !this.placeholder && (
                  <div
                    class={`
                    label-inside-as-placeholder
                    ${this.size}
                    ${this.value?.length ? 'selected' : ''}
                    `}
                  >
                    {this.label}
                  </div>
                )}
                <div class={`placeholder ${this.size}`}>
                  {this.valueLabels?.length ? this.valueLabels.join(', ') : this.placeholder}
                </div>
                <sdds-icon
                  class={`${this.open ? 'open' : 'closed'}`}
                  name="chevron_down"
                  size="16px"
                ></sdds-icon>
              </div>
            </button>
          )}
        </div>

        {/* DROPDOWN LIST */}
        <div
          ref={(element) => (this.dropdownList = element)}
          class={`dropdown-list
            ${this.open ? 'open' : 'closed'}
            ${this.openDirection}
            ${this.helper.length > 0 ? 'helper-offset' : ''}`}
        >
          <slot></slot>
          {this.filterResult === 0 && <div>No result</div>}
        </div>
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
