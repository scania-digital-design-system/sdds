import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sdds-table',
  styleUrl: 'table.scss',
  shadow: true,
})

// eslint-disable-next-line import/prefer-default-export
export class Table {
  @Prop({ reflect: true }) tableTitle: string;

  @Prop({ reflect: true }) verticalDividers: boolean = true;

  @Prop({ reflect: true }) compactDesign: boolean = true;

  render() {
    return (
      <table
        class={{
          'sdds-table': true,
          'sdds-table-compact': this.compactDesign,
          'sdds-table-dividers': this.verticalDividers,
        }}
      >
        {this.tableTitle && (
          <caption class="sdds-table__title">{this.tableTitle}</caption>
        )}
        <thead class="sdds-table__header">
          <tr class="sdds-table__row">
            <th class="sdds-table__header-cell">Header</th>
            <th class="sdds-table__header-cell">Header</th>
            <th class="sdds-table__header-cell">Header</th>
            <th class="sdds-table__header-cell">Header</th>
          </tr>
        </thead>
        <tbody class="sdds-table__body">
          <tr class="sdds-table__row">
            <td class="sdds-table__body-cell">Text</td>
            <td class="sdds-table__body-cell">Text</td>
            <td class="sdds-table__body-cell">Text</td>
            <td class="sdds-table__body-cell">Text</td>
          </tr>
          <tr class="sdds-table__row">
            <td class="sdds-table__body-cell">Text</td>
            <td class="sdds-table__body-cell">Text</td>
            <td class="sdds-table__body-cell">Text</td>
            <td class="sdds-table__body-cell">Text</td>
          </tr>
          <tr class="sdds-table__row">
            <td class="sdds-table__body-cell">Text</td>
            <td class="sdds-table__body-cell">Text</td>
            <td class="sdds-table__body-cell">Text</td>
            <td class="sdds-table__body-cell">Text</td>
          </tr>
          <tr class="sdds-table__row">
            <td class="sdds-table__body-cell">Text</td>
            <td class="sdds-table__body-cell">Text</td>
            <td class="sdds-table__body-cell">Text</td>
            <td class="sdds-table__body-cell">Text</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
