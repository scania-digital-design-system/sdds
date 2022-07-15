import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-table-body-row',
  styleUrl: 'table.scss',
  shadow: true,
})
export class TableBodyRow {
  render() {
    return (
      <Host class="sdds-table__row">
        <slot></slot>
      </Host>
    );
  }
}
