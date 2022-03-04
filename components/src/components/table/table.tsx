import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sdds-table',
  styleUrl: 'table.scss',
  shadow: true,
})
export class Table {
  @Prop() tableName: string;

  render() {
    return <div>Hello table</div>;
  }
}
