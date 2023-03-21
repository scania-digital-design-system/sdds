import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-breadcrumb-link',
  styleUrl: 'sdds-breadcrumb-link.scss',
  shadow: true,
})
export class SddsBreadcrumbLink {
  /** Boolean for the current link */
  @Prop() current: boolean = false;

  /** Href for the link */
  @Prop() href: string;

  /** Where to open the linked URL */
  @Prop() target: '_self' | '_blank' | '_parent' | '_top' = '_self';

  /** 'noopener' is a security measure for legacy browsers that preventsthe opened page from getting access to the original page when using target='_blank'. */
  @Prop() rel: string = 'noopener';

  /** Toggle the disabled state for the breadcrumb */
  @Prop() disabled: boolean = false;

  render() {
    return (
      <div
        role="listitem"
        class={`${this.current ? 'current' : ''} 
      ${this.disabled ? 'disabled' : ''}`}
      >
        <a href={!this.disabled ? this.href : null} target={this.target} rel={this.rel}>
          <slot name="label"></slot>
        </a>
      </div>
    );
  }
}
