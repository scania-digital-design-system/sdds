import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-table-head',
  styleUrl: 'table.scss',
  shadow: true,
})
export class TableHeaderElement {
  @Prop({ reflect: true }) columnKey: string;

  @Prop({ reflect: true }) columnTitle: string;

  @Prop() isSortable: boolean = true;

  sortButtonClick = (key) => {
    console.log(`It triggers${key}`);
  };

  headerCellContent = () => {
    if (this.isSortable) {
      return (
        <button onClick={() => this.sortButtonClick(this.columnKey)}>
          {this.columnTitle}
        </button>
      );
    }
    return this.columnTitle;
  };

  render() {
    return (
      <Host class="sdds-table__header-cell">{this.headerCellContent()}</Host>
    );
  }
}
