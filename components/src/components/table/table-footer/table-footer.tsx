import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'sdds-table-footer',
  // styleUrl: 'table.scss',
  shadow: true,
})
export class TableFooter {
  /** User sets number of rows displayed on one page */
  @Prop({ reflect: true }) rowsPerPage: number = 2;

  /** State that memorize number of columns to display colSpan correctly - set from parent level */
  @State() columnsNumber: number = 0;

  /** Total number of pages, number of the rows divided with number of rows per page */
  @State() numberOfPages: number = 0;

  /** Initial value for pagination in input element */
  @State() paginationValue: number = 1;

  /** Temporarily disable pagination - due to search - set from parent level */
  @State() tempPaginationDisable: boolean = false;

  paginationPrev = (event) => {
    event.preventDefault();
    // Enable lowering until 1st page
    if (this.paginationValue >= 2) {
      this.paginationValue--;
    }
    // this.runPagination();
  };

  paginationNext = (event) => {
    event.preventDefault();
    // Enable increasing until the max number of pages
    if (this.paginationValue <= this.numberOfPages) {
      this.paginationValue++;
    }
    // this.runPagination();
  };

  paginationInputChange(event) {
    const insertedValue = event.target.value;
    // const inputMaxValue = event.target.max;
    console.log(`Value is: ${insertedValue}`);
    console.log(`Number of pages is: ${this.numberOfPages}`);

    if (insertedValue > this.numberOfPages || insertedValue < 1) {
      event.target.classList.add('sdds-table__page-selector-input--shake');
      event.target.value = event.target.max;
      this.paginationValue = event.target.value;
    } else {
      this.paginationValue = event.target.value;
    }
    // this.runPagination();
  }

  removeShakeAnimation(event) {
    event.target.classList.remove('sdds-table__page-selector-input--shake');
  }

  /*
  setNumberOfPages() {
    this.numberOfPages = Math.ceil(
      this.bodyDataManipulated.length / this.rowsPerPage
    );
  }

   */

  render() {
    return (
      <Host class="sdds-table__footer">
        <tr class="sdds-table__footer-row">
          <td class="sdds-table__footer-cell" colSpan={this.columnsNumber}>
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
          </td>
        </tr>
      </Host>
    );
  }
}
