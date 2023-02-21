import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-core-header-menu-lg-link',
  styleUrl: 'core-header-menu-lg-link.scss',
  shadow: true,
})
export class CoreHeaderMenuLgLink {
  @Prop() href!: string;

  // 'noopener' is a security measure for legacy browsers that prevents
  // the opened page from getting access to the original page when using
  // target='_blank'.
  @Prop() rel: string = 'noopener';

  @Prop() target: string;

  render() {
    return (
      <Host>
        <a part="a" href={this.href} rel={this.rel} target={this.target}>
          <slot></slot>
        </a>
      </Host>
    );
  }
}
