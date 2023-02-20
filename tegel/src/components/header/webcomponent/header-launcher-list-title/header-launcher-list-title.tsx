import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher-list-title',
  styleUrl: 'header-launcher-list-title.scss',
  shadow: true,
})
export class HeaderLauncherListTitle {
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
