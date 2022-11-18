import { Component, Element, h, Host, Listen, Prop, State } from '@stencil/core';
import { TablePropsChangedEvent } from '../table/table';

const relevantTableProps: TablePropsChangedEvent['changed'] = [
  'verticalDividers',
  'compactDesign',
  'noMinWidth',
  'whiteBackground',
];
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

  /** Disables internal padding. Useful when passing other tegel to cell. */
  @Prop({ reflect: true }) disablePadding: boolean = false;

  @State() textAlignState: string;

  @State() activeSorting: boolean = false;

  @State() verticalDividers: boolean = false;

  @State() compactDesign: boolean = false;

  @State() noMinWidth: boolean = false;

  @State() whiteBackground: boolean = false;

  @State() uniqueTableIdentifier: string = '';

  @Element() host: HTMLElement;

  tableEl: HTMLSddsTableElement;

  @Listen('tablePropsChangedEvent', { target: 'body' })
  tablePropsChangedEventListener(event: CustomEvent<TablePropsChangedEvent>) {
    if (this.uniqueTableIdentifier === event.detail.tableId) {
      event.detail.changed
        .filter((changedProp) => relevantTableProps.includes(changedProp))
        .forEach((changedProp) => {
          if (typeof this[changedProp] === 'undefined') {
            throw new Error(`Table prop is not supported: ${changedProp}`);
          }
          this[changedProp] = event.detail[changedProp];
        });
    }
  }

  // Listen to headKey from data-table-header-element
  @Listen('headCellHoverEvent', { target: 'body' })
  headCellHoverEventListener(event: CustomEvent<any>) {
    const [receivedID, receivedKeyValue] = event.detail;

    if (this.uniqueTableIdentifier === receivedID) {
      this.activeSorting = this.cellKey === receivedKeyValue;
    }
  }

  // Listen to textAlignEvent from data-table-header-element
  @Listen('textAlignEvent', { target: 'body' })
  textAlignEventListener(event: CustomEvent<any>) {
    const [receivedID, receivedKey, receivedTextAlign] = event.detail;

    if (this.uniqueTableIdentifier === receivedID) {
      if (this.cellKey === receivedKey) {
        this.textAlignState = receivedTextAlign;
      }
    }
  }

  connectedCallback() {
    this.tableEl = this.host.closest('sdds-table');
  }

  componentWillLoad() {
    this.uniqueTableIdentifier = this.tableEl.getAttribute('id');

    relevantTableProps.forEach((tablePropName) => {
      this[tablePropName] = this.tableEl[tablePropName];
    });
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
          'sdds-table__body-cell--no-padding': this.disablePadding,
        }}
        style={{ textAlign: this.textAlignState }}
      >
        {this.cellValue}
        <slot />
      </Host>
    );
  }
}
