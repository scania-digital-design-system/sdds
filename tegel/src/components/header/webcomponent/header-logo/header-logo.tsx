import { Component, Element, h, Host, Prop } from '@stencil/core';
import { inheritAriaAttributes } from '../../../../utils/utils';

@Component({
  tag: 'sdds-header-logo',
  styleUrl: 'header-logo.scss',
  shadow: true,
})
export class HeaderLogo {
  @Element() host: HTMLElement;

  /** The href for the logo link. */
  @Prop() linkHref: string = 'https://www.scania.com';

  render() {
    const inheritedLinkProps = {
      ...inheritAriaAttributes(this.host),
    };
    return (
      <Host>
        <sdds-header-item>
          <a {...inheritedLinkProps} href={this.linkHref}></a>
        </sdds-header-item>
      </Host>
    );
  }
}
