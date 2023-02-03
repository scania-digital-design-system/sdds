import { Component, Host, h, Prop, Element } from '@stencil/core';
import { HostElement } from '@stencil/core/internal';

@Component({
  tag: 'sdds-tab-link',
  styleUrl: 'sdds-tab-link.scss',
  shadow: true,
})
export class SddsTabLink {
  @Prop() disabled: boolean = false;

  @Prop() selected: boolean = false;

  @Prop() linkHref: string;

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
      <Host role="listitem" class={`${this.type}`}>
        <a
          class={`
        ${this.type}
        ${this.selected ? 'selected' : ''}
        ${this.disabled ? 'disabled' : ''}
        `}
          href={this.linkHref}
        >
          <div class="label">
            <slot></slot>
          </div>
        </a>
      </Host>
    );
  }
}
