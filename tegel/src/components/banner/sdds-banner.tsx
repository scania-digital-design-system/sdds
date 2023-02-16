import { Component, Host, h, Prop, Event, EventEmitter, Method, Element } from '@stencil/core';
import { HostElement } from '@stencil/core/internal';

@Component({
  tag: 'sdds-banner',
  styleUrl: 'sdds-banner.scss',
  shadow: true,
})
export class SddsBanner {
  /** Name of the icon for the component. For error and information type the icon is predefined. */
  @Prop() icon: string;

  /** Header text. */
  @Prop() header: string;

  /** Subheader text. */
  @Prop() subheader: string;

  /** Link text. */
  @Prop() linkText: string;

  /** Href for the link */
  @Prop() href: string;

  /** Where to open the linked URL */
  @Prop() linkTarget: '_self' | '_blank' | '_parent' | '_top' = '_self';

  /** 'noopener' is a security measure for legacy browsers that preventsthe opened page from getting access to the original page when using target='_blank'. */
  @Prop() linkRel: string = 'noopener';

  /** Type of banner */
  @Prop() type: 'error' | 'information' | 'none' = 'none';

  /** ID used for internal table functionality and events, must be unique.
   *
   * **NOTE**: If you're listening for banner close events you need to set this ID yourself to identify the banner, as the default ID is random and will be different every time.
   */
  @Prop() bannerId: string = crypto.randomUUID();

  /** Removes the close button on the banner. */
  @Prop() persistent: boolean = false;

  /** Hides the banner */
  @Prop() hidden = false;

  @Element() host: HostElement;

  /** Sends unique banner identifier when the close button is pressed. */
  @Event({
    eventName: 'sddsClose',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sddsClose: EventEmitter<{
    bannerId: string;
    hidden: boolean;
  }>;

  /** Hides the banner. */
  @Method()
  async hideBanner() {
    const sddsCloseEvent = this.sddsClose.emit({
      bannerId: this.bannerId,
      hidden: this.hidden,
    });
    if (!sddsCloseEvent.defaultPrevented) {
      this.hidden = true;
    }
    return {
      bannerId: this.bannerId,
      hidden: true,
    };
  }

  /** Shows the banner */
  @Method()
  async showBanner() {
    const sddsCloseEvent = this.sddsClose.emit({
      bannerId: this.bannerId,
      hidden: this.hidden,
    });
    if (!sddsCloseEvent.defaultPrevented) {
      this.hidden = false;
    }
    return {
      bannerId: this.bannerId,
      hidden: false,
    };
  }

  connectedCallback() {
    if (this.type === 'error') {
      this.icon = 'error';
    } else if (this.type === 'information') {
      this.icon = 'info';
    }
  }

  handleClose = () => {
    const sddsCloseEvent = this.sddsClose.emit({
      bannerId: this.bannerId,
      hidden: this.hidden,
    });
    if (!sddsCloseEvent.defaultPrevented) {
      this.hidden = true;
    }
  };

  render() {
    return (
      <Host
        role="banner"
        aria-hidden={`${this.hidden}`}
        aria-live={
          this.host.getAttribute('aria-live') ? this.host.getAttribute('aria-live') : 'polite'
        }
        aria-atomic={this.host.getAttribute('aria-atomic')}
        class={`${this.type} ${this.hidden ? 'hide' : 'show'}`}
      >
        {this.icon && (
          <div class={`banner-icon ${this.type}`}>
            <sdds-icon name={this.icon} size="20px"></sdds-icon>
          </div>
        )}
        <div class={`banner-content ${this.type} ${!this.icon ? 'no-icon' : ''}`}>
          {this.header && <span class={`banner-header`}>{this.header}</span>}
          {this.subheader && <span class={`banner-subheader`}>{this.subheader}</span>}
          {this.linkText && this.href && (
            <sdds-link link-href={this.href} rel={this.linkRel} link-target={this.linkTarget}>
              {this.linkText}
            </sdds-link>
          )}
        </div>
        {!this.persistent && (
          <div class={`banner-close`}>
            <button
              onClick={() => {
                this.handleClose();
              }}
            >
              <sdds-icon name="cross" size="20px"></sdds-icon>
            </button>
          </div>
        )}
      </Host>
    );
  }
}
