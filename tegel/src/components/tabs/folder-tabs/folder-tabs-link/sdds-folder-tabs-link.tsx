import { Component, Host, h, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'sdds-folder-tabs-link',
  styleUrl: 'sdds-folder-tabs-link.scss',
  shadow: true,
})
export class SddsFolderTabsLink {
  /** Disables the tab. */
  @Prop() disabled: boolean = false;

  /** Marks the tab as the selected one. */
  @Prop() selected: boolean = false;

  /** Href for the link */
  @Prop() href: string;

  /** Where to open the linked URL */
  @Prop() target: '_self' | '_blank' | '_parent' | '_top' = '_self';

  /** 'noopener' is a security measure for legacy browsers that preventsthe opened page from getting access to the original page when using target='_blank'. */
  @Prop() rel: string = 'noopener';

  @State() tabWidth: number;

  /** @internal Method to set the width of the tab. Used by the <sdds-folder-tabs> */
  @Method()
  async setTabWidth(width: number) {
    this.tabWidth = width;
  }

  render() {
    return (
      <Host role="listitem">
        <a
          style={{ width: `${this.tabWidth}px` }}
          class={`
        ${this.selected ? 'selected' : ''}
        ${this.disabled ? 'disabled' : ''}
        `}
          href={this.href}
          target={this.target}
          rel={this.rel}
        >
          <div class="label">
            <slot name="label"></slot>
          </div>
        </a>
      </Host>
    );
  }
}
