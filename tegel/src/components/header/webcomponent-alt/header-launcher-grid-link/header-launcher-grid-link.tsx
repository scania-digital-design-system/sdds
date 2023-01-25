import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher-grid-link',
  styleUrl: 'header-launcher-grid-link.scss',
  shadow: true,
})
export class HeaderLauncherGridLink {
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
