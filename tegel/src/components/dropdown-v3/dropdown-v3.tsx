import { Component, Host, h, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'sdds-dropdown-v3',
  styleUrl: 'dropdown-v3.scss',
  shadow: true,
})
export class DropdownV3 {
  /** The size of the component */
  @Prop() size: 'sm' | 'md' | 'lg' = 'lg';

  @Prop() modeVariant: 'primary' | 'secondary' = 'primary';

  /** Helper text in the bottom of dropdown */
  @Prop() helper: string = '';

  /** Label text */
  @Prop() label: string;

  /** Controls position of label */
  @Prop() labelPosition: 'no-label' | 'inside' | 'outside' = 'outside';

  /** Placeholder text */
  @Prop() placeholder: string;

  /** Error state for the component, */
  @Prop() error: boolean = false;

  /** Open state of the dropdown */
  @Prop() open: boolean = false;

  @Prop({ reflect: true }) value: Array<{
    value: string;
    label: string;
  }> = [];

  /** Data is an array of objects that contains label and value that will be rendered as dropdown-options. */
  @Prop() data: string = null;

  /** Direction that the dropdown will open. By default set to auto. */
  @Prop() openDirection: 'down' | 'up' | 'auto' = 'up';

  @Prop() multiselect: boolean;

  @Prop() filter: boolean;

  @Prop() noResultText: string = 'No result';

  @State() noResult: boolean = false;

  @State() parsedData: Array<{
    value: string;
    label: string;
    selected?: any;
    disabled?: boolean;
    hidden?: boolean;
  }> = [];

  @State() childElements: Array<HTMLElement> = [];

  @Element() host: HTMLElement;

  dropdownList: HTMLElement;

  inputElement: HTMLInputElement;

  getAutoOpenDirection = () => {
    const dropdownMenuHeight = this.dropdownList.offsetHeight;
    const distanceToBottom = this.host.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    if (distanceToBottom + dropdownMenuHeight + 57 > viewportHeight) {
      this.openDirection = 'up';
    } else {
      this.openDirection = 'down';
    }
  };

  // Could we use an earlier/later lc-method?
  connectedCallback() {
    if (!this.data) {
      this.childElements = Array.from(this.host.children) as [HTMLSddsDropdownOptionV2Element];
      this.childElements.forEach((element: HTMLSddsDropdownOptionV3Element, index) => {
        if (this.multiselect) {
          if (
            element.getAttribute('selected') !== null ||
            element.getAttribute('selected') === 'false'
          ) {
            this.value = [
              ...this.value,
              {
                value: element.getAttribute('value'),
                label: element.innerText,
              },
            ];
            element.setAttribute('selected', 'true');
          }
          if (
            element.getAttribute('disabled') !== '' &&
            element.getAttribute('disabled') !== ' true'
          ) {
            element.addEventListener('click', () => {
              if (
                element.getAttribute('selected') === null ||
                element.getAttribute('selected') === 'false'
              ) {
                this.value = [
                  ...this.value,
                  {
                    value: element.value,
                    label: element.innerText,
                  },
                ];
                element.setAttribute('selected', 'true');
                this.host.setAttribute('value', JSON.stringify(this.value));
              } else {
                element.setAttribute('selected', 'false');
                this.value = this.value.filter(
                  (item) =>
                    item.value !== element.getAttribute('value') &&
                    item.label !== element.innerText,
                );
                this.host.setAttribute('value', JSON.stringify(this.value));
              }
            });
          }
        } else {
          if (
            element.getAttribute('selected') !== null ||
            element.getAttribute('selected') === 'false'
          ) {
            this.value = [
              {
                value: element.getAttribute('value'),
                label: element.innerText,
              },
            ];

            element.setAttribute('selected', '');
          }
          if (
            element.getAttribute('disabled') !== '' &&
            element.getAttribute('disabled') !== ' true'
          ) {
            element.addEventListener('click', () => {
              element.setAttribute('selected', '');
              this.value = [
                {
                  value: element.getAttribute('value'),
                  label: element.innerText,
                },
              ];
              this.childElements.forEach((el) => {
                if (this.childElements.indexOf(el) !== index) {
                  el.removeAttribute('selected');
                }
              });
              this.host.setAttribute('value', JSON.stringify(this.value[0]));
            });
          }
          console.log('value', this.value);
        }
      });
    } else {
      this.parsedData = JSON.parse(this.data);
      if (!this.multiselect) {
        this.parsedData.forEach((dataElement, index) => {
          if (dataElement.selected === true || dataElement.selected === 'true') {
            this.value = [
              {
                value: this.parsedData[index].value,
                label: this.parsedData[index].label,
              },
            ];
            this.host.setAttribute('value', JSON.stringify(this.value[0]));
          }
        });
      } else {
        this.parsedData.forEach((dataElement, index) => {
          if (dataElement.selected) {
            if (!this.value) {
              this.value = [
                {
                  value: this.parsedData[index].value,
                  label: this.parsedData[index].label,
                },
              ];
            } else {
              this.value = [
                ...this.value,
                {
                  value: this.parsedData[index].value,
                  label: this.parsedData[index].label,
                },
              ];
            }
          }
        });
      }
    }
  }

  handleSelect = (index: number) => {
    if (this.multiselect) {
      if (
        this.parsedData[index].selected === undefined ||
        this.parsedData[index].selected === false
      ) {
        this.parsedData = this.parsedData.map((dataItem, itemIndex) => {
          if (index === itemIndex) {
            return {
              ...dataItem,
              selected: true,
            };
          }
          return {
            ...dataItem,
          };
        });
        this.value = [
          ...this.value,
          {
            value: this.parsedData[index].value,
            label: this.parsedData[index].label,
          },
        ];
        this.host.setAttribute('value', JSON.stringify(this.value));
      } else {
        this.parsedData = this.parsedData.map((dataItem, itemIndex) => {
          if (index === itemIndex) {
            return {
              ...dataItem,
              selected: false,
            };
          }
          return {
            ...dataItem,
          };
        });
        this.value = this.value.filter(
          (item) =>
            item.value !== this.parsedData[index].value &&
            item.label !== this.parsedData[index].label,
        );
        this.host.setAttribute('value', JSON.stringify(this.value));
      }
    } else {
      this.parsedData = this.parsedData.map((item, itemIndex) => {
        if (itemIndex === index) {
          this.value = [
            {
              value: item.value,
              label: item.label,
            },
          ];
          this.host.setAttribute('value', JSON.stringify(this.value[0]));
          return {
            value: this.parsedData[index].value,
            label: this.parsedData[index].label,
            disabled: this.parsedData[index].disabled,
            selected: true,
          };
        }
        return {
          value: this.parsedData[itemIndex].value,
          label: this.parsedData[itemIndex].label,
          disabled: this.parsedData[itemIndex].disabled,
          selected: false,
        };
      });
    }
  };

  handleFilter = (event) => {
    const query = event.target.value;
    if (!this.data) {
      if (query !== '') {
        this.childElements = this.childElements.map((childElement) => {
          if (
            childElement.getAttribute('value').toLowerCase().includes(query.toLowerCase()) ||
            childElement.innerText.toLowerCase().includes(query.toLowerCase())
          ) {
            childElement.removeAttribute('hidden');
          } else {
            childElement.setAttribute('hidden', 'true');
          }
          return childElement;
        });
        this.noResult = !this.childElements.some(
          (childElement) => !childElement.hasAttribute('hidden'),
        );
      } else {
        this.childElements = this.childElements.map((childElement) => {
          childElement.removeAttribute('hidden');
          return childElement;
        });
        this.noResult = false;
      }
    } else {
      this.parsedData = this.parsedData.map((element) => ({
        ...element,
        hidden: !(
          element.value.toLowerCase().includes(query.toLowerCase()) ||
          element.label.toLowerCase().includes(query.toLowerCase())
        ),
      }));
      this.noResult = !this.parsedData.some((item) => item.hidden === false);
    }
  };

  getLabels = () => {
    const labels = this.value.map((item) => item.label);
    return labels;
  };

  render() {
    return (
      <Host class={this.size}>
        {this.labelPosition === 'outside' && <div class="label-outside">{this.label}</div>}
        <div class={`dropdown-button ${this.size} ${this.open ? 'open' : 'closed'}`}>
          {this.labelPosition === 'inside' && !this.placeholder && !this.filter && (
            <div
              class={`
                label-inside label-as-placeholder
                ${this.size} 
                ${this.value[0] ? 'selected' : ''}`}
            >
              {this.label}
            </div>
          )}
          {this.labelPosition === 'inside' && this.placeholder && (
            <div class={`label-inside ${this.size}`}>{this.label}</div>
          )}
          {/* DEFAULT DROPDOWN */}
          {!this.multiselect && !this.filter && (
            <input
              onClick={() => {
                if (this.openDirection === 'auto') {
                  this.getAutoOpenDirection();
                }
                this.open = !this.open;
              }}
              type="button"
              value={this.value.length > 0 ? this.value[0].label : this.placeholder}
              class={`
                ${this.size}
                ${this.labelPosition}
                ${this.error ? 'error' : ''}
                ${this.open ? 'open' : 'closed'}
              `}
            ></input>
          )}
          {/* MULTISELECT DRODOWN */}
          {this.multiselect && !this.filter && (
            <input
              onClick={() => {
                if (this.openDirection === 'auto') {
                  this.getAutoOpenDirection();
                }
                this.open = !this.open;
              }}
              type="button"
              value={this.value.length > 0 ? this.getLabels().toString() : this.placeholder}
              class={`
              ${this.size}
              ${this.labelPosition}
              ${this.error ? 'error' : ''}
              ${this.open ? 'open' : 'closed'}
              `}
            ></input>
          )}
          {this.filter && (
            <input
              onFocus={() => {
                this.open = true;
                if (this.openDirection === 'auto') {
                  this.getAutoOpenDirection();
                }
              }}
              onInput={(event) => {
                this.handleFilter(event);
              }}
              onKeyDown={(event) => {
                if (event.code === 'Escape') {
                  this.open = false;
                  this.inputElement.blur();
                }
              }}
              ref={(element) => (this.inputElement = element as HTMLInputElement)}
              placeholder={this.placeholder}
              value={this.value.length > 0 ? this.getLabels().toString() : null}
              type="text"
              name="Test"
              id="test"
              class={`
              ${this.size}
              ${this.labelPosition}
              ${this.error ? 'error' : ''}
              ${this.open ? 'open' : 'closed'}
              `}
            />
          )}
          <sdds-icon
            onClick={() => {
              this.open = !this.open;
              if (this.open && this.filter) {
                this.inputElement.focus();
              }
            }}
            class={`${this.size}`}
            name="chevron_down"
            size="16px"
          ></sdds-icon>
        </div>
        {this.helper && (
          <div class={`helper ${this.error ? 'error' : ''}`}>
            {this.error && <sdds-icon name="error" size="16px"></sdds-icon>}
            {this.helper}
          </div>
        )}
        <div
          class={`
          dropdown-menu
          ${this.open ? 'open' : 'closed'}
          open-${this.openDirection}
          ${this.helper || this.error ? 'helper-bottom' : ''}
          ${this.labelPosition === 'outside' ? 'label-outside' : ''}
          `}
        >
          <ul
            class={`${this.size}`}
            ref={(element) => (this.dropdownList = element as HTMLElement)}
          >
            {this.data &&
              this.parsedData.map((item, index) => (
                <sdds-dropdown-option-v3
                  hidden={item.hidden}
                  value={item.value}
                  selected={item.selected}
                  disabled={item.disabled}
                  onClick={() => {
                    if (!item.disabled) {
                      this.handleSelect(index);
                    }
                  }}
                >
                  {item.label}
                </sdds-dropdown-option-v3>
              ))}
            {this.filter && this.noResult && (
              <li class={`no-result ${this.size}`}>{this.noResultText}</li>
            )}
            {!this.data && <slot></slot>}
          </ul>
        </div>
      </Host>
    );
  }
}
