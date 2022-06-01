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

// eslint-disable-next-line import/prefer-default-export
export class Table {
  @Prop({ reflect: true }) tableTitle: string;

  @Prop({ reflect: true }) verticalDividers: boolean = false;

  @Prop({ reflect: true }) compactDesign: boolean = false;

  @Prop({ reflect: true }) noMinWidth: boolean = false;

  @Prop({ reflect: true }) whiteBackground: boolean = false;

  @Prop({ reflect: true }) multiSelect: boolean = false;

  @Prop({ reflect: true }) filtering: boolean = false;

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

  @State() bodyRowSelected = false;

  @State() multiselectArray = [];

  @State() arrayOfKeys = [];

  @State() multiselectArrayJSON: string;

  @State() mainCheckboxSelected: boolean = false;

  @Element() host: HTMLElement;

  @State() tableSelector: HTMLElement;

  @State() disableAllSorting: boolean = false;

  componentWillLoad() {
    this.arrayDataWatcher(this.bodyData);
  }

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
    this.arrayOfKeys = Object.keys(this.bodyDataManipulated[0]);
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
  countBodyElement = () => {
    let count = 0;
    Object.keys(this.bodyDataManipulated[0]).forEach(() => count++);
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
  selectedDataExporter = (event) => {
    const selectedRows = event.currentTarget
      .closest('.sdds-table')
      .getElementsByClassName('sdds-table__body')[0]
      .getElementsByClassName('sdds-table__row--selected');

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
    const headCheckbox = this.tableSelector.querySelector(
      '.sdds-table__header-cell.sdds-table__header-cell--checkbox > .sdds-checkbox-item > .sdds-form-label > .sdds-form-input'
    ) as HTMLInputElement;

    if (headCheckbox.checked) {
      headCheckbox.checked = false;
    }

    const bodyCheckboxes =
      this.tableSelector.getElementsByClassName('sdds-table__body')[0].children;

    for (let z = 0; z < bodyCheckboxes.length; z++) {
      const singleCheckbox = bodyCheckboxes[z].getElementsByClassName(
        'sdds-form-input'
      )[0] as HTMLInputElement;
      const row = singleCheckbox.closest('tr');

      if (singleCheckbox.checked) {
        singleCheckbox.checked = false;
        row.classList.remove('sdds-table__row--selected');
      }
    }
    this.multiselectArrayJSON = JSON.stringify([]);
  };

  headCheckBoxClicked = (event) => {
    this.mainCheckboxSelected = !!event.currentTarget.checked;

    const bodyCheckboxes = event.currentTarget
      .closest('.sdds-table')
      .getElementsByClassName('sdds-table__body')[0].children;

    for (let z = 0; z < bodyCheckboxes.length; z++) {
      const singleCheckbox =
        bodyCheckboxes[z].getElementsByClassName('sdds-form-input')[0];
      const row = singleCheckbox.closest('tr');

      if (event.currentTarget.checked) {
        singleCheckbox.checked = true;
        row.classList.add('sdds-table__row--selected');
      } else {
        singleCheckbox.checked = false;
        row.classList.remove('sdds-table__row--selected');
      }
    }
    this.selectedDataExporter(event);
  };

  bodyCheckBoxClicked = (event) => {
    const row = event.currentTarget.closest('tr');

    if (event.currentTarget.checked === true) {
      row.classList.add('sdds-table__row--selected');
    } else {
      row.classList.remove('sdds-table__row--selected');
    }

    const tableBodyLevel = event.currentTarget
      .closest('.sdds-table')
      .getElementsByClassName('sdds-table__body')[0];

    const numberOfRows =
      tableBodyLevel.getElementsByClassName('sdds-table__row').length;

    const numberOfRowsSelected = tableBodyLevel.getElementsByClassName(
      'sdds-table__row--selected'
    ).length;

    this.mainCheckboxSelected = numberOfRows === numberOfRowsSelected;

    this.selectedDataExporter(event);
  };

  setBodyItem = () =>
    this.bodyDataManipulated.map((row) => (
      <tr class="sdds-table__row">
        {this.multiSelect && (
          <td class="sdds-table__body-cell sdds-table__body-cell--checkbox">
            <div class="sdds-checkbox-item">
              <label class="sdds-form-label sdds-form-label--data-table">
                <input
                  class="sdds-form-input"
                  type="checkbox"
                  onChange={(e) => this.bodyCheckBoxClicked(e)}
                />
              </label>
            </div>
          </td>
        )}
        {Object.keys(row).map((cellData) => (
          <sdds-body-cell cell-key={cellData} cell-value={row[cellData]} />
        ))}
      </tr>
    ));

  // Search feat with two search logics
  searchFunction = (event) => {
    // grab the value of search and turn to small caps
    const searchTerm = event.currentTarget.value.toLowerCase();

    const sddsTableSearchBar = event.currentTarget.parentElement;

    // grab all rows in body
    const dataRows =
      event.currentTarget.parentElement.parentElement.parentElement.parentElement
        .getElementsByClassName('sdds-table__body')[0]
        .querySelectorAll('.sdds-table__row');

    // turn it into array
    const dataRowsToArray = [...dataRows];

    dataRowsToArray.map((item) => {
      // every row contains of many cells, find them and turn into array
      const cells = [...item.getElementsByTagName('sdds-body-cell')];

      const cellValuesArray = [];
      // go through cells and save cell-values in array
      cells.map((cellItem) => {
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

    if (searchTerm.length > 0) {
      sddsTableSearchBar.classList.add('sdds-table__searchbar--active');

      this.disableAllSorting = true;
      this.sortingEnabler.emit(this.disableAllSorting);
    } else {
      sddsTableSearchBar.classList.remove('sdds-table__searchbar--active');
      this.disableAllSorting = false;
      this.sortingEnabler.emit(this.disableAllSorting);
    }

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
  };

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
          {(this.tableTitle || this.filtering) && (
            <div class="sdds-table__upper-bar">
              <div class="sdds-table__upper-bar-flex">
                <caption class="sdds-table__title">{this.tableTitle}</caption>
                <div class="sdds-table__actionbar">
                  {this.filtering && (
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
            </div>
          )}
          <thead class="sdds-table__header">
            <tr class="sdds-table__header-row">
              {this.multiSelect && (
                <th class="sdds-table__header-cell sdds-table__header-cell--checkbox">
                  <div class="sdds-checkbox-item">
                    <label class="sdds-form-label sdds-form-label--data-table">
                      <input
                        class="sdds-form-input"
                        type="checkbox"
                        onChange={(e) => this.headCheckBoxClicked(e)}
                        checked={this.mainCheckboxSelected}
                      />
                    </label>
                  </div>
                </th>
              )}
              <slot />
            </tr>
          </thead>
          <tbody class="sdds-table__body">{this.setBodyItem()}</tbody>
        </table>
      </Host>
    );
  }
}
