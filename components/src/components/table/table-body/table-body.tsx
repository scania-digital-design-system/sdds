import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
  Watch,
} from '@stencil/core';

@Component({
  tag: 'sdds-table-body',
  styleUrl: 'table-body.scss',
  shadow: false,
})
export class TableBody {
  // TODO: move this one the footer!!!
  @State() rowsPerPage: number = 1;

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

  @Element() host: HTMLElement;

  @State() enableMultiselectTableBody: boolean = false;

  @State() pagination: boolean = true;

  @State() innerBodyData = [];

  @State() bodyDataManipulated = [];

  @State() bodyDataOriginal = [];

  @State() multiselectArray = [];

  @State() multiselectArrayJSON: string;

  @State() mainCheckboxStatus: boolean = false;

  @State() columnsNumber: number = 0;

  @State() disableAllSorting: boolean = false;

  @State() numberOfPages: number = 0;

  @State() paginationValue: number = 1;

  @State() tempPaginationDisable: boolean = false;

  @State() showNoResultsMessage: boolean = false;

  componentWillLoad() {
    this.arrayDataWatcher(this.bodyData);
  }

  @Listen('enableMultiselectEvent', { target: 'body' })
  enableMultiselectEventListener(event: CustomEvent<boolean>) {
    this.enableMultiselectTableBody = event.detail;
  }

  @Listen('rowsPerPageEvent', { target: 'body' })
  rowsPerPageListener(event: CustomEvent<number>) {
    this.rowsPerPage = event.detail;
    this.numberOfPages = Math.ceil(
      this.bodyDataManipulated.length / this.rowsPerPage
    );
  }

  componentDidRender() {
    // multiselect feature requires one extra column for checkboxes...
    if (this.enableMultiselectTableBody) {
      this.columnsNumber = Object.keys(this.bodyDataManipulated[0]).length + 1;
    } else {
      this.columnsNumber = Object.keys(this.bodyDataManipulated[0]).length;
    }
    if (this.pagination) {
      this.sendDataToFooter();
      this.runPagination();
    }
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

  @Listen('currentPageValue', { target: 'body' })
  currentPageValueListener(event: CustomEvent<number>) {
    this.paginationValue = event.detail;
    this.runPagination();
  }

  runPagination = () => {
    // grab all rows in body
    const dataRowsPagination = this.host.querySelectorAll('.sdds-table__row');

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
  @Listen('sortColumnData', { target: 'body' })
  updateOptionsContent(event: CustomEvent<any>) {
    // Nice usage of array deconstruct
    const [keyValue, sortingDirection] = event.detail;
    this.sortData(keyValue, sortingDirection);
  }

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
    if (this.enableMultiselectTableBody) {
      // Uncheck all checkboxes as state of checkbox is lost on sorting. Do it only in case multiSelect is True.
      this.uncheckedAll();
    }

    // use spread operator to make enable sorting and modifying array, same as using .slice()
    this.bodyDataManipulated = [...this.bodyDataManipulated];
    this.bodyDataManipulated.sort(
      this.compareValues(keyValue, sortingDirection)
    );
  }

  selectedDataExporter = () => {
    const selectedRows = this.host.getElementsByClassName(
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

  @Listen('headRowToTable', { target: 'body' })
  headCheckboxListener(event: CustomEvent<boolean>) {
    this.mainCheckboxStatus = event.detail;
    this.selectedDataExporter();
  }

  @Listen('bodyRowToTable', { target: 'body' })
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
      this.host.getElementsByClassName('sdds-table__row').length;

    const numberOfRowsSelected = this.host.getElementsByClassName(
      'sdds-table__row--selected'
    ).length;

    this.mainCheckboxStatus = numberOfRows === numberOfRowsSelected;

    this.tableToHeaderRow.emit(this.mainCheckboxStatus);

    this.selectedDataExporter();
  };

  // Listen to sddsTableSearchTerm from tableToolbar component
  @Listen('sddsTableSearchTerm', { target: 'body' })
  searchFunction(event: CustomEvent<any>) {
    // Search feat with two search logics
    const searchTerm = event.detail;
    console.log('Search function listens too');
    console.log(this.host);

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
    const dataRowsFiltering = this.host.querySelectorAll('sdds-table-body-row');
    console.log(dataRowsFiltering);

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

      const dataRowsHidden = this.host.querySelectorAll(
        '.sdds-table__row--hidden'
      );

      // If same, info message will be shown
      this.showNoResultsMessage =
        dataRowsHidden.length === dataRowsFiltering.length;
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
      <Host data-selected-rows={this.multiselectArrayJSON}>
        {this.bodyDataManipulated.map((row) => (
          <sdds-table-body-row>
            {Object.keys(row).map((cellData) => (
              <sdds-body-cell cell-key={cellData} cell-value={row[cellData]} />
            ))}
          </sdds-table-body-row>
        ))}
        {this.showNoResultsMessage && (
          <tr>
            <td class="sdds-table__info-message" colSpan={this.columnsNumber}>
              Unfortunately, no data matches your search term &#128533;
            </td>
          </tr>
        )}
        <slot></slot>
      </Host>
    );
  }
}
