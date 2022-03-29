import {
  Component,
  Prop,
  h,
  Host,
  Event,
  EventEmitter,
  State,
  Listen,
} from '@stencil/core';

@Component({
  tag: 'sdds-table-head',
  styleUrl: 'table.scss',
  shadow: true,
})
export class TableHeaderElement {
  @Prop({ reflect: true }) columnKey: string;

  @Prop({ reflect: true }) columnTitle: string;

  @Prop() isSortable: boolean = true;

  @State() sortingDirection: string = '';

  @State() sortedByMyKey: boolean = false;

  @Event({
    eventName: 'sortColumnData',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sortColumnData: EventEmitter<any>;

  // target is set to body so other instances of same component "listen" and react to the change
  @Listen('sortColumnData', { target: 'body' })
  updateOptionsContent(event: CustomEvent<any>) {
    // Nice usage of array deconstruct
    const keyValue = event.detail[0];
    console.log(`Header has got this info: ${keyValue}`);
    if (keyValue !== this.columnKey) {
      this.sortedByMyKey = false;
      // To sync with CSS transition timing
      setTimeout(() => {
        this.sortingDirection = '';
      }, 200);
    }
  }

  sortButtonClick = (key) => {
    console.log(`It triggers: ${key}`);
    // Toggling direction of sorting as we only use one button for sorting
    if (this.sortingDirection !== 'asc') {
      this.sortingDirection = 'asc';
    } else {
      this.sortingDirection = 'desc';
    }
    // Use array to send both key and sorting direction
    this.sortedByMyKey = true;
    this.sortColumnData.emit([key, this.sortingDirection]);
  };

  headerCellContent = () => {
    if (this.isSortable) {
      return (
        <button
          class="sdds-table__header-button"
          onClick={() => this.sortButtonClick(this.columnKey)}
        >
          <span class="sdds-table__header-button-text">{this.columnTitle}</span>

          {this.sortingDirection === '' && (
            <svg
              class="sdds-table__header-button-icon"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 15"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.45 13.67V4.62a.5.5 0 0 1 1 0v9.05h-1Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.07 10.28a.5.5 0 0 1 .7.08l2.1 2.66a.1.1 0 0 0 .15 0l2.09-2.66a.5.5 0 1 1 .78.62l-2.08 2.66a1.1 1.1 0 0 1-1.73 0l-2.1-2.66a.5.5 0 0 1 .1-.7ZM3.55.4v9.04a.5.5 0 1 1-1 0V.39h1Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.93 3.78a.5.5 0 0 1-.7-.08l-2.1-2.66a.1.1 0 0 0-.15 0L.89 3.7a.5.5 0 0 1-.78-.62L2.19.42a1.1 1.1 0 0 1 1.73 0l2.1 2.66a.5.5 0 0 1-.1.7Z"
                fill="currentColor"
              />
            </svg>
          )}
          {this.sortingDirection !== '' && (
            <svg
              class={`sdds-table__header-button-icon ${
                this.sortingDirection === 'desc'
                  ? 'sdds-table__header-button-icon--rotate'
                  : ''
              }`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17 2.974a1 1 0 0 0-2 0v24.3l-9.312-9.312a1 1 0 0 0-1.414 1.414l9.887 9.888a2.6 2.6 0 0 0 3.677 0l9.888-9.888a1 1 0 0 0-1.414-1.414L17 27.274v-24.3Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
      );
    }
    return this.columnTitle;
  };

  render() {
    return (
      <Host
        class={{
          'sdds-table__header-cell': true,
          'sdds-table__header-cell--sortable': this.isSortable,
          'sdds-table__header-cell--is-sorted': this.sortedByMyKey,
        }}
        sdds-table__header-cell
      >
        {this.headerCellContent()}
      </Host>
    );
  }
}
