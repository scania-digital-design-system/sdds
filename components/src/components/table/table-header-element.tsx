import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sdds-table-head',
  styleUrl: 'table.scss',
  shadow: true,
})
export class TableHeaderElement {
  @Prop({ reflect: true }) columnKey: string;

  @Prop({ reflect: true }) columnTitle: string;

  render() {
    return (
      <th data-column-key={this.columnKey} class="sdds-table__header-cell">
        {this.columnTitle}
      </th>
    );
  }
}
