import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher-grid-title',
  styleUrl: 'header-launcher-grid-title.scss',
  shadow: true,
})
export class HeaderLauncherGridTitle {
  render() {
    return (
      <Host>
        <h3>
          <slot></slot>
        </h3>
      </Host>
    );
  }
}
