import {
  Component,
  Prop,
  h,
  Host,
  Event,
  EventEmitter,
  State,
} from '@stencil/core';

@Component({
  tag: 'sdds-table-head',
  styleUrl: 'table.scss',
  shadow: true,
})
export class TableHeaderElement {
  @Prop({ reflect: true }) columnKey: string;

  @Prop({ reflect: true }) columnTitle: string;

  @Prop() isSortable: boolean = true;

  @State() sortingDirection: string = 'asc';

  @Event({
    eventName: 'sortColumnData',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sortColumnData: EventEmitter<any>;

  sortButtonClick = (key) => {
    console.log(`It triggers: ${key}`);
    // Toggling direction of sorting as we only use one button for sorting
    if (this.sortingDirection !== 'asc') {
      this.sortingDirection = 'asc';
    } else {
      this.sortingDirection = 'desc';
    }
    // Use array to send both key and sorting direction
    this.sortColumnData.emit([key, this.sortingDirection]);
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
