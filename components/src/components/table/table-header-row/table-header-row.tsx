import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-table-header-row',
  styleUrl: 'table.scss',
  shadow: true,
})
export class TableHeaderRow {
  render() {
    return (
      <Host class="sdds-table__row">
        <slot></slot>
      </Host>
    );
  }
}
