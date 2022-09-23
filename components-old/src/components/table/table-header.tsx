import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-table-header',
  styleUrl: 'table.scss',
  shadow: true,
})
export class TableHeader {
  render() {
    return (
      <Host class="sdds-table__header">
        <slot></slot>
      </Host>
    );
  }
}
