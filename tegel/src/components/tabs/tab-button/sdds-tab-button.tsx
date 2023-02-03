import { Component, Host, h, Prop, Element } from '@stencil/core';
import { HostElement, State } from '@stencil/core/internal';

@Component({
  tag: 'sdds-tab-button',
  styleUrl: 'sdds-tab-button.scss',
  shadow: true,
})
export class SddsTabButton {
  @Prop() disabled: boolean = false;

  @Prop() selected: boolean = false;

  @State() tabIndex: number;

  @Element() host: HostElement;

  type: 'folder-tab' | 'inline-tab';

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
