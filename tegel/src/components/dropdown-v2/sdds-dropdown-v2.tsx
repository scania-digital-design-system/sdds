import { Component, Host, h, Element, State } from '@stencil/core';
import { Event, EventEmitter, HostElement, Listen, Method, Prop } from '@stencil/core/internal';
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
  @Prop() disabled: boolean = false;

  /** Helper text for the dropdown. */
  @Prop() helper: string;

  /** Label text for the dropdown. */
  @Prop() label: string;

  /** Label text position */
  @Prop() labelPosition: 'inside' | 'outside';

  /** Mode variant of the component, based on current mode. */
  @Prop() modeVariant: 'primary' | 'secondary' = null;

  /** The direction the dropdown should open, auto if not specified. */
  @Prop() openDirection: 'up' | 'down' | 'auto' = 'auto';

  /** Placeholder text for the dropdown. */
  @Prop() placeholder: string;

  /** The size of the dropdown. */
  @Prop() size: 'sm' | 'md' | 'lg' = 'lg';

  /** Sets the dropdown in an error state */
  @Prop() error: boolean = false;

  /** Enables multiselect in the dropdown. */
  @Prop() multiselect: boolean = false;

  /** Enables filtration in the dropdown. */
  @Prop() filter: boolean = false;

  /** Text that is displayed if filter is used and there are no options that matches the search. */
  @Prop() noResultText: string = 'No result';

  /** Default value selected in the dropdown. */
  @Prop() defaultValue: string;

  // This has to accepts a string to work for vanilla HTML.
  /** Populate the dropdown via a JSON array */
  @Prop() options: Array<{ value: string; label: string; disabled: boolean }> | string;

  @State() open: boolean = false;

  @State() selection: Array<{ value: string; label: string }>;

  @State() filterResult: number;

  @State() filterFocus: boolean;

  @Element() host: HostElement;

  private parsedData: Array<{ value: string; label: string; disabled: boolean }>;

  private dropdownList: HTMLDivElement;

  private children: Array<HTMLSddsDropdownOptionV2Element>;

  /** Method that resets the dropdown. */
  @Method()
  async reset() {
    this.children.forEach((element) => element.deselect());
    this.handleChange();
  }

  /** Method for setting the value of the dropdown. */
  @Method()
  async setValue(newValue: string, newValueLabel: string) {
    if (this.multiselect) {
      this.selection = this.selection
        ? [...this.selection, { value: newValue, label: newValueLabel }]
        : [{ value: newValue, label: newValueLabel }];
    } else {
      this.selection = [{ value: newValue, label: newValueLabel }];
      this.children = this.children.map((element: HTMLSddsDropdownOptionV2Element) => {
        if (element.value !== newValue) {
          element.deselect();
        }
        return element;
      });
    }
    this.handleChange();
    return this.selection;
  }

  /** Method for removing a selected value in the dropdown. */
  @Method()
  async removeValue(oldValue: string) {
    if (this.multiselect) {
      this.children.forEach((element) => {
        if (element.value === oldValue) {
          element.deselect();
        }
      });
    } else {
      this.reset();
    }
    this.handleChange();
    return this.selection;
  }

  /** Method for closing the dropdown. */
  @Method()
  async close() {
    this.open = false;
  }

  /** Change event for the dropdown. */
  @Event({
    eventName: 'sddsChange',
    composed: true,
    bubbles: true,
    cancelable: false,
  })
  sddsChange: EventEmitter<{
    name: string;
    value: string;
  }>;

  /** Focus event for the dropdown. */
  @Event({
    eventName: 'sddsFocus',
    composed: true,
    bubbles: true,
    cancelable: false,
  })
  sddsFocus: EventEmitter<FocusEvent>;

  /** Blur event for the dropdown. */
  @Event({
    eventName: 'sddsBlur',
    composed: true,
    bubbles: true,
    cancelable: false,
  })
  sddsBlur: EventEmitter<FocusEvent>;

  /** Input event for the dropdown. */
  @Event({
    eventName: 'sddsInput',
    composed: true,
    bubbles: true,
    cancelable: false,
  })
  sddsInput: EventEmitter<InputEvent>;

  @Listen('click', { target: 'window' })
  onAnyClick(event: MouseEvent) {
    if (this.open) {
      // Source: https://lamplightdev.com/blog/2021/04/10/how-to-detect-clicks-outside-of-a-web-component/
      const isClickOutside = !event.composedPath().includes(this.host as any);
      if (isClickOutside) {
        this.open = false;
      }
    }
  }

  connectedCallback = () => {
    if (this.options) {
      this.parsedData = JSON.parse(this.options.toString());
    } else {
      this.children = Array.from(this.host.children) as Array<HTMLSddsDropdownOptionV2Element>;
    }
  };

  componentDidLoad() {
    if (this.options) {
      this.parsedData = JSON.parse(this.options.toString());
      this.children = Array.from(
        this.dropdownList.children,
      ) as Array<HTMLSddsDropdownOptionV2Element>;
    }
    if (this.defaultValue) {
      this.setDefaultOption();
    }
    if (this.openDirection === 'auto') {
      this.getOpenDirection();
    }
  }

  setDefaultOption = () => {
    this.children = this.children.map((element: HTMLSddsDropdownOptionV2Element) => {
      if (this.multiselect) {
        this.defaultValue.split(',').forEach((defaultValue) => {
          if (defaultValue === element.value) {
            element.select();
            this.selection = this.selection
              ? [...this.selection, { value: element.value, label: element.textContent }]
              : [{ value: element.value, label: element.textContent }];
          }
        });
      } else {
        if (this.defaultValue === element.value) {
          this.reset();
          element.select();
          this.selection = [{ value: element.value, label: element.textContent }];
        }
      }
      return element;
    });
    this.handleChange();
  };

  getOpenDirection = () => {
    const dropdownMenuHeight = this.dropdownList.offsetHeight;
    const distanceToBottom = this.host.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    if (distanceToBottom + dropdownMenuHeight + 57 > viewportHeight) {
      this.openDirection = 'up';
    } else {
      this.openDirection = 'down';
    }
  };

  handleFilter = (event) => {
    this.sddsInput.emit(event);
    const query = event.target.value.toLowerCase();
    this.filterResult = this.children.filter((element) => {
      if (!element.textContent.toLowerCase().includes(query.toLowerCase())) {
        element.setAttribute('hidden', '');
      } else {
        element.removeAttribute('hidden');
      }
      return !element.hasAttribute('hidden');
    }).length;
  };

  handleFocus = (event) => {
    this.sddsFocus.emit(event);
  };

  handleBlur = (event) => {
    this.sddsBlur.emit(event);
  };

  handleChange = () => {
    this.sddsChange.emit({
      name: this.name,
      value: this.selection?.map((item) => item.value).toString() ?? null,
    });
  };

  render() {
    renderHiddenInput(
      this.host,
      this.name,
      this.selection?.map((item) => item.value).toString(),
      this.disabled,
    );
    return (
      <Host class={`${this.modeVariant ? `sdds-mode-variant-${this.modeVariant}` : ''}`}>
        {this.label && this.labelPosition === 'outside' && (
          <div class={`label-outside ${this.disabled ? 'disabled' : ''}`}>{this.label}</div>
        )}
        <div class={`dropdown-select ${this.size} ${this.disabled ? 'disabled' : ''}`}>
          {this.filter ? (
            <div
              class={`filter ${this.filterFocus ? 'focus' : ''}
            ${this.disabled ? 'disabled' : ''}`}
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
                    ${this.selection?.length ? 'selected' : ''}
                    `}
                  >
                    {this.label}
                  </div>
                )}
                <input
                  class={`${this.labelPosition === 'inside' ? 'placeholder' : ''}`}
                  // eslint-disable-next-line no-return-assign
                  type="text"
                  placeholder={this.placeholder}
                  value={this.selection ? this.selection.map((item) => item.label) : null}
                  disabled={this.disabled}
                  onInput={(event) => this.handleFilter(event)}
                  onBlur={(event) => {
                    this.filterFocus = false;
                    this.handleBlur(event);
                  }}
                  onFocus={(event) => {
                    this.open = true;
                    this.filterFocus = true;
                    this.handleFocus(event);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Escape') {
                      this.open = false;
                    }
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
            </div>
          ) : (
            <button
              onClick={() => {
                this.open = !this.open;
              }}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  this.open = false;
                }
              }}
              class={`
                ${this.selection ? 'value' : 'placeholder'}
                ${this.open ? 'open' : 'closed'}
                `}
              disabled={this.disabled}
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
                    ${this.selection?.length ? 'selected' : ''}
                    `}
                  >
                    {this.label}
                  </div>
                )}
                <div class={`placeholder ${this.size}`}>
                  {this.selection?.length
                    ? this.selection.map((item) => item.label).join(', ')
                    : this.placeholder}
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
            ${this.size}
            ${this.open ? 'open' : 'closed'}
            ${this.openDirection}
            ${this.label && this.labelPosition === 'outside' ? 'label-outside' : ''}`}
        >
          {this.options ? (
            this.parsedData?.map((element, index: number) => (
              <sdds-dropdown-option-v2
                key={index}
                disabled={element.disabled}
                value={element.value}
                parentEl={this.host}
              >
                {element.label}
              </sdds-dropdown-option-v2>
            ))
          ) : (
            <slot></slot>
          )}
          {this.filterResult === 0 && (
            <div class={`no-result ${this.size}`}>{this.noResultText}</div>
          )}
        </div>
        {/* DROPDOWN LIST */}
        {this.helper && (
          <div class={`helper ${this.error ? 'error' : ''} ${this.disabled ? 'disabled' : ''}`}>
            {this.error && <sdds-icon name="error" size="16px"></sdds-icon>}
            {this.helper}
          </div>
        )}
      </Host>
    );
  }
}
