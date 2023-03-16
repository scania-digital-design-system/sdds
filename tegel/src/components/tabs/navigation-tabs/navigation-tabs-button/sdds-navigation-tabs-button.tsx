import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-navigation-tabs-button',
  styleUrl: 'sdds-navigation-tabs-button.scss',
  shadow: true,
})
export class SddsNavigationTabsButton {
  /** Disables the tab. */
  @Prop() disabled: boolean = false;

  /** Marks the tab as the selected one. */
  @Prop() selected: boolean = false;

  render() {
    return (
      <Host role="listitem">
        <button
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
