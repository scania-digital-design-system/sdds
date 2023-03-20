import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-inline-tabs-item',
  styleUrl: 'sdds-inline-tabs-item.scss',
  shadow: true,
})
export class SddsInlineTabsItem {
  /** Disables the tab. */
  @Prop() disabled: boolean = false;

  /** Marks the tab as the selected one. */
  @Prop() selected: boolean = false;

  render() {
    return (
      <Host>
        <div
          class={`inline-tab-item  ${this.selected ? 'selected' : ''}
           ${this.disabled ? 'disabled' : ''}`}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
