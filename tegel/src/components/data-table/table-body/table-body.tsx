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
import dummyData from './dummy-data.json';
import { internalSddsChange } from '../table/table';

const relevantTableProps: internalSddsChange['changed'] = [
  'enableMultiselect',
  'enableExpandableRows',
];

@Component({
  tag: 'sdds-table-body',
  styleUrl: 'table-body.scss',
  shadow: false,
})
export class TableBody {
  /** Disables inbuilt filtering logic, leaving user an option to create own filter functionality while listening to events from sdds-table-toolbar component for search term */
  @Prop() disableFilteringFunction: boolean = false;

  /** Disables inbuilt sorting logic, leaving user an option to create own sorting functionality while listening to events from sdds-header-cell component for sorting */
  @Prop() disableSortingFunction: boolean = false;

  /** Prop to pass JSON string which enables automatic rendering of table rows and cells  */
  @Prop() bodyData: any;

  /** Prop for showcase of rendering JSON in body-data, just for presentation purposes */
  @Prop() enableDummyData: boolean = false;

  @State() dummyData: any = JSON.stringify(dummyData);

  @Element() host: HTMLElement;

  @State() rowsPerPage: number = 1;

  @State() enableMultiselect: boolean = false;

  @State() enablePaginationTableBody: boolean = false;

  @State() enableExpandableRows: boolean = true;

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

  @State() tableId: string = '';

  tableEl: HTMLSddsTableElement;

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

  /** @internal Event that sends unique table identifier and enable/disable status for sorting functionality */
  @Event({
    eventName: 'internalSddsSortingChange',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  internalSddsSortingChange: EventEmitter<any>;

  /** @internal Sends unique table identifier and mainCheckbox status to all rows when multiselect feature is enabled */
  @Event({
    eventName: 'internalSddsCheckboxChange',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  internalSddsCheckboxChange: EventEmitter<any>;

  /** @internal Sends unique table identifier and status if mainCheckbox should change its state based on selection status of single rows when multiselect feature is used */
  @Event({
    eventName: 'internalSddsMainCheckboxChange',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  internalSddsMainCheckboxChange: EventEmitter<any>;

  @Listen('internalSddsChange', { target: 'body' })
  internalSddsChangeListener(event: CustomEvent<internalSddsChange>) {
    if (this.tableId === event.detail.tableId) {
      event.detail.changed
        .filter((changedProp) => relevantTableProps.includes(changedProp))
        .forEach((changedProp) => {
          if (typeof this[changedProp] === 'undefined') {
            throw new Error(`Table prop is not supported: ${changedProp}`);
          }
          this[changedProp] = event.detail[changedProp];
        });
    }
  }

  static compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
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
  }

  uncheckAll = () => {
    this.mainCheckboxStatus = false;
    this.internalSddsMainCheckboxChange.emit([this.tableId, this.mainCheckboxStatus]);
    this.internalSddsCheckboxChange.emit([this.tableId, this.mainCheckboxStatus]);
  };

  sortData(keyValue, sortingDirection) {
    if (!this.disableSortingFunction) {
      if (this.enableMultiselect) {
        // Uncheck all checkboxes as state of checkbox is lost on sorting. Do it only in case multiSelect is True.
        this.uncheckAll();
      }

      // use spread operator to make enable sorting and modifying array, same as using .slice()
      this.bodyDataManipulated = [...this.bodyDataManipulated];
      this.bodyDataManipulated.sort(TableBody.compareValues(keyValue, sortingDirection));
    }
  }

  // Listen to sortColumnData from data-table-header-element - TODO
  @Listen('internalSddsSortColumn', { target: 'body' })
  updateOptionsContent(event: CustomEvent<any>) {
    const [receivedID, receivedKeyValue, receivedSortingDirection] = event.detail;
    if (this.tableId === receivedID) {
      this.sortData(receivedKeyValue, receivedSortingDirection);
    }
  }

  selectedDataExporter = () => {
    const selectedRows = this.host.getElementsByClassName('sdds-table__row--selected');

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

  @Listen('internalSddsMainCheckboxChange', { target: 'body' }) // - 
  headCheckboxListener(event: CustomEvent<any>) {
    if (this.tableId === event.detail[0]) {
      [, this.mainCheckboxStatus] = event.detail;
      this.selectedDataExporter();
    }
  }

  bodyCheckBoxClicked = () => {
    const numberOfRows = this.host.getElementsByClassName('sdds-table__row').length;

    const numberOfRowsSelected = this.host.getElementsByClassName(
      'sdds-table__row--selected',
    ).length;

    this.mainCheckboxStatus = numberOfRows === numberOfRowsSelected;

    this.internalSddsMainCheckboxChange.emit([this.tableId, this.mainCheckboxStatus]);

    this.selectedDataExporter();
  };

  // No need to read the value, event is here just to trigger another function
  @Listen('internalSddsRowChange', { target: 'body' })
  bodyCheckboxListener() {
    this.bodyCheckBoxClicked();
  }

  searchFunction(searchTerm) {
    if (!this.disableFilteringFunction) {
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

      if (searchTerm.length > 0) {
        if (this.enablePaginationTableBody) {
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
          const matchCounter = cellValuesArray.find((element) => element.includes(searchTerm));

          // if matches, show parent row, otherwise hide the row
          if (matchCounter) {
            item.classList.remove('sdds-table__row--hidden');
          } else {
            item.classList.add('sdds-table__row--hidden');
          }
        });

        this.disableAllSorting = true;
        this.internalSddsSortingChange.emit([this.tableId, this.disableAllSorting]);

        const dataRowsHidden = this.host.querySelectorAll('.sdds-table__row--hidden');

        // If same, info message will be shown
        this.showNoResultsMessage = dataRowsHidden.length === dataRowsFiltering.length;
      } else {
        if (this.enablePaginationTableBody) {
          this.tempPaginationDisable = false;
        }

        // Check if pagination is ON in order to prevent showing all rows
        if (this.enablePaginationTableBody) {
          // TODO: EMIT PAGINATION
        } else {
          dataRowsFiltering.forEach((item) => {
            item.classList.remove('sdds-table__row--hidden');
          });
        }

        this.disableAllSorting = false;
        this.internalSddsSortingChange.emit([this.tableId, this.disableAllSorting]);
      }
    }
  }

  // Listen to internalSddsFilter from tableToolbar component
  @Listen('internalSddsFilter', { target: 'body' })
  internalSddsFilterListener(event: CustomEvent<any>) {
    if (this.tableId === event.detail[0]) {
      this.searchFunction(event.detail[1]);
    }
  }

  connectedCallback() {
    this.tableEl = this.host.closest('sdds-table');
    this.tableId = this.tableEl.tableId;
  }

  componentWillLoad() {
    relevantTableProps.forEach((tablePropName) => {
      this[tablePropName] = this.tableEl[tablePropName];
    });

    if (this.enableDummyData) {
      this.bodyData = this.dummyData;
    } else if (this.bodyData) {
      this.arrayDataWatcher(this.bodyData);
    }
  }

  componentWillRender() {
    const headerColumnsNo =
      this.host.parentElement.querySelector('sdds-table-header').children.length;

    // multiselect and expended features requires one extra column for controls...
    if (this.enableMultiselect || this.enableExpandableRows) {
      this.columnsNumber = headerColumnsNo + 1;
    } else {
      this.columnsNumber = headerColumnsNo;
    }
  }

  render() {
    return (
      <Host data-selected-rows={this.multiselectArrayJSON}>
        {this.bodyDataManipulated.map((row) => (
          <sdds-table-body-row>
            {Object.keys(row).map((cellData) => (
              <sdds-body-cell cell-key={cellData} cell-value={row[cellData]}></sdds-body-cell>
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
