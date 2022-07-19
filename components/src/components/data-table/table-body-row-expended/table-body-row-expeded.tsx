import { Component, h } from '@stencil/core';

@Component({
  tag: 'sdds-table-body-row-expendable',
  styleUrl: '../table/table.scss',
  shadow: false,
})
export class TableBodyRowExpandable {
  render() {
    const content = [
      <sdds-table-body-row>
        <slot />
      </sdds-table-body-row>,
      <sdds-table-body-row>
        <td class="sdds-table__body-cell sdds-u-p2" colSpan={4}>
          <slot name="johnny-test" />
        </td>
      </sdds-table-body-row>,
    ];
    return content;
  }
}
