import { Component, Host, h, Prop, State, Element, Watch } from '@stencil/core';

@Component({
  tag: 'sdds-dropdown-multiselect-v2',
  styleUrl: 'dropdown-multiselect-v2.scss',
  shadow: true,
})
export class DropdownMultiselectV2 {
  /** Error state for the component, */
  @Prop() error: boolean = false;

  /** Data is an array of objects that contains label and value that will be rendered as dropdown-options. */
  @Prop() data: string = null;

  /** The size of the component */
  @Prop() size: 'sm' | 'md' | 'lg' = 'lg';

  /** Label text */
  @Prop() label: string = 'Placeholder';

  /** Helper text in the bottom of dropdown */
  @Prop() helper: string = '';

  /** Controls position of label */
  @Prop() labelPosition: 'no-label' | 'inside' | 'outside' = 'outside';

  /** Placeholder for the dropdown */
  @Prop() placeholder: string;

  /** Open state of the dropdown */
  @Prop() open: boolean = false;

  /** The value of the dropdown - selected option value. */
  @Prop({ reflect: true }) value: Array<string> = [];

  /** The label of the selected value. */
  @Prop({ reflect: true }) valueLabels: Array<string> = [];

  /** Direction that the dropdown will open. By default set to auto. */
  @Prop() openDirection: 'down' | 'up' | 'auto' = 'up';

  @Prop() modeVariant: 'primary' | 'secondary' = 'primary';

  @State() selectionMade: boolean = false;

  @State() dropdownMenuSelector: HTMLElement;

  @State() parsedData: Array<{
    value: string;
    label: string;
    selected: boolean;
    disabled: boolean;
  }> = [];

  @Element() host: HTMLElement;

  children: Array<HTMLElement> = [];

  dropdownList: HTMLElement;

  @Watch('value')
  updatePropValue() {
    this.host.setAttribute('value', this.value.toString());
  }

  @Watch('valueLabels')
  updatePropValueLabels() {
    this.host.setAttribute('value-labels', this.valueLabels.toString());
  }

  connectedCallback() {
    if (!this.data) {
      this.children = Array.from(this.host.children) as [HTMLSddsDropdownOptionV2Element];
      this.children.forEach((element: HTMLSddsDropdownOptionV2Element) => {
        if (
          element.getAttribute('disabled') !== '' &&
          element.getAttribute('disabled') !== ' true'
        ) {
          element.addEventListener('click', () => {
            if (element.getAttribute('selected') !== 'true') {
              element.setAttribute('selected', 'true');
              this.value = [...this.value, element.getAttribute('value')];
              this.valueLabels = [...this.valueLabels, element.getAttribute('label')];
            } else {
              element.setAttribute('selected', 'false');
              this.value = this.value.filter((item) => item !== element.value);
              this.valueLabels = this.valueLabels.filter((item) => item !== element.label);
            }
            this.selectionMade = true;
          });
        }
      });
    }
    if (this.data) {
      this.parsedData = JSON.parse(this.data);
    }
  }

  handleSelect = (index: number) => {
    this.selectionMade = true;
    console.log(this.parsedData[index].selected);

    if (
      this.parsedData[index].selected === undefined ||
      this.parsedData[index].selected === false
    ) {
      this.parsedData = this.parsedData.map((item, itemIndex) => {
        if (index === itemIndex) {
          return {
            ...item,
            selected: true,
          };
        }
        return {
          ...item,
        };
      });
      this.valueLabels = [...this.valueLabels, this.parsedData[index].label];
      this.value = [...this.value, this.parsedData[index].value];
    } else {
      this.parsedData = this.parsedData.map((item, itemIndex) => {
        if (index === itemIndex) {
          return {
            ...item,
            selected: false,
          };
        }
        return {
          ...item,
        };
      });
      this.value = this.value.filter((item) => item !== this.parsedData[index].value);
      this.valueLabels = this.valueLabels.filter((item) => item !== this.parsedData[index].label);
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
      <Host class={this.size}>
        {this.labelPosition === 'outside' && <div class="label-outside">{this.label}</div>}
        <div class={`dropdown-button ${this.size} ${this.open ? 'open' : 'closed'}`}>
          {/* If label inside and no placeholder */}
          {this.labelPosition === 'inside' && !this.placeholder && (
            <div
              class={`
            label-inside
            label-as-placeholder
            ${this.size}
            ${this.value.length ? 'selected' : ''}
            `}
            >
              {this.label}
            </div>
          )}
          {/* If label inside and placeholder */}
          {this.labelPosition === 'inside' && this.placeholder && (
            <div class={`label-inside ${this.size}`}>{this.label}</div>
          )}
          <input
            onClick={() => {
              if (this.openDirection === 'auto') {
                this.getAutoOpenDirection();
              }
              this.open = !this.open;
            }}
            type="button"
            value={this.valueLabels.length ? this.valueLabels : this.placeholder}
            placeholder={this.placeholder}
            class={`
              ${this.size}
              ${this.labelPosition}
              ${this.error ? 'error' : ''}
              ${this.open ? 'open' : 'closed'}
              `}
          ></input>
          <sdds-icon
            onClick={() => {
              this.open = !this.open;
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
                <sdds-dropdown-multiselect-option-v2
                  label={item.label}
                  value={item.value}
                  selected={item.selected}
                  disabled={item.disabled}
                  onClick={() => {
                    if (!item.disabled) {
                      this.handleSelect(index);
                      this.selectionMade = true;
                    }
                  }}
                ></sdds-dropdown-multiselect-option-v2>
              ))}
            {!this.data && <slot></slot>}
          </ul>
        </div>
      </Host>
    );
  }
}
