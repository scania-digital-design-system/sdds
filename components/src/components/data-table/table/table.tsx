// https://stackoverflow.com/questions/63051941/how-to-pass-data-as-array-of-object-in-stencil-js
// https://medium.com/@scottmgerstl/passing-an-object-or-array-to-stencil-dd62b7d92641

import {
  Component,
  Prop,
  h,
  Host,
  Event,
  EventEmitter,
  Element,
  State,
} from '@stencil/core';

@Component({
  tag: 'sdds-table',
  styleUrl: 'table.scss',
  shadow: true,
})
export class Table {
  /** Enables style with vertical dividers between columns */
  @Prop({ reflect: true }) verticalDividers: boolean = false;

  /** Enables style where data-table toolbar, rows and footer are less high */
  @Prop({ reflect: true }) compactDesign: boolean = false;

  /** Enables to customise width on data-table columns */
  @Prop({ reflect: true }) noMinWidth: boolean;
  // TODO: Due to unknown reason, one of this items has to be left as is. If all are false, it seems like emitting is not properly done and it affects other events in data table. Try setting it and observe text-align set on  header cell

  /** Changes a colors of data data-table when used on white background */
  @Prop({ reflect: true }) whiteBackground: boolean = false;

  /** Enables multiselect feature of data-table */
  @Prop({ reflect: true }) enableMultiselect: boolean = false;

  /** Enables extended row feature of data-table */
  @Prop({ reflect: true }) enableExpandableRows: boolean = false;

  /** Enables table to take 100% available width with equal spacing of columns */
  @Prop({ reflect: true }) enableResponsive: boolean = false;

  @State() uniqueTableIdentifier: string = '';

  @Element() host: HTMLElement;

  /** Sends out status of multiselect feature to children components */
  @Event({
    eventName: 'enableMultiselectEvent',
    bubbles: true,
    cancelable: true,
    composed: true,
  })
  enableMultiselectEvent: EventEmitter<any>;

  /** Sends out status of different general styling changes to children components */
  @Event({
    eventName: 'commonTableStylesEvent',
    bubbles: true,
    composed: true,
    cancelable: true,
  })
  commonTableStyledEvent: EventEmitter<any>;

  /** Sends out status of multiselect feature to children components */
  @Event({
    eventName: 'enableExpandedRowsEvent',
    bubbles: true,
    cancelable: true,
    composed: true,
  })
  enableExpandedRowsEvent: EventEmitter<any>;

  componentWillLoad() {
    this.uniqueTableIdentifier = this.host.getAttribute('id');
  }

  componentDidRender() {
    this.commonTableStyledEvent.emit([
      this.uniqueTableIdentifier,
      this.verticalDividers,
      this.compactDesign,
      this.noMinWidth,
      this.whiteBackground,
    ]);
    this.enableMultiselectEvent.emit([
      this.uniqueTableIdentifier,
      this.enableMultiselect,
    ]);
    this.enableExpandedRowsEvent.emit([
      this.uniqueTableIdentifier,
      this.enableExpandableRows,
    ]);
  }

  render() {
    return (
      <Host class={{ 'sdds-table--responsive': this.enableResponsive }}>
        <table
          class={{
            'sdds-table': true,
            'sdds-table--compact': this.compactDesign,
            'sdds-table--divider': this.verticalDividers,
            'sdds-table--no-min-width': this.noMinWidth,
            'sdds-table--on-white-bg': this.whiteBackground,
            'sdds-table--responsive': this.enableResponsive,
          }}
        >
          <slot />
        </table>
      </Host>
    );
  }
}
