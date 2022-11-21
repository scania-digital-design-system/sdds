import {
  Component,
  h,
  Prop,
  State,
  Element,
  Host,
  Event,
  EventEmitter,
  Listen,
} from '@stencil/core';

@Component({
  tag: 'sdds-dropdown-option',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class DropdownOption {
  @Element() host: HTMLElement;

  // Used as a fallback if value prop is not recognized to match handleClick
  @State() innerValue: string;

  /** Selected set to true if selected */
  @Prop() selected: boolean = false;

  /** Value is a unique string that will be used for application logic */
  @Prop({ reflect: true }) value: string;

  @Event({
    eventName: 'selectOption',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  selectOption: EventEmitter<any>;

  isMultiSelectOption: boolean;

  @Listen('mouseover')
  changeFocusHandler() {
    this.host.focus();
  }

  @Listen('mouseout')
  removeFocusHandler() {
    this.host.blur();
  }

  @Listen('keydown')
  onKeyDown(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this.selectOptionHandler({
        value: this.value,
        label: this.host.innerText,
        parent: this.host.parentNode,
      });
    }
  }

  @Listen('click')
  handleClick(ev) {
    if (this.isMultiSelectOption) {
      ev.stopPropagation();
    }
  }

  componentWillLoad() {
    this.innerValue = this.value;
    this.isMultiSelectOption = this.host
      .closest('sdds-dropdown')
      .classList.contains('sdds-dropdown-multiselect');
  }

  selectOptionHandler(value) {
    const listOptions = value.parent.childNodes;
    this.selectOption.emit(value);
    if (!this.isMultiSelectOption) {
      listOptions.forEach((optionEl) => {
        // TODO: fix and enable rule
        // eslint-disable-next-line no-param-reassign
        optionEl.selected = false;
      });
    }
    const optionCheckbox = this.host.shadowRoot.querySelector('input');

    if (this.selected) {
      this.selected = false;
      if (optionCheckbox) {
        optionCheckbox.checked = false;
      }
    } else {
      this.selected = true;
      if (optionCheckbox) {
        optionCheckbox.checked = true;
      }
    }
  }

  render() {
    return (
      <Host
        onClick={(ev) =>
          this.selectOptionHandler({
            value: this.value,
            label: this.host.innerText,
            parent: ev.target.parentNode,
          })
        }
        class={{
          selected: this.selected,
        }}
        tabindex="-1"
      >
        {this.isMultiSelectOption && (
          <div class="sdds-checkbox-item sdds-option-checkbox">
            <label class="sdds-form-label">
              <input class="sdds-form-input" type="checkbox" checked={this.selected} />
            </label>
          </div>
        )}
        <span class="sdds-option-label">
          <slot />
        </span>
        {!this.isMultiSelectOption && (
          <span class="sdds-option-checkmark">
            <svg
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 3L4 6L9 1"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        )}
      </Host>
    );
  }
}
