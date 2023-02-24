import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-button',
  styleUrl: 'header-button.scss',
  shadow: true,
})
export class HeaderButton {
  /** If the button should appear active. Can be used when the button is
   * triggering a dropdown, and the dropdown is open, for example. */
  @Prop() active: boolean = false;

  /** If the button should appear selected. */
  @Prop() selected: boolean = false;

  render() {
    return (
      <Host>
        <sdds-core-header-item
          class={{
            'state--active': this.active,
            'state--selected': this.selected,
          }}
        >
          <button>
            <slot></slot>
          </button>
        </sdds-core-header-item>
      </Host>
    );
  }
}
