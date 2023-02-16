import {
  Component,
  Prop,
  State,
  Element,
  h,
  Listen,
  Watch,
  Event,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'sdds-dropdown-v2',
  styleUrl: 'dropdown-v2.scss',
  shadow: false,
  scoped: true,
})
export class DropdownV2 {
  /** ID for the dropdown.
   *
   * **NOTE**: If you're listening for dropdown events you need to set this ID yourself to identify the dropdown, as the default ID is random and will be different every time.
   */
  @Prop() dropdownId: string = crypto.randomUUID();

  /** The name for the dropdowns input element. */
  @Prop() name: string;

  /** The size of the component */
  @Prop() size: 'sm' | 'md' | 'lg' = 'lg';

  /** Variant of the component based on current mode. */
  @Prop() modeVariant: 'primary' | 'secondary' = null;

  /** Helper text in the bottom of dropdown */
  @Prop() helper: string;

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

  /** Direction that the dropdown will open. By default set to auto. */
  @Prop() openDirection: 'down' | 'up' | 'auto' = 'up';

  /** Data is an array of objects that contains label and value that will be rendered as dropdown-options. */
  @Prop() data: string;

  /** Adds multiselect ability to component. */
  @Prop() multiselect: boolean;

  /** Adds filter ability to component. */
  @Prop() filter: boolean;

  /** If filter option is true, this is the text displayed when the search returns no options. */
  @Prop() noResultText: string = 'No result';

  /** Specifies the height of the dropdown. Auto if not defined. */
  @Prop() dropdownHeight: string;

  @State() value: Array<{
    value: string;
    label: string;
  }>;

  @State() noResult: boolean = false;

  @State() dataChildElements: Array<{
    value: string;
    label: string;
    selected?: any;
    disabled?: boolean;
    hidden?: boolean;
  }>;

  @State() childElements: Array<HTMLElement>;

  @State() tabIndex: number = -1;

  @State() focus: boolean = false;

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

  setMultiselectValue = (newValue: { value: string; label: string }) => {
    this.value = this.value ? [...this.value, newValue] : [newValue];
  };

  setSingleSelectValue = (newValue: { value: string; label: string }) => {
    this.value = [newValue];
  };

  handleChildElementMultiselectSelection = (element: HTMLSddsDropdownOptionV2Element) => {
    if (element.hasAttribute('selected') && element.getAttribute('selected') !== 'false') {
      this.setMultiselectValue({
        value: element.getAttribute('value'),
        label: element.getAttribute('label'),
      });
      element.setAttribute('selected', '');
    }
    if (element.getAttribute('disabled') !== '' && element.getAttribute('disabled') !== ' true') {
      this.addEventHandler(element);
    }
  };

  handleChildElementSelection = () => {
    this.childElements = Array.from(this.host.children) as [HTMLSddsDropdownOptionV2Element];
    this.childElements.forEach((element: HTMLSddsDropdownOptionV2Element, index) => {
      if (this.multiselect) {
        this.handleChildElementMultiselectSelection(element);
      } else {
        if (
          element.getAttribute('selected') !== null ||
          element.getAttribute('selected') === 'false'
        ) {
          element.setAttribute('selected', '');
          this.setSingleSelectValue({
            value: element.getAttribute('value'),
            label: element.getAttribute('label'),
          });
        }
        if (
          element.getAttribute('disabled') !== '' &&
          element.getAttribute('disabled') !== ' true'
        ) {
          this.addEventHandler(element, index);
        }
      }
    });
  };

  handleDataElementSelection = () => {
    this.dataChildElements = JSON.parse(this.data);
    if (this.multiselect) {
      this.dataChildElements.forEach((dataElement, index) => {
        if (dataElement.selected) {
          this.setMultiselectValue({
            value: this.dataChildElements[index].value,
            label: this.dataChildElements[index].label,
          });
        }
      });
    } else {
      this.dataChildElements.forEach((dataElement, index) => {
        if (dataElement.selected === true || dataElement.selected === 'true') {
          this.setSingleSelectValue({
            value: this.dataChildElements[index].value,
            label: this.dataChildElements[index].label,
          });
          this.host.setAttribute('value', JSON.stringify(this.value[0]));
        }
      });
    }
  };

  addEventHandler = (element: HTMLSddsDropdownOptionV2Element, index?: number) => {
    if (this.multiselect) {
      element.addEventListener('checkboxChange', () => {
        this.addMultiSelectEventListener(element);
      });
    } else {
      element.addEventListener('click', () => {
        this.addSingleSelectEventListener(element, index);
      });
    }
  };

  addEventListenerForCheckbox = (element: HTMLSddsDropdownOptionV2Element) => {
    if (element.hasAttribute('selected') && element.getAttribute('selected') !== 'false') {
      element.removeAttribute('selected');
      this.value = this.value.filter(
        (item) =>
          item.value !== element.getAttribute('value') &&
          item.label !== element.getAttribute('label'),
      );
      this.host.setAttribute('value', JSON.stringify(this.value));
    } else {
      element.setAttribute('selected', '');
      this.setMultiselectValue({
        value: element.value,
        label: element.getAttribute('label'),
      });
      this.host.setAttribute('value', JSON.stringify(this.value));
    }
  };

  addMultiSelectEventListener = (element: HTMLSddsDropdownOptionV2Element) => {
    if (element.hasAttribute('selected') && element.getAttribute('selected') !== 'false') {
      element.removeAttribute('selected');
      this.value = this.value.filter(
        (item) =>
          item.value !== element.getAttribute('value') &&
          item.label !== element.getAttribute('label'),
      );
      this.host.setAttribute('value', JSON.stringify(this.value));
    } else {
      element.setAttribute('selected', '');
      this.setMultiselectValue({
        value: element.value,
        label: element.getAttribute('label'),
      });
      this.host.setAttribute('value', JSON.stringify(this.value));
    }
  };

  addSingleSelectEventListener = (element: HTMLSddsDropdownOptionV2Element, index: number) => {
    element.setAttribute('selected', '');
    this.value = [
      {
        value: element.getAttribute('value'),
        label: element.getAttribute('label'),
      },
    ];
    this.childElements.map((childElement, childElementIndex) => {
      if (childElementIndex !== index) {
        childElement.removeAttribute('selected');
      }
      return childElement;
    });
  };

  connectedCallback() {
    if (this.data) {
      this.handleDataElementSelection();
    } else {
      this.handleChildElementSelection();
    }
  }

  @Listen('keydown')
  keyDown(event: KeyboardEvent) {
    if (this.open) {
      switch (event.key) {
        case 'ArrowDown':
          if (this.tabIndex < this.childElements.length - 1) {
            this.tabIndex++;
          } else {
            this.tabIndex = 0;
          }
          break;
        case 'ArrowUp':
          if (this.tabIndex > 0) {
            this.tabIndex--;
          } else {
            this.tabIndex = this.childElements.length - 1;
          }
          break;
        case 'Escape':
          this.open = false;
          break;
        default:
          break;
      }
      this.childElements[this.tabIndex]?.getElementsByTagName('button')[0]?.focus();
    }
  }

  handleChangeSelection(checked: any, index: number) {
    this.dataChildElements = this.dataChildElements.map((dataElement, elementIndex) => ({
      ...dataElement,
      selected: index === elementIndex ? checked : dataElement.selected,
    }));

    if (checked) {
      this.value = [
        ...this.value,
        {
          value: this.dataChildElements[index].value,
          label: this.dataChildElements[index].label,
        },
      ];
    } else {
      this.value = this.value.filter(
        (item) =>
          item.value !== this.dataChildElements[index].value &&
          item.label !== this.dataChildElements[index].label,
      );
    }
  }

  handleSelect = (index: number) => {
    if (this.multiselect) {
      if (
        this.dataChildElements[index].selected === undefined ||
        this.dataChildElements[index].selected === false
      ) {
        this.dataChildElements[index].selected = true;
        this.dataChildElements = this.dataChildElements.map((dataItem, itemIndex) => ({
          ...dataItem,
          selected: index === itemIndex ? true : dataItem.selected,
        }));
        this.value = [
          ...this.value,
          {
            value: this.dataChildElements[index].value,
            label: this.dataChildElements[index].label,
          },
        ];
        this.host.setAttribute('value', JSON.stringify(this.value));
      } else {
        this.dataChildElements = this.dataChildElements.map((dataItem, itemIndex) => ({
          ...dataItem,
          selected: index === itemIndex ? false : dataItem.selected,
        }));
        this.value = this.value.filter(
          (item) =>
            item.value !== this.dataChildElements[index].value &&
            item.label !== this.dataChildElements[index].label,
        );
        this.host.setAttribute('value', JSON.stringify(this.value));
      }
    } else {
      this.dataChildElements = this.dataChildElements.map((item, itemIndex) => {
        if (itemIndex === index) {
          this.value = [
            {
              value: item.value,
              label: item.label,
            },
          ];
          this.host.setAttribute('value', JSON.stringify(this.value[0]));
          return {
            value: this.dataChildElements[index].value,
            label: this.dataChildElements[index].label,
            disabled: this.dataChildElements[index].disabled,
            selected: true,
          };
        }
        return {
          value: this.dataChildElements[itemIndex].value,
          label: this.dataChildElements[itemIndex].label,
          disabled: this.dataChildElements[itemIndex].disabled,
          selected: false,
        };
      });
    }
  };

  handleFilter = (event) => {
    const query = event.target.value;
    if (query !== '') {
      if (this.data) {
        this.dataChildElements = this.dataChildElements.map((element) => ({
          ...element,
          hidden: !(
            element.value.toLowerCase().includes(query.toLowerCase()) ||
            element.label.toLowerCase().includes(query.toLowerCase())
          ),
        }));
        this.noResult = !this.dataChildElements.some((item) => item.hidden === false);
      } else {
        this.childElements = this.childElements.map((childElement) => {
          if (
            childElement.getAttribute('value').toLowerCase().includes(query.toLowerCase()) ||
            childElement.getAttribute('label').toLowerCase().includes(query.toLowerCase())
          ) {
            childElement.removeAttribute('hidden');
          } else {
            childElement.setAttribute('hidden', '');
          }
          return childElement;
        });
        this.noResult = !this.childElements.some((childElement) => childElement.hidden === false);
      }
    } else {
      this.childElements = this.childElements.map((childElement) => {
        childElement.removeAttribute('hidden');
        return childElement;
      });
      this.noResult = false;
    }
  };

  getValue = () => {
    if (this.filter && !this.multiselect) {
      return this.value?.length > 0 ? this.value.map((item) => item.label).toString() : null;
    }
    if (this.multiselect && this.filter) {
      return this.value?.length > 0 ? this.value.map((item) => item.label).toString() : null;
    }
    if (this.multiselect) {
      return this.value?.length > 0
        ? this.value.map((item) => item.label).toString()
        : this.placeholder;
    }
    if (!this.filter && !this.multiselect) {
      return this.value?.length > 0 ? this.value[0].label : this.placeholder;
    }
    throw new Error('Oops.. something went wrong.');
  };

  getDropdownHeight = () => {
    if (this.childElements && this.childElements.length > 7) {
      switch (this.size) {
        case 'lg':
          return '420px';
        case 'md':
          return '360px';
        case 'sm':
          return '300px';
        default:
          return null;
      }
    } else {
      return null;
    }
  };

  @Event({
    eventName: 'dropdownSelect',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  dropdownSelect: EventEmitter<{
    dropdownId: string;
    value: Array<{
      value: string;
      label: string;
    }>;
  }>;

  @Watch('value')
  watchValue() {
    this.dropdownSelect.emit({
      dropdownId: this.dropdownId,
      value: this.value,
    });
  }

  render() {
    return (
      <div class={`sdds-dropdown-webcomponent ${this.size} sdds-mode-variant-${this.modeVariant}`}>
        {this.labelPosition === 'outside' && <div class="label-outside">{this.label}</div>}
        <div
          class={`
          dropdown-button
          ${this.size}
          ${this.open ? 'open' : 'closed'}
          ${this.focus ? 'focus' : ''}
          `}
        >
          {this.labelPosition === 'inside' && !this.placeholder && !this.filter && (
            <div
              class={`
                label-inside label-as-placeholder
                ${this.size} 
                ${this.value ? 'selected' : ''}`}
            >
              {this.label}
            </div>
          )}
          {this.labelPosition === 'inside' && this.placeholder && (
            <div class={`label-inside ${this.size}`}>{this.label}</div>
          )}
          <input
            onKeyDown={(event) => {
              if (event.code === 'Escape') {
                this.open = false;
                this.inputElement.blur();
              }
            }}
            onInput={(event) => {
              if (this.filter) {
                this.handleFilter(event);
              }
            }}
            onClick={() => {
              if (!this.filter) {
                if (this.openDirection === 'auto') {
                  this.getAutoOpenDirection();
                }
                this.open = !this.open;
              }
            }}
            onFocus={() => {
              if (this.filter) {
                this.open = true;
              } else {
                this.focus = !this.focus;
              }
            }}
            onBlur={() => {
              this.focus = !this.focus;
            }}
            name={this.name}
            id={this.dropdownId}
            ref={(element) => (this.inputElement = element as HTMLInputElement)}
            type={this.filter ? 'text' : 'button'}
            value={this.getValue()}
            placeholder={this.placeholder}
            class={`
                ${this.size}
                ${this.labelPosition}
                ${this.error ? 'error' : ''}
                ${this.open ? 'open' : 'closed'}
                ${!this.value ? 'placeholder' : ''}
              `}
          ></input>
          <sdds-icon
            onClick={() => {
              if (!this.open) {
                this.inputElement.focus();
              } else {
                this.open = !this.open;
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
          <div
            role="listbox"
            aria-multiselectable={this.multiselect}
            aria-labelledby={this.dropdownId}
            class={`${this.size}`}
            ref={(element) => (this.dropdownList = element as HTMLElement)}
            style={{
              maxHeight: this.dropdownHeight ? this.dropdownHeight : this.getDropdownHeight(),
            }}
          >
            {this.data &&
              this.dataChildElements.map((item, index) => (
                <sdds-dropdown-option-v2
                  hidden={item.hidden}
                  value={item.value}
                  label={item.label}
                  selected={item.selected}
                  disabled={item.disabled}
                  onClick={() => {
                    if (!this.multiselect) {
                      this.handleSelect(index);
                    }
                  }}
                  onChange={(event: any) => {
                    this.handleChangeSelection(event.target.checked, index);
                  }}
                ></sdds-dropdown-option-v2>
              ))}
            {this.filter && this.noResult && (
              <li class={`no-result ${this.size}`}>{this.noResultText}</li>
            )}
            {!this.data && <slot></slot>}
          </div>
        </div>
      </div>
    );
  }
}
