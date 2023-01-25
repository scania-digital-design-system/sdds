import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sdds-link',
  styleUrl: 'sdds-link.scss',
  shadow: true,
})
export class SddsLink {
  /** URL for the link */
  @Prop() linkHref: string;

  /** ID for the link. Randomly generated if not specified. */
  @Prop() linkId: string = crypto.randomUUID();

  /** Where to open the linked URL */
  @Prop() target: '_self' | '_blank' | '_parent' | '_top' = '_self';

  /** Disables the link */
  @Prop() disabled: boolean = false;

  /** Displays the link without an underline. */
  @Prop() underline: boolean = true;

  /** 'noopener' is a security measure for legacy browsers that preventsthe opened page from getting access to the original page when using target='_blank'. */
  @Prop() rel: string = 'noopener';

  /** Sends unique link identifier and href when it is clicked */
  @Event({
    eventName: 'sddsLinkClickedEvent',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sddsLinkClickedEvent: EventEmitter<{
    href: string;
    id: string;
  }>;

  render() {
    return (
      <a
        onClick={() => {
          this.sddsLinkClickedEvent.emit({
            href: this.linkHref,
            id: this.linkId,
          });
        }}
        class={`
        ${this.disabled ? 'disabled' : ''}
        ${this.underline ? '' : 'no-underline'}
        
        `}
        href={this.linkHref}
        target={this.target}
        rel={this.rel}
      >
        <slot></slot>
      </a>
    );
  }
}
