import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  State,
} from '@stencil/core';

@Component({
  tag: 'sdds-table-body-row-expendable',
  styleUrl: 'table-body-row-expendable.scss',
  shadow: true,
})
export class TableBodyRowExpandable {
  @State() isExtended: boolean = false;

  @State() uniqueTableIdentifier: string = '';

  @State() columnsNumber: number = 0;

  @State() mainExtendActive: boolean = false;

  @Element() host: HTMLElement;

  /** Sends out status of itw own expended status feature to table header component */
  @Event({
    eventName: 'singleRowExpandedEvent',
    bubbles: true,
    cancelable: true,
    composed: true,
  })
  singleRowExpandedEvent: EventEmitter<any>;

  componentWillLoad() {
    this.uniqueTableIdentifier = this.host
      .closest('sdds-table')
      .getAttribute('id');
  }

  @Listen('columnsNumberEvent', { target: 'body' })
  columnsNumberEventListener(event: CustomEvent<any>) {
    if (this.uniqueTableIdentifier === event.detail[0])
      this.columnsNumber = event.detail[1];
  }

  @Listen('mainExpendSelectedEvent', { target: 'body' })
  mainExpendSelectedEventListener(event: CustomEvent<any>) {
    if (this.uniqueTableIdentifier === event.detail[0])
      this.isExtended = event.detail[1];
  }

  onChangeHandler(event) {
    this.isExtended = event.currentTarget.checked === true;
    this.sendValue();
  }

  sendValue() {
    this.singleRowExpandedEvent.emit([
      this.uniqueTableIdentifier,
      this.isExtended,
    ]);
  }

  render() {
    return (
      <Host class={this.isExtended ? 'sdds-table__row-extend--active' : ''}>
        <tr class="sdds-table__row">
          <td class="sdds-table__cell">
            <label class="sdds-table__expand-control-container">
              <input
                class="sdds-table__expand-input"
                type="checkbox"
                onChange={(event) => this.onChangeHandler(event)}
                checked={this.isExtended}
              />
              <span class="sdds-expendable-row-icon">
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
          </td>
          <slot />
        </tr>

        <tr class="sdds-table__row-extend">
          <td class="sdds-table__cell-extend" colSpan={this.columnsNumber}>
            <slot name="expend-row" />
          </td>
        </tr>
      </Host>
    );
  }
}
