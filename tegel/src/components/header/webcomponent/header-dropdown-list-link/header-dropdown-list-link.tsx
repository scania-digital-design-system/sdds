import { Component, Element, h, Host, Prop } from '@stencil/core';
import { inheritAriaAttributes } from '../../../../utils/utils';

@Component({
  tag: 'sdds-header-dropdown-list-link',
  styleUrl: 'header-dropdown-list-link.scss',
  shadow: true,
})
export class HeaderDropdownListLink {
  @Element() host: HTMLElement;

  /** If the link should appear selected. */
  @Prop() selected: boolean = false;

  /** The type of the list. */
  @Prop({ reflect: true }) type: 'lg' | 'md' = 'md';

  /** The link URL */
  @Prop() href!: HTMLAnchorElement['href'];

  /** Native &lt;a&gt; tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. */
  @Prop() hreflang: HTMLAnchorElement['hreflang'];

  // 'noopener' is a security measure for legacy browsers that prevents
  // the opened page from getting access to the original page when using
  // target='_blank'.
  /** Native &lt;a&gt; tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. */
  @Prop() rel: HTMLAnchorElement['rel'] = 'noopener';

  /** Native &lt;a&gt; tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. */
  @Prop() download: HTMLAnchorElement['download'];

  /** Native &lt;a&gt; tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. */
  @Prop() target: HTMLAnchorElement['target'];

  render() {
    const inheritedLinkProps = {
      ...inheritAriaAttributes(this.host),
    };
    return (
      <Host>
        <a
          {...inheritedLinkProps}
          part="a"
          class={{
            'state-selected': this.selected,
          }}
          href={this.href}
          hreflang={this.hreflang}
          rel={this.rel}
          download={this.download}
          target={this.target}
        >
          <slot></slot>
        </a>
      </Host>
    );
  }
}
