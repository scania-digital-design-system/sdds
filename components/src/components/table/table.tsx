import { Component, Prop, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'sdds-table',
  styleUrl: 'table.scss',
  shadow: true,
})

// eslint-disable-next-line import/prefer-default-export
export class Table {
  @Prop({ reflect: true }) tableTitle: string;

  @Prop({ reflect: true }) verticalDividers: boolean = true;

  @Prop({ reflect: true }) compactDesign: boolean = false;

  @Prop() bodyData = [
    {
      item1: 2,
      item2: 'Abba',
      item3: 'Helloo',
      item4: 'Salt Lake City',
    },
    {
      item1: 1,
      item2: 'Corn',
      item3: 'Hello',
      item4: 'Chicago',
    },
  ];

  @State() bodyDataManipulated = [];

  componentWillLoad() {
    this.bodyDataManipulated = this.bodyData;
    console.log(this.bodyDataManipulated);
  }

  // Would  be good to make a check to make sure if header is present,
  // that Number of elements in header is equal to the number of elements in first row of table
  countBodyElement = () => {
    let count = 0;
    Object.keys(this.bodyDataManipulated[0]).forEach(() => count++);
    console.log(`Value is: ${count}`);
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
  }

  // Listen to sortColumnData from table-header-element
  @Listen('sortColumnData')
  updateOptionsContent(event: CustomEvent<any>) {
    // Nice usage of array deconstruct
    const [keyValue, sortingDirection] = event.detail;
    console.log(`Data received is:${keyValue}`);
    this.sortData(keyValue, sortingDirection);
  }

  setBodyItem = () =>
    this.bodyDataManipulated.map((row) => (
      <tr class="sdds-table__row">
        {Object.keys(row).map((cellData) => (
          <td class="sdds-table__body-cell">{row[cellData]}</td>
        ))}
      </tr>
    ));

  render() {
    return (
      <table
        class={{
          'sdds-table': true,
          'sdds-table-compact': this.compactDesign,
          'sdds-table-dividers': this.verticalDividers,
        }}
      >
        {this.tableTitle && (
          <caption class="sdds-table__title">{this.tableTitle}</caption>
        )}
        <thead class="sdds-table__header">
          <slot />
        </thead>
        <tbody class="sdds-table__body">{this.setBodyItem()}</tbody>
      </table>
    );
  }
}
