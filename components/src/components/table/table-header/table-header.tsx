import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-table-header',
  styleUrl: 'table-header.scss',
  shadow: true,
})
export class TableHeader {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
