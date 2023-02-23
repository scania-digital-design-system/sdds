import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher-list-link',
  shadow: true,
})
export class HeaderLauncherListLink {
  /** The link URL */
  @Prop() href!: HTMLAnchorElement['href'];

  /** Native anchor tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. */
  @Prop() hreflang: HTMLAnchorElement['hreflang'];

  // 'noopener' is a security measure for legacy browsers that prevents
  // the opened page from getting access to the original page when using
  // target='_blank'.
  /** Native anchor tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. */
  @Prop() rel: HTMLAnchorElement['rel'] = 'noopener';

  /** Native anchor tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. */
  @Prop() download: HTMLAnchorElement['download'];

  /** Native anchor tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. */
  @Prop() target: HTMLAnchorElement['target'];

  render() {
    return (
      <Host>
        <sdds-core-header-menu-lg-link
          exportparts="a"
          href={this.href}
          hreflang={this.hreflang}
          rel={this.rel}
          download={this.download}
          target={this.target}
        >
          <slot></slot>
        </sdds-core-header-menu-lg-link>
      </Host>
    );
  }
}
