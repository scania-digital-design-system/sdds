import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'sdds-table',
  styleUrl: 'table.scss',
  shadow: true,
})

// eslint-disable-next-line import/prefer-default-export
export class Table {
  @Prop({ reflect: true }) tableTitle: string;

  @Prop({ reflect: true }) verticalDividers: boolean = true;

  @Prop({ reflect: true }) compactDesign: boolean = true;

  @Prop({ reflect: true }) headerData: string[] = [
    'Header 1',
    'Header 2',
    'Header 3',
    'Header 4',
  ];

  @Prop() bodyData = [
    {
      item1: 'Baka',
      item2: 'Deda',
      item3: 'Mama',
      item4: 'Tata',
    },
    {
      item1: 'Baka2',
      item2: 'Deda2',
      item3: 'Mama2',
      item4: 'Tata2',
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

  onButtonClick(index) {
    console.log(`Index is ${index}`);

    // Double check why is this needed
    this.bodyDataManipulated = [...this.bodyDataManipulated];

    this.bodyDataManipulated = this.bodyDataManipulated.sort((a, b) => {
      return a.item1.toLowerCase() < b.item1.toLowerCase() ? 1 : -1;
    });
    console.log(this.bodyDataManipulated);
  }

  setHeaderItems = () => (
    <tr class="sdds-table__row">
      {this.headerData.map((item, index) => (
        <th key={index} class="sdds-table__header-cell">
          <button onClick={() => this.onButtonClick(index)}>{item}</button>
        </th>
      ))}
    </tr>
  );

  setBodyItem = () =>
    this.bodyDataManipulated.map((row) => (
      <tr class="sdds-table__row">
        {Object.keys(row).map((cellData) => (
          <td class="sdds-table__header-cell">{row[cellData]}</td>
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
        <thead class="sdds-table__header">{this.setHeaderItems()}</thead>
        <tbody class="sdds-table__body">{this.setBodyItem()}</tbody>
      </table>
    );
  }
}
