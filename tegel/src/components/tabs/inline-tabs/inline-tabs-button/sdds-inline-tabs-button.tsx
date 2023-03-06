import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-inline-tabs-button',
  styleUrl: 'sdds-inline-tabs-button.scss',
  shadow: true,
})
export class SddsInlineTabsButton {
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
            <slot></slot>
          </div>
        </button>
      </Host>
    );
  }
}
