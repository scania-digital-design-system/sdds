import {
  Component,
  Element,
  h,
  Host,
  Listen,
  Prop,
  State,
} from '@stencil/core';

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

  @State() uniqueTableIdentifier: string = '';

  @Element() host: HTMLElement;

  componentWillLoad() {
    this.uniqueTableIdentifier = this.host
      .closest('sdds-table')
      .getAttribute('id');
    console.log(
      `Table body cell reports table ID is:${this.uniqueTableIdentifier}`
    );
  }

  @Listen('commonTableStylesEvent', { target: 'body' })
  commonTableStyleListener(event: CustomEvent<any>) {
    if (this.uniqueTableIdentifier === event.detail[0]) {
      [
        ,
        this.verticalDividers,
        this.compactDesign,
        this.noMinWidth,
        this.whiteBackground,
      ] = event.detail;
    }
  }

  // Listen to textAlignEvent from table-header-element
  @Listen('textAlignEvent', { target: 'body' })
  textAlignEventListener(event: CustomEvent<any>) {
    if (
      this.uniqueTableIdentifier === event.detail[0] &&
      this.cellKey === event.detail[1]
    ) {
      this.textAlign = event.detail[2];
    }
  }

  // Listen to headKey from table-header-element
  @Listen('headCellHoverEvent', { target: 'body' })
  headCellHoverEventListener(event: CustomEvent<any>) {
    const [receivedID, receivedKeyValue] = event.detail;

    if (this.uniqueTableIdentifier === receivedID) {
      this.activeSorting = this.cellKey === receivedKeyValue;
    }
  }

  render() {
    return (
      <Host
        class={{
          'sdds-table__body-cell': true,
          'sdds-table__body-cell--hover': this.activeSorting,
          'sdds-table__compact': this.compactDesign,
          'sdds-table--divider': this.verticalDividers,
          'sdds-table--no-min-width': this.noMinWidth,
        }}
        style={{ textAlign: this.textAlign }}
      >
        {this.cellValue}
      </Host>
    );
  }
}
