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
  }

  componentDidLoad() {
    this.runPaginationEvent.emit(this.uniqueTableIdentifier);
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

  @Listen('mainCheckboxSelectedEvent', { target: 'body' })
  headCheckboxListener(event: CustomEvent<any>) {
    if (this.uniqueTableIdentifier === event.detail[0]) {
      this.bodyCheckBoxStatusUpdater(event.detail[1]);
    }
  }

  @Listen('updateBodyCheckboxesEvent', { target: 'body' })
  updateBodyCheckboxesEventListener(event: CustomEvent<any>) {
    const [receivedID, receivedBodyCheckboxStatus] = event.detail;
    if (this.uniqueTableIdentifier === receivedID) {
      this.bodyCheckBoxStatusUpdater(receivedBodyCheckboxStatus);
    }
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
  enableMultiselectEventListener(event: CustomEvent<any>) {
    if (this.uniqueTableIdentifier === event.detail[0])
      this.enableMultiselectBodyRow = event.detail[1];
  }

  render() {
    return (
      <Host
        class={{
          'sdds-table__row': true,
          'sdds-table__compact': this.compactDesign,
          'sdds-table--divider': this.verticalDividers,
          'sdds-table--on-white-bg': this.whiteBackground,
        }}
      >
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
