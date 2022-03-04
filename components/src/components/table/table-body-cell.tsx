import { Component, h, Host, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'sdds-body-cell',
  styleUrl: 'table.scss',
  shadow: true,
})
export class TableBodyCell {
  @Prop({ reflect: true }) cellValue: string | number;

  @Prop({ reflect: true }) cellKey: any;

  @State() textAlign: string;

  @State() activeSorting: boolean = false;

  // Listen to sortColumnData from table-header-element
  @Listen('bodyCellData', { target: 'body' })
  updateTextAlign(event: CustomEvent<any>) {
    // Nice usage of array deconstruct
    const [keyValue, textDirection] = event.detail;
    if (this.cellKey === keyValue) {
      this.textAlign = textDirection;
    }
  }

  // Listen to sortColumnData from table-header-element
  @Listen('headKey', { target: 'body' })
  updateCellActiveState(event: CustomEvent<any>) {
    const keyValue = event.detail;
    this.activeSorting = this.cellKey === keyValue;
  }

  render() {
    return (
      <Host
        class={{
          'sdds-table__body-cell': true,
          'sdds-table__body-cell--hover': this.activeSorting,
        }}
        style={{ textAlign: this.textAlign }}
      >
        {this.cellValue}
      </Host>
    );
  }
}
