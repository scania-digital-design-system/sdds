import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-table-body',
  styleUrl: 'table.scss',
  shadow: true,
})
export class TableBody {
  render() {
    return (
      <Host class="sdds-table__body">
        <slot></slot>
      </Host>
    );
  }
}
