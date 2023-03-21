import { Component, Host, h, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'sdds-folder-tabs-button',
  styleUrl: 'sdds-folder-tabs-button.scss',
  shadow: true,
})
export class SddsFolderTabsButton {
  /** Disables the tab. */
  @Prop() disabled: boolean = false;

  /** Marks the tab as the selected one. */
  @Prop() selected: boolean = false;

  @State() tabWidth: number;

  /** @internal Method to set the width of the tab. Used by the <sdds-folder-tabs> */
  @Method()
  async setTabWidth(width: number) {
    this.tabWidth = width;
  }

  render() {
    return (
      <Host role="listitem">
        <button
          style={{ width: `${this.tabWidth}px` }}
          class={`${this.selected ? 'selected' : ''}
          ${this.disabled ? 'disabled' : ''}`}
          disabled={this.disabled}
        >
          <div class="label">
            <slot name="label"></slot>
          </div>
        </button>
      </Host>
    );
  }
}
