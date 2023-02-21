import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-button',
  styleUrl: 'header-button.scss',
  shadow: true,
})
export class HeaderButton {
  @Prop() active: boolean = false;

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
