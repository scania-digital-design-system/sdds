import {
  Component,
  Prop,
  h,
  Host,
  Event,
  EventEmitter,
  State,
  Listen,
  Element,
} from '@stencil/core';

@Component({
  tag: 'sdds-header-cell',
  styleUrl: 'table-header-cell.scss',
  shadow: true,
})
export class TableHeaderCell {
  /** Value of column key, usually comes from JSON, needed for sorting */
  @Prop({ reflect: true }) columnKey: string;

  /** Text that displays in column cell */
  @Prop({ reflect: true }) columnTitle: string;

  /** In case noMinWidth setting, user has to specify width value for each column, for example "150px" */
  @Prop({ reflect: true }) customWidth: string;

  /** If passed as prop, enables sorting on that column */
  @Prop() sortable: boolean = false;

  /** Setting for text align, default is left, but user can pass "right" as string - useful for numeric values */
  @Prop({ reflect: true }) textAlign: string;

  @State() textAlignState: string;

  @State() sortingDirection: string = '';

  @State() sortedByMyKey: boolean = false;

  @State() disableSortingBtn: boolean = false;

  @State() verticalDividers: boolean = false;

  @State() compactDesign: boolean = false;

  @State() noMinWidth: boolean = false;

  @State() whiteBackground: boolean = false;

  @State() enableMultiselectStyle: boolean = false;

  @State() enableToolbarDesign: boolean = false;

  @State() uniqueTableIdentifier: string = '';

  @Element() host: HTMLElement;

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

  /** Sends column key and sorting direction to the sdds-table component */
  @Event({
    eventName: 'sortColumnDataEvent',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sortColumnDataEvent: EventEmitter<any>;

  /** Sends column key and text align value so the body cells with same key take the same text alignment as header cell */
  @Event({
    eventName: 'textAlignEvent',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  textAlignEvent: EventEmitter<any>;

  /** Sends column key so the body cells with the same key change background when user hovers over header cell */
  @Event({
    eventName: 'headCellHoverEvent',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  headCellHoverEvent: EventEmitter<any>;

  componentWillLoad() {
    this.uniqueTableIdentifier = this.host
      .closest('sdds-table')
      .getAttribute('id');
    console.log(
      `Header cell reports table ID is:${this.uniqueTableIdentifier}`
    );
  }

  componentWillRender() {
    // enable only right or left text align
    if (this.textAlign === 'right' || this.textAlign === 'end') {
      this.textAlignState = 'right';
    } else {
      this.textAlignState = 'left';
    }
    // To enable body cells text align per rules set in head cell
    this.textAlignEvent.emit([
      this.uniqueTableIdentifier,
      this.columnKey,
      this.textAlignState,
    ]);

    this.enableToolbarDesign =
      this.host.closest('sdds-table').getElementsByTagName('sdds-table-toolbar')
        .length >= 1;
  }

  // Listen to parent table if sorting is allowed
  @Listen('sortingSwitcherEvent', { target: 'body' })
  sortingSwitcherEventListener(event: CustomEvent<any>) {
    const [receivedID, receivedSortingStatus] = event.detail;
    if (this.uniqueTableIdentifier === receivedID) {
      this.disableSortingBtn = receivedSortingStatus;
    }
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
    this.sortColumnDataEvent.emit([
      this.uniqueTableIdentifier,
      key,
      this.sortingDirection,
    ]);
  };

  // target is set to body so other instances of same component "listen" and react to the change
  @Listen('sortColumnDataEvent', { target: 'body' })
  updateOptionsContent(event: CustomEvent<any>) {
    if (this.uniqueTableIdentifier === event.detail[0]) {
      // grab only value at position 1 as it is the "key"
      if (this.columnKey !== event.detail[1]) {
        this.sortedByMyKey = false;
        // To sync with CSS transition timing
        setTimeout(() => {
          this.sortingDirection = '';
        }, 200);
      }
    }
  }

  onHeadCellHover = (key) => {
    this.headCellHoverEvent.emit([this.uniqueTableIdentifier, key]);
  };

  @Listen('enableMultiselectEvent', { target: 'body' })
  enableMultiselectEventListener(event: CustomEvent<any>) {
    if (this.uniqueTableIdentifier === event.detail[0])
      this.enableMultiselectStyle = event.detail[1];
  }

  headerCellContent = () => {
    if (this.sortable && !this.disableSortingBtn) {
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
          'sdds-table--compact': this.compactDesign,
          'sdds-table--divider': this.verticalDividers,
          'sdds-table--no-min-width': this.noMinWidth,
          'sdds-table--multiselect': this.enableMultiselectStyle,
          'sdds-table--toolbar-available': this.enableToolbarDesign,
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
