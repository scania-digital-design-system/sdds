import { Component, Host, h, Prop, Element } from '@stencil/core';
import { HostElement, Method, State } from '@stencil/core/internal';

@Component({
  tag: 'sdds-tab-link',
  styleUrl: 'sdds-tab-link.scss',
  shadow: true,
})
export class SddsTabLink {
  /** Disables the tab. */
  @Prop() disabled: boolean = false;

  /** Marks the tab as the selected one. */
  @Prop() selected: boolean = false;

  /** Href for the link */
  @Prop() linkHref: string;

  /** Where to open the linked URL */
  @Prop() linkTarget: '_self' | '_blank' | '_parent' | '_top' = '_self';

  /** 'noopener' is a security measure for legacy browsers that preventsthe opened page from getting access to the original page when using target='_blank'. */
  @Prop() rel: string = 'noopener';

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
      <Host role="listitem" class={`${this.type}`}>
        <a
          style={{ width: `${this.tabWidth}px` }}
          class={`
        ${this.type}
        ${this.selected ? 'selected' : ''}
        ${this.disabled ? 'disabled' : ''}
        `}
          href={this.linkHref}
          target={this.linkTarget}
          rel={this.rel}
        >
          <div class="label">
            <slot></slot>
          </div>
        </a>
      </Host>
    );
  }
}
