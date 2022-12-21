import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-header-inline-menu',
  styleUrl: 'header-inline-menu.scss',
  shadow: true,
})
export class SddsHeaderInlineMenu {
  render() {
    return (
      <Host>
        <ul>
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
