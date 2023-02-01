import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-dropdown-list-link',
  styleUrl: 'side-menu-dropdown-list-link.scss',
  shadow: true,
})
export class SideMenuDropdownListLink {
  @Prop() href!: string;

  // 'noopener' is a security measure for legacy browsers that prevents
  // the opened page from getting access to the original page when using
  // target='_blank'.
  @Prop() rel: string = 'noopener';

  @Prop() target: string;

  render() {
    return (
      <Host role="listitem">
        <a part="a" href={this.href} rel={this.rel} target={this.target}>
          <slot></slot>
        </a>
      </Host>
    );
  }
}
