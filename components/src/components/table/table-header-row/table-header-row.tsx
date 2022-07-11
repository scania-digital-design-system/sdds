import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'sdds-table-header-row',
  styleUrl: 'table-header-row.scss',
  shadow: true,
})
export class TableHeaderRow {
  @Prop() multiSelect: boolean = true;

  @State() mainCheckboxSelected: boolean = false;

  headCheckBoxClicked(event) {
    console.log(`Event is ${event.value}`);
  }

  render() {
    return (
      <Host>
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
        <slot></slot>
      </Host>
    );
  }
}
