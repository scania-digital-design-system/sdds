import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher-list',
  styleUrl: 'header-launcher-list.scss',
  shadow: true,
})
export class HeaderLauncherList {
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
