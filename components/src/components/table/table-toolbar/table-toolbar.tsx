import { Component, h, Host, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sdds-table-toolbar',
  styleUrl: 'table-toolbar.scss',
  shadow: true,
})
export class TableToolbar {
  /** Enables section for adding user custom buttons */
  @Prop({ reflect: true }) enableActionBar: boolean = false;

  /** Adds title to the table */
  @Prop() tableTitle: string = '';

  /** Enables preview of searchbar */
  @Prop() showSearchbar: boolean = false;

  /** Used for sending users input to main parent <sdds-table> component */
  @Event({
    eventName: 'sddsTableSearchTerm',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sddsTableSearchTerm: EventEmitter<any>;

  searchFunction(event) {
    const searchTerm = event.currentTarget.value.toLowerCase();
    const sddsTableSearchBar = event.currentTarget.parentElement;
    console.log(`Search function emits: ${searchTerm}`);
    this.sddsTableSearchTerm.emit(searchTerm);

    if (searchTerm.length > 0) {
      sddsTableSearchBar.classList.add('sdds-table__searchbar--active');
    } else {
      sddsTableSearchBar.classList.remove('sdds-table__searchbar--active');
    }
  }

  render() {
    return (
      <Host>
        <div class="sdds-table__upper-bar-flex">
          <caption class="sdds-table__title">{this.tableTitle}</caption>
          <div class="sdds-table__actionbar">
            {this.showSearchbar && (
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
            {this.enableActionBar && <slot name="sdds-table__actionbar" />}
          </div>
        </div>
      </Host>
    );
  }
}
