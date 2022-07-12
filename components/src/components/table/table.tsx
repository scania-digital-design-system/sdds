// https://stackoverflow.com/questions/63051941/how-to-pass-data-as-array-of-object-in-stencil-js
// https://medium.com/@scottmgerstl/passing-an-object-or-array-to-stencil-dd62b7d92641

import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-table',
  styleUrl: 'table.scss',
  shadow: true,
})
export class Table {
  /** Enables style with vertical dividers between columns */
  @Prop({ reflect: true }) verticalDividers: boolean = false;

  /** Enables style where table toolbar, rows and footer are less high */
  @Prop({ reflect: true }) compactDesign: boolean = false;

  /** Enables to customise width on table columns */
  @Prop({ reflect: true }) noMinWidth: boolean = false;

  /** Changes a colors of data table when used on white background */
  @Prop({ reflect: true }) whiteBackground: boolean = false;

  /** Enables multiselect feature of data-table */
  @Prop({ reflect: true }) multiSelect: boolean = false;

  render() {
    return (
      <Host>
        <table
          class={{
            'sdds-table': true,
            'sdds-table--compact': this.compactDesign,
            'sdds-table--divider': this.verticalDividers,
            'sdds-table--no-min-width': this.noMinWidth,
            'sdds-table--on-white-bg': this.whiteBackground,
            'sdds-table--multiselect': this.multiSelect,
          }}
        >
          <slot />
        </table>
      </Host>
    );
  }
}
