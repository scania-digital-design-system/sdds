import { Component, Host, h, Method, State, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-folder-tabs-item',
  styleUrl: 'sdds-folder-tabs-item.scss',
  shadow: true,
})
export class SddsFolderTabsItem {
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
        <div
          class={`${this.disabled ? 'disabled' : ''}
        ${this.selected ? 'selected' : ''}`}
          style={{ width: `${this.tabWidth}px` }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
