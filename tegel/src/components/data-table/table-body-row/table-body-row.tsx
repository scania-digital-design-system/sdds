import { Component, Element, h, Host, State, Event, EventEmitter, Listen } from '@stencil/core';
import { TablePropsChangedEvent } from '../table/table';

const relevantTableProps: TablePropsChangedEvent['changed'] = [
  'enableMultiselect',
  'verticalDividers',
  'compactDesign',
  'modeVariant',
];

@Component({
  tag: 'sdds-table-body-row',
  styleUrl: 'table-body-row.scss',
  shadow: true,
})
export class TableBodyRow {
  @State() enableMultiselect: boolean = false;

  @State() bodyCheckBoxStatus: boolean = false;

  @State() mainCheckBoxStatus: boolean = false;

  @State() verticalDividers: boolean = false;

  @State() compactDesign: boolean = false;

  @State() noMinWidth: boolean = false;

  @State() modeVariant: 'primary' | 'secondary' = null;

  @State() tableId: string = '';

  @Element() host: HTMLElement;

  tableEl: HTMLSddsTableElement;

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

  @Listen('tablePropsChangedEvent', { target: 'body' })
  tablePropsChangedEventListener(event: CustomEvent<TablePropsChangedEvent>) {
    if (this.tableId === event.detail.tableId) {
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

  /** Send status of single row to the parent, sdds-table component that hold logic for data export and main checkbox control */
  @Event({
    eventName: 'bodyRowToTable',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  bodyRowToTable: EventEmitter<boolean>;

  /** Event that triggers pagination function. Needed as first rows have to be rendered in order for pagination to run */
  @Event({
    eventName: 'runPaginationEvent',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  runPaginationEvent: EventEmitter<string>;

  @Listen('mainCheckboxSelectedEvent', { target: 'body' })
  headCheckboxListener(event: CustomEvent<any>) {
    if (this.tableId === event.detail[0]) {
      this.bodyCheckBoxStatusUpdater(event.detail[1]);
    }
  }

  @Listen('updateBodyCheckboxesEvent', { target: 'body' })
  updateBodyCheckboxesEventListener(event: CustomEvent<any>) {
    const [receivedID, receivedBodyCheckboxStatus] = event.detail;
    if (this.tableId === receivedID) {
      this.bodyCheckBoxStatusUpdater(receivedBodyCheckboxStatus);
    }
  }

  connectedCallback() {
    this.tableEl = this.host.closest('sdds-table');
    this.tableId = this.tableEl.tableId;
  }

  componentWillLoad() {
    relevantTableProps.forEach((tablePropName) => {
      this[tablePropName] = this.tableEl[tablePropName];
    });
  }

  componentDidLoad() {
    this.runPaginationEvent.emit(this.tableId);
  }

  render() {
    return (
      <Host
        class={{
          'sdds-table__row': true,
          'sdds-table__compact': this.compactDesign,
          'sdds-table--divider': this.verticalDividers,
          'sdds-mode-variant-primary': this.modeVariant === 'primary',
          'sdds-mode-variant-secondary': this.modeVariant === 'secondary',
        }}
      >
        {this.enableMultiselect && (
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
