import {
  Component,
  h,
  Host,
  Listen,
  State,
  Event,
  EventEmitter,
  Prop,
  Element,
} from '@stencil/core';

@Component({
  tag: 'sdds-table-footer',
  styleUrl: 'table-footer.scss',
  shadow: true,
})
export class TableFooter {
  /** Enable pagination and show pagination controls  */
  @Prop({ reflect: true }) enablePagination: boolean = false;

  /** Sets how many rows to display when pagination is enabled */
  @Prop({ reflect: true }) rowsPerPage: number = 5;

  /** Prop to enable client controlled pagination  */
  @Prop({ reflect: true }) enableClientPagination: boolean = false;

  /** Prop for client to set current page number */
  @Prop({ reflect: true }) clientPaginationValue: number = 1;

  /** Prop for client to set max number of pages */
  @Prop({ reflect: true }) clientMaxPages: number = 1;

  /** In case that automatic count of columns does not work, user can manually set this one. Take in mind that expandable control is column too */
  @Prop() clientSetColumnsNumber: number = null;

  /** State that memorize number of columns to display colSpan correctly - set from parent level */
  @State() columnsNumber: number = 0;

  /** Total number of pages, number of the rows divided with number of rows per page */
  @State() numberOfPages: number = 0;

  /** Initial value for pagination in input element */
  @State() paginationValue: number = 1;

  /** Temporarily disable pagination - due to search - set from parent level */
  @State() tempPaginationDisable: boolean = false;

  @State() verticalDividers: boolean = false;

  @State() compactDesign: boolean = false;

  @State() noMinWidth: boolean = false;

  @State() whiteBackground: boolean = false;

  @State() uniqueTableIdentifier: string = '';

  @Element() host: HTMLElement;

  /** Event that footer sends out in order to receive other necessary information from other subcomponents */
  @Event({
    eventName: 'footerWillLoad',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  footerWillLoad: EventEmitter<any>;

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

  /** Listens to elementary pagination data made and sent by parent component */
  @Listen('tableToFooterEvent', { target: 'body' })
  tableToFooterEventListener(event: CustomEvent<any>) {
    const [
      receivedID,
      receivedColumnsNUmber,
      receivedNumberOfPages,
      receivedTempPaginationDisabled,
    ] = event.detail;

    console.log('I am listening to the table-body info');

    if (this.uniqueTableIdentifier === receivedID) {
      this.columnsNumber = receivedColumnsNUmber;
      this.numberOfPages = receivedNumberOfPages;
      this.tempPaginationDisable = receivedTempPaginationDisabled;
    }
  }

  /** Event to send rowsPerPage value back to sdds-table-body component */
  @Event({
    eventName: 'enablePaginationData',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  enablePaginationData: EventEmitter<any>;

  connectedCallback() {
    this.uniqueTableIdentifier = this.host
      .closest('sdds-table')
      .getAttribute('id');
    console.log('I will run first!');
  }

  componentWillLoad() {
    this.enablePaginationData.emit([
      this.uniqueTableIdentifier,
      this.enablePagination,
      this.rowsPerPage,
    ]);

    this.footerWillLoad.emit(this.uniqueTableIdentifier);
    console.log('Footer will load!');
  }

  componentWillRender() {
    if (this.clientSetColumnsNumber !== null) {
      this.columnsNumber = this.clientSetColumnsNumber;
    }
  }

  /** Event to send current page value back to sdds-table-body component */
  @Event({
    eventName: 'currentPageValueEvent',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  currentPageValueEvent: EventEmitter<any>;

  sendPaginationValue(value) {
    this.currentPageValueEvent.emit([this.uniqueTableIdentifier, value]);
  }

  paginationPrev = (event) => {
    event.preventDefault();
    // Enable lowering until 1st page
    if (this.paginationValue >= 2) {
      this.paginationValue--;
      this.sendPaginationValue(this.paginationValue);
    }
  };

  paginationNext = (event) => {
    event.preventDefault();
    // Enable increasing until the max number of pages
    if (this.paginationValue <= this.numberOfPages) {
      this.paginationValue++;
      this.sendPaginationValue(this.paginationValue);
    }
  };

  paginationInputChange(event) {
    const insertedValue = event.target.value;

    if (insertedValue > this.numberOfPages || insertedValue < 1) {
      event.target.classList.add('sdds-table__page-selector-input--shake');
      event.target.value = event.target.max;
      this.paginationValue = event.target.value;
    } else {
      this.paginationValue = event.target.value;
    }
    this.sendPaginationValue(this.paginationValue);
  }

  removeShakeAnimation(event) {
    event.target.classList.remove('sdds-table__page-selector-input--shake');
  }

  /* Client based functions below */

  clientPaginationPrev = (event) => {
    event.preventDefault();
    // Enable lowering until 1st page
    if (this.clientPaginationValue >= 2) {
      this.clientPaginationValue--;
      this.sendPaginationValue(this.clientPaginationValue);
    }
  };

  clientPaginationNext = (event) => {
    event.preventDefault();
    // Enable increasing until the max number of pages
    if (this.clientPaginationValue <= this.clientMaxPages) {
      this.clientPaginationValue++;
      this.sendPaginationValue(this.clientPaginationValue);
    }
  };

  clientPaginationInputChange(event) {
    const insertedValue = event.target.value;

    if (insertedValue > this.clientMaxPages || insertedValue < 1) {
      event.target.classList.add('sdds-table__page-selector-input--shake');
      event.target.value = event.target.max;
      this.clientPaginationValue = event.target.value;
    } else {
      this.clientPaginationValue = event.target.value;
    }
    this.sendPaginationValue(this.clientPaginationValue);
  }

  render() {
    return (
      <Host class={this.compactDesign ? 'sdds-table--compact' : ''}>
        <tr class="sdds-table__footer-row">
          <td class="sdds-table__footer-cell" colSpan={this.columnsNumber}>
            {this.enablePagination && (
              <div class="sdds-table__pagination">
                <div class="sdds-table__row-selector"></div>
                <div class="sdds-table__page-selector">
                  <input
                    class="sdds-table__page-selector-input"
                    type="number"
                    min="1"
                    max={this.numberOfPages}
                    value={this.paginationValue}
                    pattern="[0-9]+"
                    dir="rtl"
                    onChange={(event) => this.paginationInputChange(event)}
                    onFocusout={(event) => this.paginationInputChange(event)}
                    onAnimationEnd={(event) => {
                      this.removeShakeAnimation(event);
                    }}
                    disabled={this.tempPaginationDisable}
                  />
                  <p class="sdds-table__footer-text">
                    of{' '}
                    <span>
                      {this.tempPaginationDisable ? 1 : this.numberOfPages}
                    </span>{' '}
                    pages
                  </p>
                  <button
                    class="sdds-table__footer-btn"
                    disabled={
                      this.paginationValue <= 1 || this.tempPaginationDisable
                    }
                    onClick={(event) => this.paginationPrev(event)}
                  >
                    <svg
                      class="sdds-table__footer-btn-svg"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.217 4.273a1 1 0 0 1 0 1.415l-9.888 9.888a.6.6 0 0 0 0 .848l9.888 9.888a1 1 0 0 1-1.414 1.415l-9.889-9.889a2.6 2.6 0 0 1 0-3.677l9.889-9.888a1 1 0 0 1 1.414 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button
                    class="sdds-table__footer-btn"
                    disabled={
                      this.paginationValue >= this.numberOfPages ||
                      this.tempPaginationDisable
                    }
                    onClick={(event) => this.paginationNext(event)}
                  >
                    <svg
                      class="sdds-table__footer-btn-svg"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.783 27.727a1 1 0 0 1 0-1.415l9.888-9.888a.6.6 0 0 0 0-.848L9.783 5.688a1 1 0 0 1 1.414-1.415l9.889 9.889a2.6 2.6 0 0 1 0 3.676l-9.889 9.889a1 1 0 0 1-1.414 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
            {this.enableClientPagination && !this.enablePagination && (
              <div class="sdds-table__pagination">
                <div class="sdds-table__row-selector"></div>
                <div class="sdds-table__page-selector">
                  <input
                    class="sdds-table__page-selector-input"
                    type="number"
                    min="1"
                    max={this.clientMaxPages}
                    value={this.clientPaginationValue}
                    pattern="[0-9]+"
                    dir="rtl"
                    onChange={(event) =>
                      this.clientPaginationInputChange(event)
                    }
                    onFocusout={(event) =>
                      this.clientPaginationInputChange(event)
                    }
                    onAnimationEnd={(event) => {
                      this.removeShakeAnimation(event);
                    }}
                  />
                  <p class="sdds-table__footer-text">
                    of <span>{this.clientMaxPages}</span> pages
                  </p>
                  <button
                    class="sdds-table__footer-btn"
                    disabled={this.clientPaginationValue <= 1}
                    onClick={(event) => this.clientPaginationPrev(event)}
                  >
                    <svg
                      class="sdds-table__footer-btn-svg"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.217 4.273a1 1 0 0 1 0 1.415l-9.888 9.888a.6.6 0 0 0 0 .848l9.888 9.888a1 1 0 0 1-1.414 1.415l-9.889-9.889a2.6 2.6 0 0 1 0-3.677l9.889-9.888a1 1 0 0 1 1.414 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button
                    class="sdds-table__footer-btn"
                    disabled={this.clientPaginationValue >= this.clientMaxPages}
                    onClick={(event) => this.clientPaginationNext(event)}
                  >
                    <svg
                      class="sdds-table__footer-btn-svg"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.783 27.727a1 1 0 0 1 0-1.415l9.888-9.888a.6.6 0 0 0 0-.848L9.783 5.688a1 1 0 0 1 1.414-1.415l9.889 9.889a2.6 2.6 0 0 1 0 3.676l-9.889 9.889a1 1 0 0 1-1.414 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </td>
        </tr>
      </Host>
    );
  }
}
