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
  tag: 'sdds-header-cell',
  styleUrl: 'table.scss',
  shadow: true,
})
export class TableHeaderCell {
  @Prop({ reflect: true }) columnKey: string;

  @Prop({ reflect: true }) columnTitle: string;

  @Prop({ reflect: true }) customWidth: string;

  @Prop({ reflect: true }) textAlign: string;

  @State() textAlignState: string;

  @Prop() sortable: boolean = false;

  @State() sortingDirection: string = '';

  @State() sortedByMyKey: boolean = false;

  @State() globalSortingEnabler: boolean = this.sortable;

  @Event({
    eventName: 'sortColumnData',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sortColumnData: EventEmitter<any>;

  @Event({
    eventName: 'bodyCellData',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  bodyCellData: EventEmitter<any>;

  @Event({
    eventName: 'headKey',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  headKey: EventEmitter<any>;

  componentWillLoad() {
    // enable only right or left text align
    if (this.textAlign === 'right' || this.textAlign === 'end') {
      this.textAlignState = 'right';
    } else {
      this.textAlignState = 'left';
    }
    // To enable body cells text align per rules set in head cell
    this.bodyCellData.emit([this.columnKey, this.textAlignState]);
  }

  // target is set to body so other instances of same component "listen" and react to the change
  @Listen('sortColumnData', { target: 'body' })
  updateOptionsContent(event: CustomEvent<any>) {
    // grab only value at position 0 as it is the "key"
    const keyValue = event.detail[0];
    if (keyValue !== this.columnKey) {
      this.sortedByMyKey = false;
      // To sync with CSS transition timing
      setTimeout(() => {
        this.sortingDirection = '';
      }, 200);
    }
  }

  // Listen to parent table if sorting is allowed
  @Listen('sortingEnabler', { target: 'body' })
  updateSortingStatus(event: CustomEvent<any>) {
    this.globalSortingEnabler = event.detail;
  }

  sortButtonClick = (key) => {
    // Toggling direction of sorting as we only use one button for sorting
    if (this.sortingDirection !== 'asc') {
      this.sortingDirection = 'asc';
    } else {
      this.sortingDirection = 'desc';
    }
    // Setting to true we can set enable CSS class for "active" state of column
    this.sortedByMyKey = true;
    // Use array to send both key and sorting direction
    this.sortColumnData.emit([key, this.sortingDirection]);
  };

  onHeadCellHover = (key) => {
    this.headKey.emit(key);
  };

  headerCellContent = () => {
    if (this.globalSortingEnabler) {
      return (
        <button
          class="sdds-table__header-button"
          onClick={() => this.sortButtonClick(this.columnKey)}
        >
          <span
            class="sdds-table__header-button-text"
            style={{ textAlign: this.textAlignState }}
          >
            {this.columnTitle}
          </span>

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
          {/* First icon is arrow down as first set direction is ascending, clicking it again rotates the icon as we set descending order */}
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
    return (
      <p
        class="sdds-table__header-text"
        style={{ textAlign: this.textAlignState }}
      >
        {this.columnTitle}
      </p>
    );
  };

  render() {
    return (
      <Host
        class={{
          'sdds-table__header-cell': true,
          'sdds-table__header-cell--sortable': this.sortable,
          'sdds-table__header-cell--is-sorted': this.sortedByMyKey,
          'sdds-table__header-cell--custom-width': this.customWidth !== '',
          'sdds-table__header-cell--right-align':
            this.textAlignState === 'right',
        }}
        style={{ width: this.customWidth }}
        // Calling actions from here to enable hover functionality for both sortable and un-sortable tables
        onMouseOver={() => this.onHeadCellHover(this.columnKey)}
        onMouseLeave={() => this.onHeadCellHover('')}
      >
        {this.headerCellContent()}
      </Host>
    );
  }
}
