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

  @State() mainCheckboxSelected: boolean = false;

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
    // use spread operator to make enable sorting and modifying array, same as using .slice()
    this.bodyDataManipulated = [...this.bodyDataManipulated];
    this.bodyDataManipulated.sort(
      this.compareValues(keyValue, sortingDirection)
    );
    // Uncheck all checkboxes as state is lost on sorting. Do it only in case multiSelect is True.
    // We will try to find a better approach to solve this one
    if (this.multiSelect) {
      this.uncheckedAll();
    }
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

  uncheckedAll = () => {
    if (this.headCheckBox.checked) {
      this.headCheckBox.checked = false;
    }

    const bodyCheckboxes = Array.from(this.tableBodySelector.children);

    bodyCheckboxes.forEach((item) => {
      const singleCheckbox = item.querySelector(
        '.sdds-form-input'
      ) as HTMLInputElement;

      const row = singleCheckbox.closest('tr');

      if (singleCheckbox.checked) {
        singleCheckbox.checked = false;
        row.classList.remove('sdds-table__row--selected');
      }
    });

    this.multiselectArrayJSON = JSON.stringify([]);
  };

  headCheckBoxClicked = (event) => {
    this.mainCheckboxSelected = !!event.currentTarget.checked;

    const bodyCheckboxes = Array.from(this.tableBodySelector.children);

    bodyCheckboxes.forEach((item) => {
      const singleCheckbox = item.querySelector(
        '.sdds-form-input'
      ) as HTMLInputElement;

      const row = singleCheckbox.closest('sdds-table-body-row');

      if (event.currentTarget.checked) {
        singleCheckbox.checked = true;
        row.classList.add('sdds-table__row--selected');
      } else {
        singleCheckbox.checked = false;
        row.classList.remove('sdds-table__row--selected');
      }
    });
    this.selectedDataExporter();
  };

  bodyCheckBoxClicked = (event) => {
    const row = event.currentTarget.closest('sdds-table-body-row');

    if (event.currentTarget.checked === true) {
      row.classList.add('sdds-table__row--selected');
    } else {
      row.classList.remove('sdds-table__row--selected');
    }

    const numberOfRows =
      this.tableBodySelector.getElementsByClassName('sdds-table__row').length;

    const numberOfRowsSelected = this.tableBodySelector.getElementsByClassName(
      'sdds-table__row--selected'
    ).length;

    this.mainCheckboxSelected = numberOfRows === numberOfRowsSelected;

    this.selectedDataExporter();
  };

  setBodyItem = () =>
    this.bodyDataManipulated.map((row) => (
      <sdds-table-body-row>
        {this.multiSelect && (
          <td class="sdds-table__body-cell sdds-table__body-cell--checkbox">
            <div class="sdds-checkbox-item">
              <label class="sdds-form-label sdds-form-label--data-table">
                <input
                  class="sdds-form-input"
                  type="checkbox"
                  onChange={(event) => this.bodyCheckBoxClicked(event)}
                />
              </label>
            </div>
          </td>
        )}
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
          <sdds-table-toolbar
            tableTitle="Hello new toolbar"
            showSearchbar={true}
          />

          {this.johnnyTest && (
            <sdds-table-header>
              <sdds-table-header-row>
                {this.multiSelect && (
                  <th class="sdds-table__header-cell sdds-table__header-cell--checkbox">
                    <div class="sdds-checkbox-item">
                      <label class="sdds-form-label sdds-form-label--data-table">
                        <input
                          class="sdds-form-input"
                          type="checkbox"
                          onChange={(e) => this.headCheckBoxClicked(e)}
                          checked={this.mainCheckboxSelected}
                          ref={(headCheckbox) =>
                            (this.headCheckBox = headCheckbox)
                          }
                        />
                      </label>
                    </div>
                  </th>
                )}
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
