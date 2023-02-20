import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sdds-core-header-menu-global',
  styleUrl: 'core-header-menu-global.scss',
  shadow: true,
})
export class CoreHeaderMenuGlobal {
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
