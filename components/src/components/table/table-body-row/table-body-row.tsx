import {
  Component,
  Element,
  h,
  Host,
  State,
  Event,
  EventEmitter,
  Listen,
} from '@stencil/core';

@Component({
  tag: 'sdds-table-body-row',
  styleUrl: 'table-body-row.scss',
  shadow: true,
})
export class TableBodyRow {
  @State() enableMultiselectBodyRow: boolean = false;

  @State() bodyCheckBoxStatus: boolean = false;

  @State() mainCheckBoxStatus: boolean = false;

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
    this.bodyCheckBoxStatus = event.currentTarget.checked;
    if (this.bodyCheckBoxStatus === true) {
      row.classList.add('sdds-table__row--selected');
    } else {
      row.classList.remove('sdds-table__row--selected');
    }
    this.bodyRowToTable.emit(this.bodyCheckBoxStatus);
  }

  @Listen('headRowToTable', { target: 'body' })
  headCheckboxListener(event: CustomEvent<boolean>) {
    this.bodyCheckBoxStatusUpdater(event.detail);
  }

  @Listen('tableToBodyRow', { target: 'body' })
  tableToBodyRowListener(event: CustomEvent<boolean>) {
    this.bodyCheckBoxStatusUpdater(event.detail);
  }

  bodyCheckBoxStatusUpdater(status) {
    this.mainCheckBoxStatus = status;
    this.bodyCheckBoxStatus = this.mainCheckBoxStatus;
    const row = this.host;
    if (this.bodyCheckBoxStatus === true) {
      row.classList.add('sdds-table__row--selected');
    } else {
      row.classList.remove('sdds-table__row--selected');
    }
    this.bodyRowToTable.emit(this.bodyCheckBoxStatus);
  }

  @Listen('enableMultiselectEvent', { target: 'body' })
  enableMultiselectEventListener(event: CustomEvent<boolean>) {
    this.enableMultiselectBodyRow = event.detail;
  }

  render() {
    return (
      <Host class="sdds-table__row">
        {this.enableMultiselectBodyRow && (
          <td class="sdds-table__body-cell sdds-table__body-cell--checkbox">
            <div class="sdds-checkbox-item">
              <label class="sdds-form-label sdds-form-label--data-table">
                <input
                  class="sdds-form-input"
                  type="checkbox"
                  onChange={(event) => this.bodyCheckBoxClicked(event)}
                  checked={this.bodyCheckBoxStatus}
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
