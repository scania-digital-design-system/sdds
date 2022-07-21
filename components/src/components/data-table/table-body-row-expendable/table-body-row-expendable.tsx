import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'sdds-table-body-row-expendable',
  styleUrl: 'table-body-row-expendable.scss',
  shadow: true,
})
export class TableBodyRowExpandable {
  @State() isExtended: boolean = false;

  onChangeHandler(event) {
    this.isExtended = event.currentTarget.checked;
  }

  render() {
    return (
      <Host>
        <tr
          class={{
            'sdds-table__row': true,
            'sdds-table__row-extend--active': this.isExtended,
          }}
        >
          <td class="sdds-table__cell">
            <label class="sdds-table__expand-control-container">
              <input
                class="sdds-table__expand-input"
                type="checkbox"
                onChange={(event) => this.onChangeHandler(event)}
              />
              <span
                class={{
                  'sdds-expendable-row-icon': true,
                  'sdds-expendable-row-icon--opened': this.isExtended,
                }}
              >
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.273 9.783a1 1 0 0 1 1.415 0l9.888 9.888a.6.6 0 0 0 .848 0l9.888-9.888a1 1 0 1 1 1.415 1.414l-9.889 9.889a2.6 2.6 0 0 1-3.677 0l-9.888-9.889a1 1 0 0 1 0-1.414Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </label>
          </td>
          <slot />
        </tr>

        <tr
          class={{
            'sdds-table__row-extend': true,
            'sdds-table__row-extend--opened': this.isExtended,
          }}
        >
          <td class="sdds-table__cell-extend" colSpan={5}>
            <slot name="extend" />
          </td>
        </tr>
      </Host>
    );
  }
}
