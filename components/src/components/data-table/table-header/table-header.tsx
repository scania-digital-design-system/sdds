import {
  Component,
  h,
  Host,
  State,
  Event,
  EventEmitter,
  Listen,
  Element,
} from '@stencil/core';

@Component({
  tag: 'sdds-table-header',
  styleUrl: 'table-header.scss',
  shadow: true,
})
export class TableHeaderRow {
  @State() enableMultiselectHeaderRow: boolean = false;

  @State() enableExpendedHeaderRow: boolean = false;

  @State() mainCheckboxSelected: boolean = false;

  @State() mainExpendSelected: boolean = false;

  @State() verticalDividers: boolean = false;

  @State() compactDesign: boolean = false;

  @State() noMinWidth: boolean = false;

  @State() whiteBackground: boolean = false;

  @State() enableToolbarDesign: boolean = false;

  @State() uniqueTableIdentifier: string = '';

  @Element() host: HTMLElement;

  componentWillLoad() {
    this.uniqueTableIdentifier = this.host
      .closest('sdds-table')
      .getAttribute('id');
  }

  componentWillRender() {
    this.enableToolbarDesign =
      this.host.closest('sdds-table').getElementsByTagName('sdds-table-toolbar')
        .length >= 1;
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

  /** Send status of main checkbox in header to the parent, sdds-table component */
  @Event({
    eventName: 'mainCheckboxSelectedEvent',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  mainCheckboxSelectedEvent: EventEmitter<any>;

  headCheckBoxClicked(event) {
    this.mainCheckboxSelected = event.currentTarget.checked;
    this.mainCheckboxSelectedEvent.emit([
      this.uniqueTableIdentifier,
      this.mainCheckboxSelected,
    ]);
  }

  /** Send status of main checkbox in header to the parent, sdds-table component */
  @Event({
    eventName: 'mainExpendSelectedEvent',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  mainExpendSelectedEvent: EventEmitter<any>;

  headExpendClicked(event) {
    this.mainExpendSelected = event.currentTarget.checked;
    this.mainExpendSelectedEvent.emit([
      this.uniqueTableIdentifier,
      this.mainExpendSelected,
    ]);
  }

  @Listen('updateMainCheckboxEvent', { target: 'body' })
  updateMainCheckboxEventListener(event: CustomEvent<any>) {
    const [receivedID, receivedMainCheckboxStatus] = event.detail;
    if (this.uniqueTableIdentifier === receivedID) {
      this.mainCheckboxSelected = receivedMainCheckboxStatus;
    }
  }

  @Listen('enableMultiselectEvent', { target: 'body' })
  enableMultiselectEventListener(event: CustomEvent<any>) {
    if (this.uniqueTableIdentifier === event.detail[0])
      this.enableMultiselectHeaderRow = event.detail[1];
  }

  @Listen('enableExtendedRowsEvent', { target: 'body' })
  enableExtendedRowsEventListener(event: CustomEvent<any>) {
    if (this.uniqueTableIdentifier === event.detail[0])
      this.enableExpendedHeaderRow = event.detail[1];
  }

  @Listen('singleRowExpandedEvent', { target: 'body' })
  singleRowExpandedEventListener(event: CustomEvent<any>) {
    if (this.uniqueTableIdentifier === event.detail[0]) {
      // TODO: Improve this logic. Why we get late repose in DOM?
      setTimeout(() => {
        this.bodyExpandClicked();
      }, 100);
    }
  }

  bodyExpandClicked() {
    const numberOfExtendRowsActive = this.host.parentElement
      .querySelector('sdds-table-body')
      .getElementsByClassName('sdds-table__row-extend--active').length;
    const numberOfExtendRows = this.host.parentElement
      .querySelector('sdds-table-body')
      .getElementsByTagName('sdds-table-body-row-expendable').length;

    if (numberOfExtendRows === numberOfExtendRowsActive) {
      this.mainExpendSelected = true;
    } else {
      this.mainExpendSelected = false;
    }
  }

  render() {
    return (
      <Host
        class={{
          'sdds-table--compact': this.compactDesign,
          'sdds-table--divider': this.verticalDividers,
          'sdds-table--toolbar-available': this.enableToolbarDesign,
        }}
      >
        <tr>
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
          {this.enableExpendedHeaderRow && (
            <th class="sdds-table__header-cell sdds-table__header-cell--checkbox">
              <label class="sdds-table__expand-control-container">
                <input
                  class="sdds-table__expand-input"
                  type="checkbox"
                  checked={this.mainExpendSelected}
                  onChange={(e) => this.headExpendClicked(e)}
                />
                <span
                  class={{
                    'sdds-expendable-row-icon': true,
                    'sdds-expendable-row-icon--opened': this.mainExpendSelected,
                  }}
                >
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.273 9.783a1 1 0 0 1 1.415 0l9.888 9.888a.6.6 0 0 0 .848 0l9.888-9.888a1 1 0 1 1 1.415 1.414l-9.889 9.889a2.6 2.6 0 0 1-3.677 0l-9.888-9.889a1 1 0 0 1 0-1.414Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </label>
            </th>
          )}
          <slot></slot>
        </tr>
      </Host>
    );
  }
}
