import { Component, Element, h, Host, Prop } from '@stencil/core';
import { inheritAriaAttributes } from '../../../../utils/utils';

@Component({
  tag: 'sdds-header-link',
  styleUrl: 'header-link.scss',
  shadow: true,
})
export class HeaderLink {
  @Element() host: HTMLElement;

  /** If the link should appear selected. */
  @Prop() selected: boolean = false;

  /** The link URL. */
  @Prop() href!: string;

  /** Native &lt;a&gt; tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. */
  @Prop() hreflang: string;

  // 'noopener' is a security measure for legacy browsers that prevents
  // the opened page from getting access to the original page when using
  // target='_blank'.
  /** Native &lt;a&gt; tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. */
  @Prop() rel: HTMLAnchorElement['rel'] = 'noopener';

  /** Native &lt;a&gt; tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. */
  @Prop() download: HTMLAnchorElement['download'];

  /** Native &lt;a&gt; tag attribute, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes. */
  @Prop() target: '_self' | '_blank' | '_parent' | '_top';

  render() {
    const inheritedLinkProps = {
      ...inheritAriaAttributes(this.host),
    };

    return (
      <Host>
        <sdds-core-header-item
          class={{
            'state-selected': this.selected,
          }}
        >
          <a
            {...inheritedLinkProps}
            part="a"
            href={this.href}
            hreflang={this.hreflang}
            rel={this.rel}
            download={this.download}
            target={this.target}
          >
            <slot name="icon" slot="icon"></slot>
            <slot />
          </a>
        </sdds-core-header-item>
      </Host>
    );
  }
}
