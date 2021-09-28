import {
  Component,
  h,
  Prop,
  State,
  Element,
  Listen,
  Host,
  Event,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'sdds-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class Dropdown {
  textInput?: HTMLInputElement;

  /** Placeholder text for dropdown with no selected item */
  @Prop() placeholder: string;

  /** Add the value of the option to set it as default */
  @Prop() defaultOption: string;

  /** Add the value of the option to set it as default */
  @Prop() disabled: boolean;

  /** `default`, `multiselect`, `filter`, `nested` */
  @Prop() type: string = 'default';

  /** `large` (default), `small`, `medium` */
  @Prop() size: string = 'large';

  /** Set to true to make the width following the label text length */
  @Prop() inline: boolean = false;

  /** Position of label: `no-label` (default), `inside`, `outside` */
  @Prop() labelPosition: string = 'no-label';

  /** Label text for label inside & outside */
  @Prop() label: string;

  /** Support `error` state */
  @Prop() state: string = 'default';

  /** Add helper text in the bottom of dropdown */
  @Prop() helper: string = '';

  @State() items: Array<any> = [];

  @State() open: boolean = false;

  @State() node: HTMLElement;

  @State() selected: string = '';

  @State() uuid;

  @Element() host: HTMLElement;

  componentWillLoad() {
    // If default option is set, update the default selected value
    // this.host.children is a HTMLCollection type, cannot use forEach
    if (this.defaultOption) {
      for (let i = 0; i < this.host.children.length; i++) {
        const el = this.host.children[i];
        if (el['value'] === this.defaultOption) {
          this.selected = el.innerHTML;
          el.setAttribute('selected', 'true');
        }
      }
    }
  }

  componentDidLoad() {
    // generate UUID for unique event listener
    this.uuid = new Date().getTime() + Math.random();
  }

  @Listen('click', { target: 'document' })
  handleDocClick(ev) {
    // To stop bubble click
    ev.stopPropagation();

    const target = ev ? ev.composedPath()[0] : window.event.target[0];
    if (this.node !== undefined && this.node.contains(target)) {
      if (typeof this.textInput !== 'undefined' || this.textInput === null) {
        this.textInput.focus();
      }
      this.open = !this.open;
    } else {
      this.open = false;
    }
  }

  handleClick(id) {
    if (id !== this.uuid) this.open = false;
  }

  @Listen('selectOption')
  selectOptionHandler(event: CustomEvent<any>) {
    this.selected = event.detail.label;
    this.open = false;
  }

  @Event({
    eventName: 'inputSearch',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  inputSearch: EventEmitter<any>;

  handleSearch(ev) {
    const searchTerm = ev.target.value;
    this.inputSearch.emit(searchTerm);
    this.open = true;
  }

  render() {
    return (
      <Host
        class={{
          'is-open': this.open,
          'sdds-dropdown-inline': this.inline,
          'is-selected': this.selected.length > 0,
          'is-error': this.state === 'error',
        }}
      >
        <div class={`sdds-dropdown sdds-dropdown-${this.size}`}>
          {this.labelPosition === 'outside' && this.label.length > 0 ? (
            <span class="sdds-dropdown-label-outside">{this.label}</span>
          ) : (
            ''
          )}
          <button
            class={`sdds-dropdown-toggle ${
              this.type === 'filter' ? 'is-filter' : ''
            }`}
            type="button"
            onClick={() => this.handleClick(this.uuid)}
            ref={(node) => (this.node = node)}
          >
            <div class="sdds-dropdown-label">
              {this.labelPosition === 'inside' && this.selected.length > 0 ? (
                <span class="sdds-dropdown-label-inside">{this.label}</span>
              ) : (
                ''
              )}
              {this.type === 'filter' ? (
                <input
                  ref={(inputEl) =>
                    (this.textInput = inputEl as HTMLInputElement)
                  }
                  class="sdds-dropdown-filter"
                  type="text"
                  placeholder={this.placeholder}
                  value={this.selected}
                  onInput={(event) => this.handleSearch(event)}
                />
              ) : (
                <span class="sdds-dropdown-label-main">
                  {this.selected.length > 0 ? this.selected : this.placeholder}
                </span>
              )}
            </div>
            <svg
              class="sdds-dropdown-arrow"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="sdds-dropdown-menu">
            <slot />
          </div>
        </div>
        <span class="sdds-dropdown-helper">{this.helper}</span>
      </Host>
    );
  }
}
