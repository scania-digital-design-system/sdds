import { Component, Host, h, Prop, Element } from '@stencil/core';
import { HostElement, Method, State } from '@stencil/core/internal';

@Component({
  tag: 'sdds-tab-button',
  styleUrl: 'sdds-tab-button.scss',
  shadow: true,
})
export class SddsTabButton {
  /** Disables the tab. */
  @Prop() disabled: boolean = false;

  /** Marks the tab as the selected one. */
  @Prop() selected: boolean = false;

  @State() tabIndex: number;

  @State() tabWidth: number;

  @Element() host: HostElement;

  type: 'folder-tab' | 'inline-tab';

  /** Method to set the width of the tab. Used by the <sdds-folder-tabs> */
  @Method()
  async setTabWidth(width: number) {
    this.tabWidth = width;
  }

  componentWillRender() {
    switch (this.host.parentElement.tagName) {
      case 'SDDS-FOLDER-TABS':
        this.type = 'folder-tab';
        break;
      case 'SDDS-INLINE-TABS':
        this.type = 'inline-tab';
        break;
      default:
        throw Error('Wrong parent type;');
    }
  }

  render() {
    return (
      <Host
        role="listitem"
        class={`
        ${this.type}`}
      >
        <button
          style={{ width: `${this.tabWidth}px` }}
          class={`
        ${this.type}
        ${this.selected ? 'selected' : ''}
        ${this.disabled ? 'disabled' : ''}
        `}
        >
          <div class="label">
            <slot />
          </div>
        </button>
      </Host>
    );
  }
}
