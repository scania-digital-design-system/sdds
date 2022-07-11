import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-table-body',
  styleUrl: 'table-body.scss',
  shadow: true,
})
export class TableBody {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
