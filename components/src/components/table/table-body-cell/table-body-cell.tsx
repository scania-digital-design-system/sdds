import { Component, h, Host, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'sdds-body-cell',
  styleUrl: 'table-body-cell.scss',
  shadow: true,
})
export class TableBodyCell {
  /** Value that will be presented as text inside a cell */
  @Prop({ reflect: true }) cellValue: string | number;

  /** Passing same cell key for all body cells which is used in head cell enables features of text align and hovering */
  @Prop({ reflect: true }) cellKey: any;

  @State() textAlign: string;

  @State() activeSorting: boolean = false;

  @State() verticalDividers: boolean = false;

  @State() compactDesign: boolean = false;

  @State() noMinWidth: boolean = false;

  @State() whiteBackground: boolean = false;

  @Listen('commonTableStylesEvent', { target: 'body' })
  commonTableStyleListener(event: CustomEvent<any>) {
    [
      this.verticalDividers,
      this.compactDesign,
      this.noMinWidth,
      this.whiteBackground,
    ] = event.detail;
  }

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
          'sdds-table__compact': this.compactDesign,
        }}
        style={{ textAlign: this.textAlign }}
      >
        {this.cellValue}
      </Host>
    );
  }
}
