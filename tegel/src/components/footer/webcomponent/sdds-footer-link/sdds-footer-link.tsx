import { Component, Element, h, Prop } from '@stencil/core';
import { HostElement } from '@stencil/core/internal';

@Component({
  tag: 'sdds-footer-link',
  styleUrl: 'sdds-footer-link.scss',
  shadow: false,
  scoped: true,
})
export class SddsFooterLink {
  /** URL for the link */
  @Prop() linkHref: string;

  /** Where to open the linked URL */
  @Prop() target: '_self' | '_blank' | '_parent' | '_top' = '_self';

  /** 'noopener' is a security measure for legacy browsers that prevents the opened page from getting access to the original page when using target='_blank'. */
  @Prop() rel: string = 'noopener';

  @Element() host: HostElement;

  parentIsTopPart: boolean = false;

  connectedCallback() {
    this.parentIsTopPart = this.host.closest('sdds-footer-link-group').parentElement.slot === 'top';
  }

  render() {
    return (
      <div role="listitem" class={`${this.parentIsTopPart ? 'top-part-child' : ''}`}>
        <a target={this.target} rel={this.rel} href={this.linkHref}>
          <slot></slot>
        </a>
      </div>
    );
  }
}
