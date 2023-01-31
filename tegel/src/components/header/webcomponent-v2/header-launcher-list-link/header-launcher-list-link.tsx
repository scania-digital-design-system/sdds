import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher-list-link',
  shadow: true,
})
export class HeaderLauncherListLink {
  @Prop() href!: string;

  // 'noopener' is a security measure for legacy browsers that prevents
  // the opened page from getting access to the original page when using
  // target='_blank'.
  @Prop() rel: string = 'noopener';

  @Prop() target: string;

  render() {
    return (
      <Host>
        <sdds-core-header-menu-global-link
          exportparts="a"
          href={this.href}
          rel={this.rel}
          target={this.target}
        >
          <slot></slot>
        </sdds-core-header-menu-global-link>
      </Host>
    );
  }
}
