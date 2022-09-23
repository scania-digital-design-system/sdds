import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-table-footer',
  styleUrl: 'table.scss',
  shadow: true,
})
export class TableFooter {
  render() {
    return (
      <Host class="sdds-table__footer">
        <slot></slot>
      </Host>
    );
  }
}
