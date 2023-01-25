import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher-list-link',
  styleUrl: 'header-launcher-list-link.scss',
  shadow: true,
})
export class HeaderLauncherListLink {
  render() {
    return (
      <Host>
        <li>
          <button>
            <slot></slot>
          </button>
        </li>
      </Host>
    );
  }
}
