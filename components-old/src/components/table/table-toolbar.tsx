import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-table-toolbar',
  styleUrl: 'table.scss',
  shadow: true,
})
export class TableToolbar {
  render() {
    return (
      <Host class="sdds-table__upper-bar">
        <slot></slot>
      </Host>
    );
  }
}
