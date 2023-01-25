import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher-grid',
  styleUrl: 'header-launcher-grid.scss',
  shadow: true,
})
export class HeaderLauncherGrid {
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
