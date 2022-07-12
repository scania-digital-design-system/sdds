// https://stackoverflow.com/questions/63051941/how-to-pass-data-as-array-of-object-in-stencil-js
// https://medium.com/@scottmgerstl/passing-an-object-or-array-to-stencil-dd62b7d92641

import {
  Component,
  Prop,
  h,
  State,
  Listen,
  Watch,
  Element,
  Host,
  Event,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'sdds-table',
  styleUrl: 'table.scss',
  shadow: true,
})
export class Table {
  /** Adds caption to the table */
  @Prop({ reflect: true }) tableTitle: string;

  @Prop({ reflect: true }) verticalDividers: boolean = false;

  @Prop({ reflect: true }) compactDesign: boolean = false;

  @Prop({ reflect: true }) noMinWidth: boolean = false;

  @Prop({ reflect: true }) whiteBackground: boolean = false;

  @Prop({ reflect: true }) multiSelect: boolean = false;

  @Prop({ reflect: true }) filtering: boolean = false;

  @Prop({ reflect: true }) actionBar: boolean = false;

  @Prop({ reflect: true }) pagination: boolean = false;

  @Prop({ reflect: true }) rowsPerPage: number = 2;

  @Prop() bodyData: any = `[
      {
          "truck": "L-series",
          "driver": "Sonya Bruce",
          "country": "Brazil",
          "mileage": 123987
      },
      {
          "truck": "P-series",
          "driver": "Guerra Bowman",
          "country": "Sweden",
          "mileage": 2000852
      },
      {
          "truck": "G-series",
          "driver": "Ferrell Wallace",
          "country": "Germany",
          "mileage": 564
      },
      {
          "truck": "R-series",
          "driver": "Cox Burris",
          "country": "Spain",
          "mileage": 1789357
      },
      {
          "truck": "S-series",
          "driver": "Montgomery Cervantes",
          "country": "Croatia",
          "mileage": 65
      },
      {
          "truck": "L-series",
          "driver": "Sheryl Nielsen",
          "country": "Greece",
          "mileage": 365784
      },
      {
          "truck": "G-series",
          "driver": "Benton Gomez",
          "country": "France",
          "mileage": 80957
      }
  ]`;

  @State() innerBodyData = [];

  @State() bodyDataManipulated = [];

  @State() bodyDataOriginal = [];

  @State() multiselectArray = [];

  @State() multiselectArrayJSON: string;

  @State() mainCheckboxStatus: boolean = false;

  @State() columnsNumber: number = 0;

  @Element() host: HTMLElement;

  @State() tableSelector: HTMLElement;

  @State() tableBodySelector: HTMLElement;

  @State() headCheckBox: HTMLInputElement;

  @State() disableAllSorting: boolean = false;

  @State() numberOfPages: number = 0;

  @State() paginationValue: number = 1;

  @State() tempPaginationDisable: boolean = false;

  @State() johnnyTest: boolean = true;

  componentWillLoad() {
    this.arrayDataWatcher(this.bodyData);
    this.countColumnNumber();
    if (this.pagination) {
      this.setNumberOfPages();
    }
  }

  componentDidRender() {
    if (this.pagination) {
      this.sendDataToFooter();
      this.runPagination();
    }
  }

  setNumberOfPages() {
    this.numberOfPages = Math.ceil(
      this.bodyDataManipulated.length / this.rowsPerPage
    );
  }

  @Event({
    eventName: 'tableToFooter',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  tableToFooter: EventEmitter<any>;

  sendDataToFooter() {
    this.tableToFooter.emit([
      this.columnsNumber,
      this.numberOfPages,
      this.tempPaginationDisable,
    ]);
  }

  @Listen('footerToTable')
  footerToTableListener(event: CustomEvent<number>) {
    this.paginationValue = event.detail;
    this.runPagination();
  }

  runPagination = () => {
    // grab all rows in body
    const dataRowsPagination =
      this.tableBodySelector.querySelectorAll('.sdds-table__row');

    dataRowsPagination.forEach((item, i) => {
      // for making logic easier 1st result, 2nd result...
      const index = i + 1;

      if (this.tempPaginationDisable) {
        this.paginationValue = 1;
      } else {
        const lastResult = this.rowsPerPage * this.paginationValue;
        const firstResult = lastResult - this.rowsPerPage;

        if (index > firstResult && index <= lastResult) {
          item.classList.remove('sdds-table__row--hidden');
        } else {
          item.classList.add('sdds-table__row--hidden');
        }
      }
    });
  };

  @Event({
    eventName: 'sortingEnabler',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sortingEnabler: EventEmitter<any>;

  @Watch('bodyData')
  arrayDataWatcher(newValue: string) {
    if (typeof newValue === 'string') {
      this.innerBodyData = JSON.parse(newValue);
    } else {
      this.innerBodyData = newValue;
    }
    this.bodyDataManipulated = [...this.innerBodyData];
    this.bodyDataOriginal = [...this.innerBodyData];
  }

  // Listen to sortColumnData from table-header-element
  @Listen('sortColumnData')
  updateOptionsContent(event: CustomEvent<any>) {
    // Nice usage of array deconstruct
    const [keyValue, sortingDirection] = event.detail;
    this.sortData(keyValue, sortingDirection);
  }

  // Would  be good to make a check to make sure if header is present,
  // that Number of elements in header is equal to the number of elements in first row of table
  countColumnNumber = () => {
    if (this.multiSelect) {
      this.columnsNumber = Object.keys(this.bodyDataManipulated[0]).length + 1;
    } else {
      this.columnsNumber = Object.keys(this.bodyDataManipulated[0]).length;
    }
  };

  compareValues = (key, order = 'asc') =>
    function innerSort(a, b) {
      // eslint-disable-next-line no-prototype-builtins
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === 'desc' ? comparison * -1 : comparison;
    };

  sortData(keyValue, sortingDirection) {
    if (this.multiSelect) {
      this.uncheckedAll();
    }

    // use spread operator to make enable sorting and modifying array, same as using .slice()
    this.bodyDataManipulated = [...this.bodyDataManipulated];
    this.bodyDataManipulated.sort(
      this.compareValues(keyValue, sortingDirection)
    );
    // Uncheck all checkboxes as state is lost on sorting. Do it only in case multiSelect is True.
    // We will try to find a better approach to solve this one
  }

  /* Lines 148 to 201 - multiSelect feature of table */
  selectedDataExporter = () => {
    const selectedRows = this.tableBodySelector.getElementsByClassName(
      'sdds-table__row--selected'
    );

    this.multiselectArray = [];
    for (let j = 0; j < selectedRows.length; j++) {
      const rowCells = selectedRows[j].getElementsByTagName('sdds-body-cell');
      const selectedObject = {};
      for (let i = 0; i < rowCells.length; i++) {
        const currentCellKey = rowCells[i].getAttribute('cell-key');
        const currentCellValue = rowCells[i].getAttribute('cell-value');
        selectedObject[currentCellKey] = currentCellValue;
      }
      this.multiselectArray.push(selectedObject);
    }
    this.multiselectArrayJSON = JSON.stringify(this.multiselectArray);
  };

  @Event({
    eventName: 'tableToBodyRow',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  tableToBodyRow: EventEmitter<any>;

  uncheckedAll = () => {
    this.mainCheckboxStatus = false;
    this.tableToHeaderRow.emit(this.mainCheckboxStatus);
    this.tableToBodyRow.emit(this.mainCheckboxStatus);
  };

  @Listen('headRowToTable')
  headCheckboxListener(event: CustomEvent<boolean>) {
    this.mainCheckboxStatus = event.detail;
    this.selectedDataExporter();
  }

  @Listen('bodyRowToTable')
  bodyCheckboxListener(event: CustomEvent<boolean>) {
    const bodyCheckboxValue = event.detail;
    console.log(bodyCheckboxValue);
    this.bodyCheckBoxClicked();
  }

  @Event({
    eventName: 'tableToHeaderRow',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  tableToHeaderRow: EventEmitter<any>;

  bodyCheckBoxClicked = () => {
    const numberOfRows =
      this.tableBodySelector.getElementsByClassName('sdds-table__row').length;

    const numberOfRowsSelected = this.tableBodySelector.getElementsByClassName(
      'sdds-table__row--selected'
    ).length;

    this.mainCheckboxStatus = numberOfRows === numberOfRowsSelected;

    this.tableToHeaderRow.emit(this.mainCheckboxStatus);

    this.selectedDataExporter();
  };

  setBodyItem = () =>
    this.bodyDataManipulated.map((row) => (
      <sdds-table-body-row>
        {Object.keys(row).map((cellData) => (
          <sdds-body-cell cell-key={cellData} cell-value={row[cellData]} />
        ))}
      </sdds-table-body-row>
    ));

  // Listen to sddsTableSearchTerm from tableToolbar component
  @Listen('sddsTableSearchTerm')
  searchFunction(event: CustomEvent<any>) {
    // Search feat with two search logics
    const searchTerm = event.detail;

    /*
        // Logic for filtering JSON data on all columns
        // Really nice solution, do not delete, might be needed in future
        // Reason to go with upper one is not to lose selected state on checkboxes
        if (searchTerm.length > 0) {
          this.bodyDataManipulated = this.bodyDataOriginal.filter((option) =>
            Object.keys(option).some(
              (key) =>
                String(option[key] ?? '')
                  .toLowerCase()
                  .indexOf(searchTerm) >= 0
            )
          );
        } else {
          this.bodyDataManipulated = this.bodyDataOriginal;
        }
    */

    // grab all rows in body
    const dataRowsFiltering =
      this.tableBodySelector.querySelectorAll('.sdds-table__row');

    if (searchTerm.length > 0) {
      if (this.pagination) {
        this.tempPaginationDisable = true;
      }

      dataRowsFiltering.forEach((item) => {
        const cells = item.querySelectorAll('sdds-body-cell');
        const cellValuesArray = [];

        // go through cells and save cell-values in array
        cells.forEach((cellItem) => {
          const cellValue = cellItem.getAttribute('cell-value').toLowerCase();
          cellValuesArray.push(cellValue);
        });

        // iterate over array of values and see if one matches search string
        const matchCounter = cellValuesArray.find((element) =>
          element.includes(searchTerm)
        );

        // if matches, show parent row, otherwise hide the row
        if (matchCounter) {
          item.classList.remove('sdds-table__row--hidden');
        } else {
          item.classList.add('sdds-table__row--hidden');
        }
      });

      this.disableAllSorting = true;
      this.sortingEnabler.emit(this.disableAllSorting);
    } else {
      if (this.pagination) {
        this.tempPaginationDisable = false;
      }

      dataRowsFiltering.forEach((item) => {
        item.classList.remove('sdds-table__row--hidden');
      });

      this.disableAllSorting = false;
      this.sortingEnabler.emit(this.disableAllSorting);
    }
  }

  render() {
    return (
      <Host selected-rows={this.multiselectArrayJSON}>
        <table
          class={{
            'sdds-table': true,
            'sdds-table--compact': this.compactDesign,
            'sdds-table--divider': this.verticalDividers,
            'sdds-table--no-min-width': this.noMinWidth,
            'sdds-table--on-white-bg': this.whiteBackground,
            'sdds-table--multiselect': this.multiSelect,
          }}
          ref={(table) => (this.tableSelector = table)}
        >
          <sdds-table-toolbar tableTitle={'Hello johnny'}>
            <button
              slot="sdds-table__actionbar"
              class="sdds-table__actionbar-btn"
            >
              <svg
                class="sdds-table__actionbar-btn-icon"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="m13.787 6.803.935-2.823h2.444l.934 2.818.493.152c.567.174 1.115.391 1.63.649l.456.228 2.753-1.428 1.71 1.71-1.37 2.652.282.476c.363.614.649 1.295.866 2.02l.15.498 2.822.935v2.476l-2.82.934-.15.496c-.202.66-.474 1.303-.8 1.885l-.264.47 1.284 2.48-1.71 1.711-2.475-1.281-.467.256c-.608.333-1.24.605-1.894.804l-.495.15-.935 2.82h-2.445l-.935-2.804-.494-.15a9.596 9.596 0 0 1-1.885-.8l-.47-.263-2.48 1.284-1.711-1.71 1.281-2.476-.256-.467a10.015 10.015 0 0 1-.804-1.893l-.15-.496-2.82-.934v-2.461l2.806-.936.15-.497a9.903 9.903 0 0 1 .874-2.034l.267-.47-1.36-2.648 1.722-1.722 2.766 1.435.463-.244a8.826 8.826 0 0 1 1.603-.653l.499-.15Zm.682-4.823c-.724 0-1.328.456-1.559 1.11l-.003.009-.696 2.1c-.336.119-.662.251-.983.4L9.165 4.53a1.623 1.623 0 0 0-1.937.285L5.145 6.897a1.65 1.65 0 0 0-.313 1.912l.996 1.94c-.239.467-.45.957-.628 1.463l-2.086.695-.009.003a1.644 1.644 0 0 0-1.109 1.558v2.967c0 .724.456 1.328 1.11 1.559l.009.003 2.104.697c.158.444.342.875.548 1.293l-.907 1.752a1.623 1.623 0 0 0 .285 1.936l2.098 2.097.014.014a1.672 1.672 0 0 0 1.883.27l1.774-.918c.418.208.854.391 1.297.548l.696 2.088.003.009c.23.653.835 1.109 1.559 1.109h2.95c.724 0 1.328-.456 1.559-1.11l.003-.009.697-2.104c.444-.158.875-.342 1.293-.548l1.752.907a1.623 1.623 0 0 0 1.937-.285l2.097-2.098.013-.014a1.672 1.672 0 0 0 .27-1.883l-.918-1.774c.208-.418.392-.853.548-1.296l2.104-.697.009-.003a1.644 1.644 0 0 0 1.109-1.559v-2.982c0-.724-.456-1.328-1.11-1.559l-.008-.003-2.1-.696c-.174-.5-.38-.992-.625-1.466l.98-1.896a1.623 1.623 0 0 0-.286-1.936l-2.097-2.097-.015-.014a1.672 1.672 0 0 0-1.883-.27l-.007.004-2.091 1.085c-.318-.142-.643-.271-.972-.387L18.981 3.1l-.003-.01A1.644 1.644 0 0 0 17.42 1.98h-2.951Zm-2.632 13.956a4.108 4.108 0 1 1 8.215 0 4.108 4.108 0 0 1-8.215 0Zm4.107-6.108a6.107 6.107 0 1 0 0 12.215 6.107 6.107 0 0 0 0-12.215Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <button
              slot="sdds-table__actionbar"
              class="sdds-table__actionbar-btn"
            >
              Settings
            </button>

            <button
              slot="sdds-table__actionbar"
              class="sdds-table__actionbar-btn"
            >
              Settings
              <svg
                class="sdds-table__actionbar-btn-icon"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="m13.787 6.803.935-2.823h2.444l.934 2.818.493.152c.567.174 1.115.391 1.63.649l.456.228 2.753-1.428 1.71 1.71-1.37 2.652.282.476c.363.614.649 1.295.866 2.02l.15.498 2.822.935v2.476l-2.82.934-.15.496c-.202.66-.474 1.303-.8 1.885l-.264.47 1.284 2.48-1.71 1.711-2.475-1.281-.467.256c-.608.333-1.24.605-1.894.804l-.495.15-.935 2.82h-2.445l-.935-2.804-.494-.15a9.596 9.596 0 0 1-1.885-.8l-.47-.263-2.48 1.284-1.711-1.71 1.281-2.476-.256-.467a10.015 10.015 0 0 1-.804-1.893l-.15-.496-2.82-.934v-2.461l2.806-.936.15-.497a9.903 9.903 0 0 1 .874-2.034l.267-.47-1.36-2.648 1.722-1.722 2.766 1.435.463-.244a8.826 8.826 0 0 1 1.603-.653l.499-.15Zm.682-4.823c-.724 0-1.328.456-1.559 1.11l-.003.009-.696 2.1c-.336.119-.662.251-.983.4L9.165 4.53a1.623 1.623 0 0 0-1.937.285L5.145 6.897a1.65 1.65 0 0 0-.313 1.912l.996 1.94c-.239.467-.45.957-.628 1.463l-2.086.695-.009.003a1.644 1.644 0 0 0-1.109 1.558v2.967c0 .724.456 1.328 1.11 1.559l.009.003 2.104.697c.158.444.342.875.548 1.293l-.907 1.752a1.623 1.623 0 0 0 .285 1.936l2.098 2.097.014.014a1.672 1.672 0 0 0 1.883.27l1.774-.918c.418.208.854.391 1.297.548l.696 2.088.003.009c.23.653.835 1.109 1.559 1.109h2.95c.724 0 1.328-.456 1.559-1.11l.003-.009.697-2.104c.444-.158.875-.342 1.293-.548l1.752.907a1.623 1.623 0 0 0 1.937-.285l2.097-2.098.013-.014a1.672 1.672 0 0 0 .27-1.883l-.918-1.774c.208-.418.392-.853.548-1.296l2.104-.697.009-.003a1.644 1.644 0 0 0 1.109-1.559v-2.982c0-.724-.456-1.328-1.11-1.559l-.008-.003-2.1-.696c-.174-.5-.38-.992-.625-1.466l.98-1.896a1.623 1.623 0 0 0-.286-1.936l-2.097-2.097-.015-.014a1.672 1.672 0 0 0-1.883-.27l-.007.004-2.091 1.085c-.318-.142-.643-.271-.972-.387L18.981 3.1l-.003-.01A1.644 1.644 0 0 0 17.42 1.98h-2.951Zm-2.632 13.956a4.108 4.108 0 1 1 8.215 0 4.108 4.108 0 0 1-8.215 0Zm4.107-6.108a6.107 6.107 0 1 0 0 12.215 6.107 6.107 0 0 0 0-12.215Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <sdds-button
              slot="sdds-table__actionbar"
              type="primary"
              size="sm"
              text="Download"
            ></sdds-button>
          </sdds-table-toolbar>
          {this.johnnyTest && (
            <sdds-table-header>
              <sdds-table-header-row>
                <slot />
              </sdds-table-header-row>
            </sdds-table-header>
          )}
          {this.johnnyTest && (
            <sdds-table-body
              ref={(tableBody) => (this.tableBodySelector = tableBody)}
            >
              {this.setBodyItem()}
            </sdds-table-body>
          )}

          {this.pagination && <sdds-table-footer></sdds-table-footer>}

          <slot />
        </table>
      </Host>
    );
  }
}
