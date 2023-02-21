import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sdds-core-header-menu-lg',
  styleUrl: 'core-header-menu-lg.scss',
  shadow: true,
})
export class CoreHeaderMenuLg {
  render() {
    return (
      <Host>
        <div role="list">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
