import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-header-toolbar',
  styleUrl: 'header-toolbar.scss',
  shadow: true,
})
export class SddsHeaderToolBar {
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
