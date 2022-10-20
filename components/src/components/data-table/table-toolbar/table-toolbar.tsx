import {
  Component,
  h,
  Host,
  Prop,
  Event,
  EventEmitter,
  Listen,
  State,
  Element,
} from '@stencil/core';

@Component({
  tag: 'sdds-table-toolbar',
  styleUrl: 'table-toolbar.scss',
  shadow: true,
})
export class TableToolbar {
  /** Adds title to the data-table */
  @Prop({ reflect: true }) tableTitle: string = '';

  /** Enables preview of searchbar */
  @Prop({ reflect: true }) enableFiltering: boolean = false;

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

  /** Used for sending users input to main parent <sdds-table> component */
  @Event({
    eventName: 'tableFilteringTerm',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  tableFilteringTerm: EventEmitter<any>;

  searchFunction(event) {
    const searchTerm = event.currentTarget.value.toLowerCase();
    const sddsTableSearchBar = event.currentTarget.parentElement;

    this.tableFilteringTerm.emit([this.uniqueTableIdentifier, searchTerm]);

    if (searchTerm.length > 0) {
      sddsTableSearchBar.classList.add('sdds-table__searchbar--active');
    } else {
      sddsTableSearchBar.classList.remove('sdds-table__searchbar--active');
    }
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

  render() {
    return (
      <Host class={this.compactDesign ? 'sdds-table--compact' : ''}>
        <div class="sdds-table__upper-bar-flex">
          <caption class="sdds-table__title">{this.tableTitle}</caption>
          <div class="sdds-table__actionbar">
            {this.enableFiltering && (
              <div class="sdds-table__searchbar">
                <input
                  class="sdds-table__searchbar-input"
                  type="text"
                  onKeyUp={(event) => this.searchFunction(event)}
                />
                <span class="sdds-table__searchbar-icon">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.942 1.985c-6.051 0-10.957 4.905-10.957 10.957 0 6.051 4.906 10.957 10.957 10.957 2.666 0 5.109-.952 7.008-2.534l8.332 8.331a1 1 0 1 0 1.414-1.414l-8.331-8.331a10.912 10.912 0 0 0 2.534-7.01c0-6.05-4.905-10.956-10.957-10.956ZM3.985 12.942a8.957 8.957 0 1 1 17.914 0 8.957 8.957 0 0 1-17.914 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
            )}
            <slot name="sdds-table__actionbar" />
          </div>
        </div>
      </Host>
    );
  }
}
