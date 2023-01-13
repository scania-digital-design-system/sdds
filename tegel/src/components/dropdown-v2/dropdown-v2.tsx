import { Component, Host, h, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'sdds-dropdown-v2',
  styleUrl: 'dropdown-v2.scss',
  shadow: true,
})
export class SddsDropdownV2 {
  @Prop() state: 'none' | 'error' = 'none';

  @Prop() data: string = null;

  @State() parsedData: Array<{
    value: string;
    label: string;
    selected: boolean;
    disabled: boolean;
  }> = [];

  @Prop() size: 'sm' | 'md' | 'lg' = 'lg';

  @Prop() label: string = 'Placeholder';

  /** Controls position of label */
  @Prop() labelPosition: 'no-label' | 'inside' | 'outside' = 'outside';

  @Prop() placeholder: string;

  @Prop() open: boolean = false;

  @Prop({ reflect: true }) value: string;

  /** Direction that the dropdown will open. By default set to auto. */
  @Prop() openDirection: 'down' | 'up' | 'auto' = 'up';

  @State() selectionMade: boolean = false;

  @State() dropdownMenuSelector: HTMLElement;

  @Element() host: HTMLElement;

  children: Array<HTMLElement> = [];

  dropdownList: HTMLElement;

  selectedValueLabel: string;

  connectedCallback() {
    if (!this.data) {
      this.children = Array.from(this.host.children) as [HTMLSddsDropdownOptionV2Element];
      this.children.forEach((element: HTMLSddsDropdownOptionV2Element, index) => {
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
    this.open = !this.open;
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
        {this.labelPosition === 'outside' && <div class="label-outside">{this.label}</div>}
        <div class={`dropdown-button ${this.size} ${this.open ? 'open' : 'closed'}`}>
          {/* If label inside and no placeholder */}
          {this.labelPosition === 'inside' && !this.placeholder && (
            <div
              class={`
            label-inside
            label-as-placeholder
            ${this.size}
            ${this.selectionMade ? 'selected' : ''}
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
            value={this.selectedValueLabel ? this.selectedValueLabel : this.placeholder}
            placeholder={this.placeholder}
            class={`${this.size} ${this.labelPosition}`}
            onFocus={() => {}}
          ></input>
          <sdds-icon class={`${this.size}`} name="chevron_down" size="16px"></sdds-icon>
        </div>
        <div class={`dropdown-menu ${this.open ? 'open' : 'closed'} open-${this.openDirection}`}>
          <ul
            class={`${this.size}`}
            ref={(element) => (this.dropdownList = element as HTMLElement)}
          >
            {this.data &&
              this.parsedData.map((item, index) => (
                <sdds-dropdown-option-v2
                  size={this.size}
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
                ></sdds-dropdown-option-v2>
              ))}
            {!this.data && <slot></slot>}
          </ul>
        </div>
      </Host>
    );
  }
}
