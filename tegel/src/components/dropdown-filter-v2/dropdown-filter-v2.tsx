import { Component, Host, h, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'sdds-dropdown-filter-v2',
  styleUrl: 'dropdown-filter-v2.scss',
  shadow: true,
})
export class DropdownFilterV2 {
  /** Error state for the component, */
  @Prop() error: boolean = false;

  /** Data is an array of objects that contains label and value that will be rendered as dropdown-options. */
  @Prop() data: string = null;

  /** The size of the component */
  @Prop() size: 'sm' | 'md' | 'lg' = 'lg';

  /** Label text */
  @Prop() label: string;

  /** Helper text in the bottom of dropdown */
  @Prop() helper: string;

  /** Placeholder for the dropdown */
  @Prop() placeholder: string;

  /** Open state of the dropdown */
  @Prop() open: boolean = false;

  /** The value of the dropdown - selected option value. */
  @Prop({ reflect: true }) value: string;

  /** Direction that the dropdown will open. By default set to auto. */
  @Prop() openDirection: 'down' | 'up' | 'auto' = 'down';

  @Prop() modeVariant: 'primary' | 'secondary' = 'primary';

  @Prop() noResultText: string = 'No result';

  @State() selectionMade: boolean = false;

  @State() noResult: boolean = false;

  @State() dropdownMenuSelector: HTMLElement;

  @State() parsedData: Array<{
    value: string;
    label: string;
    selected: boolean;
    disabled: boolean;
    hidden: boolean;
  }> = [];

  @Element() host: HTMLElement;

  children: Array<HTMLElement> = [];

  searchedList: Array<
    | HTMLElement
    | {
        value: string;
        label: string;
        selected: boolean;
        disabled: boolean;
        hidden: boolean;
      }
  > = [];

  @State() selectedValueLabel: string;

  dropdownList: HTMLElement;

  inputElement: HTMLInputElement;

  connectedCallback() {
    if (!this.data) {
      this.children = Array.from(this.host.children) as [HTMLSddsDropdownOptionV2Element];
      this.children.forEach((element: HTMLSddsDropdownOptionV2Element, index) => {
        if (
          element.getAttribute('selected') !== null ||
          element.getAttribute('selected') === 'false'
        ) {
          this.value = element.getAttribute('value');
          this.selectedValueLabel = element.getAttribute('label');

          element.setAttribute('selected', 'true');
        }

        if (
          element.getAttribute('disabled') !== '' &&
          element.getAttribute('disabled') !== ' true'
        ) {
          element.addEventListener('click', () => {
            element.setAttribute('selected', 'true');
            this.value = element.getAttribute('value');
            this.selectedValueLabel = element.getAttribute('label');

            this.selectionMade = true;
            this.children.forEach((el) => {
              if (this.children.indexOf(el) !== index) {
                el.removeAttribute('selected');
              }
            });
          });
        }
      });
    }

    if (this.data) {
      this.parsedData = JSON.parse(this.data);
      this.parsedData.forEach((dataElement, index) => {
        if (dataElement.selected) {
          this.value = this.parsedData[index].value;
          this.selectedValueLabel = this.parsedData[index].label;
        }
      });
    }
  }

  handleSelect = (index) => {
    this.parsedData = this.parsedData.map((item, itemIndex) => {
      if (itemIndex === index) {
        this.value = item.value;
        this.selectedValueLabel = item.label;

        this.selectionMade = true;
        this.host.setAttribute('value', item.value);
        return {
          value: this.parsedData[index].value,
          label: this.parsedData[index].label,
          disabled: this.parsedData[index].disabled,
          hidden: this.parsedData[index].hidden,
          selected: true,
        };
      }
      return {
        value: this.parsedData[itemIndex].value,
        label: this.parsedData[itemIndex].label,
        disabled: this.parsedData[itemIndex].disabled,
        hidden: this.parsedData[index].hidden,
        selected: false,
      };
    });
    this.open = !this.open;
  };

  handleInput = (event) => {
    if (!this.data) {
      const query = event.target.value;
      this.searchedList = this.children.filter((element: HTMLElement) => {
        if (query !== '') {
          if (!element.getAttribute('value').includes(query.toLowerCase())) {
            element.setAttribute('hidden', 'true');
          } else {
            element.removeAttribute('hidden');
          }
        } else {
          element.removeAttribute('hidden');
        }
        if (element.getAttribute('hidden') !== 'true') {
          return element;
        }
      });
      if (this.searchedList.length < 1) {
        this.noResult = true;
      } else {
        this.noResult = false;
      }
    } else {
      const query = event.target.value;
      this.parsedData = this.parsedData.map((element) => {
        if (query !== '') {
          return !element.value.includes(query.toLowerCase())
            ? {
                ...element,
                hidden: true,
              }
            : {
                ...element,
              };
        }
        return {
          ...element,
          hidden: false,
        };
      });

      if (this.parsedData.filter((element) => element.hidden === false).length < 1) {
        this.noResult = true;
      } else {
        this.noResult = false;
      }
    }
  };

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

  render() {
    return (
      <Host>
        {this.label && <div class="label">{this.label}</div>}
        <div class={`dropdown-button ${this.size} ${this.open ? 'open' : 'closed'} `}>
          <input
            onFocus={() => {
              this.open = true;
              if (this.openDirection === 'auto') {
                this.getAutoOpenDirection();
              }
            }}
            onInput={(event) => {
              this.handleInput(event);
            }}
            onKeyDown={(event) => {
              if (event.code === 'Escape') {
                this.open = false;
                this.inputElement.blur();
              }
            }}
            ref={(element) => (this.inputElement = element as HTMLInputElement)}
            value={this.selectedValueLabel}
            placeholder={this.placeholder}
            type="text"
            name="Test"
            id="test"
          />
          <sdds-icon
            onClick={() => {
              this.open = !this.open;
              if (this.open) {
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
          ${this.label ? 'label-outside' : ''}
          `}
        >
          <ul
            class={`${this.size}`}
            ref={(element) => (this.dropdownList = element as HTMLElement)}
          >
            {this.data &&
              this.parsedData.map((item, index) => (
                <sdds-dropdown-filter-option-v2
                  label={item.label}
                  value={item.value}
                  selected={item.selected}
                  hidden={item.hidden}
                  disabled={item.disabled}
                  onClick={() => {
                    if (!item.disabled) {
                      this.handleSelect(index);
                      this.selectionMade = true;
                    }
                  }}
                ></sdds-dropdown-filter-option-v2>
              ))}
            {this.data && this.noResult && (
              <li class={`no-result ${this.size}`}>{this.noResultText}</li>
            )}
            {!this.data && <slot></slot>}
            {!this.data && this.noResult && (
              <li class={`no-result ${this.size}`}>{this.noResultText}</li>
            )}
          </ul>
        </div>
      </Host>
    );
  }
}
