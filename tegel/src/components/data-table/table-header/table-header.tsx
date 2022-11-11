import { Component, h, Host, State, Event, EventEmitter, Listen, Element } from '@stencil/core';

@Component({
  tag: 'sdds-table-header',
  styleUrl: 'table-header.scss',
  shadow: true,
})
export class TableHeaderRow {
  @State() enableMultiselectHeaderRow: boolean = false;

  @State() enableExpandedHeaderRow: boolean = false;

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
    this.uniqueTableIdentifier = this.host.closest('sdds-table').getAttribute('id');
  }

  componentWillRender() {
    this.enableToolbarDesign =
      this.host.closest('sdds-table').getElementsByTagName('sdds-table-toolbar').length >= 1;
  }

  // TODO - We also need to chech that the attribute isn't "false"
  connectedCallback() {
    const tabelEl = this.host.closest('sdds-table');
    this.enableMultiselectHeaderRow =
      !(tabelEl.getAttribute('enable-multiselect') === 'false') &&
      tabelEl.hasAttribute('enable-multiselect');
  }

  @Listen('commonTableStylesEvent', { target: 'body' })
  commonTableStyleListener(event: CustomEvent<any>) {
    if (this.uniqueTableIdentifier === event.detail[0]) {
      [, this.verticalDividers, this.compactDesign, this.noMinWidth, this.whiteBackground] =
        event.detail;
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
    this.mainCheckboxSelectedEvent.emit([this.uniqueTableIdentifier, this.mainCheckboxSelected]);
  }

  @Listen('updateMainCheckboxEvent', { target: 'body' })
  updateMainCheckboxEventListener(event: CustomEvent<any>) {
    const [receivedID, receivedMainCheckboxStatus] = event.detail;
    if (this.uniqueTableIdentifier === receivedID) {
      this.mainCheckboxSelected = receivedMainCheckboxStatus;
    }
  }

  @Listen('enableExpandedRowsEvent', { target: 'body' })
  enableExtendedRowsEventListener(event: CustomEvent<any>) {
    if (this.uniqueTableIdentifier === event.detail[0])
      this.enableExpandedHeaderRow = event.detail[1];
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
          {this.enableExpandedHeaderRow && (
            <th class="sdds-table__header-cell sdds-table__header-cell--checkbox"></th>
          )}
          <slot></slot>
        </tr>
      </Host>
    );
  }
}
