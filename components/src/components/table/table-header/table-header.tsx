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

  @State() mainCheckboxSelected: boolean = false;

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
    console.log(`Header reports table ID is:${this.uniqueTableIdentifier}`);
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

  @Listen('tableToolbarAvailableEvent', { target: 'body' })
  tableToolbarAvailableEventListener(event: CustomEvent<boolean>) {
    this.enableToolbarDesign = event.detail;
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
          <slot></slot>
        </tr>
      </Host>
    );
  }
}
