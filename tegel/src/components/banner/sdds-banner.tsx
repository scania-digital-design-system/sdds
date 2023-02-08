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
  @Prop() linkHref: string;

  /** Where to open the linked URL */
  @Prop() linkTarget: '_self' | '_blank' | '_parent' | '_top' = '_self';

  /** 'noopener' is a security measure for legacy browsers that preventsthe opened page from getting access to the original page when using target='_blank'. */
  @Prop() rel: string = 'noopener';

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

  /** NEEDS TO BE ALIGNED WITH THE OTHER COMPONENTS DESCRIPTION  */
  @Prop() ariaAtomicValue: boolean = false;

  /** NEEDS TO BE ALIGNED WITH THE OTHER COMPONENTS DESCRIPTION  */
  @Prop() ariaLiveValue: 'polite' | 'assertive' | 'off' = 'polite';

  @Element() host: HostElement;

  /** Sends unique banner identifier when the close button is pressed. */
  @Event({
    eventName: 'bannerClose',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  bannerClose: EventEmitter<{
    bannerId: string;
    hidden: boolean;
  }>;

  /** Hides the banner. */
  @Method()
  async hideBanner() {
    const sddsCloseEvent = this.bannerClose.emit({
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
    const sddsCloseEvent = this.bannerClose.emit({
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
    const sddsCloseEvent = this.bannerClose.emit({
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
        aria-live={this.ariaLiveValue}
        aria-atomic={this.ariaAtomicValue}
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
          {this.linkText && this.linkHref && (
            /* TODO - Should use sdds-link */
            <a rel={this.rel} target={this.linkTarget} class={`banner-link`} href={this.linkHref}>
              {this.linkText}
            </a>
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
