import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-logo',
  styleUrl: 'header-logo.scss',
  shadow: true,
})
export class HeaderLogo {
  /** The href for the logo link. */
  @Prop() linkHref: string = 'https://www.scania.com';

  render() {
    return (
      <Host>
        <sdds-header-link href={this.linkHref}></sdds-header-link>
      </Host>
    );
  }
}
