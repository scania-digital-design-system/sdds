import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-link',
  styleUrl: 'header-link.scss',
  shadow: true,
})
export class HeaderLink {
  /** If it should appear selected. */
  @Prop() selected: boolean = false;

  /** The URL the link should point to. */
  @Prop() href: string = '';

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
        <sdds-core-header-item
          class={{
            'state--selected': this.selected,
          }}
        >
          <a
            part="a"
            href={this.href}
            hreflang={this.hreflang}
            rel={this.rel}
            download={this.download}
            target={this.target}
          >
            <slot />
          </a>
        </sdds-core-header-item>
      </Host>
    );
  }
}
