import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-link',
  styleUrl: 'sdds-link.scss',
  shadow: false,
})
export class SddsLink {
  /** URL for the link */
  @Prop() href: string;

  /** Where to open the linked URL */
  @Prop() target: '_self' | '_blank' | '_parent' | '_top' = '_self';

  /** Disables the link */
  @Prop() disabled: boolean = false;

  /** Displays the link with an underline. */
  @Prop() underline: boolean = true;

  /** 'noopener' is a security measure for legacy browsers that preventsthe opened page from getting access to the original page when using target='_blank'. */
  @Prop() rel: string = 'noopener';

  render() {
    return (
      <a
        class={`
        ${this.disabled ? 'disabled' : ''}
        ${this.underline ? '' : 'no-underline'}
        
        `}
        href={this.href}
        target={this.target}
        rel={this.rel}
      >
        <slot name="label"></slot>
      </a>
    );
  }
}
