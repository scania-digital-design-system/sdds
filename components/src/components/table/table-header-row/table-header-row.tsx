import {
  Component,
  h,
  Host,
  State,
  Event,
  EventEmitter,
  Listen,
} from '@stencil/core';

@Component({
  tag: 'sdds-table-header-row',
  styleUrl: 'table-header-row.scss',
  shadow: true,
})
export class TableHeaderRow {
  @State() enableMultiselectHeaderRow: boolean = false;

  @State() mainCheckboxSelected: boolean = false;

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

  /** Send status of main checkbox in header to the parent, sdds-table component */
  @Event({
    eventName: 'headRowToTable',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  headRowToTable: EventEmitter<boolean>;

  headCheckBoxClicked(event) {
    this.mainCheckboxSelected = event.currentTarget.checked;
    this.headRowToTable.emit(this.mainCheckboxSelected);
  }

  @Listen('tableToHeaderRow', { target: 'body' })
  tableToHeaderRowListener(event: CustomEvent<boolean>) {
    this.mainCheckboxSelected = event.detail;
  }

  @Listen('enableMultiselectEvent', { target: 'body' })
  enableMultiselectEventListener(event: CustomEvent<boolean>) {
    this.enableMultiselectHeaderRow = event.detail;
  }

  render() {
    return (
      <Host class={this.compactDesign ? 'sdds-table--compact' : ''}>
        {this.enableMultiselectHeaderRow && (
          <th class="sdds-table__header-cell sdds-table__header-cell--checkbox">
            <div class="sdds-checkbox-item">
              <label class="sdds-form-label sdds-form-label--data-table">
                <input
                  class="sdds-form-input"
                  type="checkbox"
                  onChange={(e) => this.headCheckBoxClicked(e)}
                  checked={this.mainCheckboxSelected}
                />
              </label>
            </div>
          </th>
        )}
        <slot></slot>
      </Host>
    );
  }
}
