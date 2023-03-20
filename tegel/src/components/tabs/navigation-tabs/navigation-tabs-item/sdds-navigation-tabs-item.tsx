import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-navigation-tabs-item',
  styleUrl: 'sdds-navigation-tabs-item.scss',
  shadow: true,
})
export class SddsNavigationTabsItem {
  /** Disables the tab. */
  @Prop() disabled: boolean = false;

  /** Marks the tab as the selected one. */
  @Prop() selected: boolean = false;

  render() {
    return (
      <Host>
        <div
          class={`navigation-tab-item  ${this.selected ? 'selected' : ''}
           ${this.disabled ? 'disabled' : ''}`}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
