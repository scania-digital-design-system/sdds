import {
  Component,
  Element,
  h,
  Host,
  State,
  Event,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'sdds-table-body-row',
  styleUrl: 'table-body-row.scss',
  shadow: true,
})
export class TableBodyRow {
  @State() multiSelect: boolean = true;

  @Element() host: HTMLElement;

  /** Send status of single row to the parent, sdds-table component that hold logic for data export and main checkbox control */
  @Event({
    eventName: 'bodyRowToTable',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  bodyRowToTable: EventEmitter<boolean>;

  bodyCheckBoxClicked(event) {
    const row = this.host;
    const checkboxStatus = event.currentTarget.checked;
    if (checkboxStatus === true) {
      row.classList.add('sdds-table__row--selected');
    } else {
      row.classList.remove('sdds-table__row--selected');
    }
    this.bodyRowToTable.emit(checkboxStatus);
  }

  render() {
    return (
      <Host class="sdds-table__row">
        {this.multiSelect && (
          <td class="sdds-table__body-cell sdds-table__body-cell--checkbox">
            <div class="sdds-checkbox-item">
              <label class="sdds-form-label sdds-form-label--data-table">
                <input
                  class="sdds-form-input"
                  type="checkbox"
                  onChange={(event) => this.bodyCheckBoxClicked(event)}
                />
              </label>
            </div>
          </td>
        )}
        <slot></slot>
      </Host>
    );
  }
}
