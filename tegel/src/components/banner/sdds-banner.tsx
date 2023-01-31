import {
  Component,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Method,
  Element,
} from '@stencil/core';
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

  /** Type of banner */
  @Prop() type: 'error' | 'information' | 'none' = 'none';

  /** ID used for internal table functionality and events, must be unique.
   *
   * **NOTE**: If you're listening for banner close events you need to set this ID yourself to identify the banner, as the default ID is random and will be different every time.
   */
  @Prop() bannerId: string = crypto.randomUUID();

  /** Href for the link */
  @Prop() persistent: boolean = false;

  /** NEEDS TO BE ALIGNED WITH THE OTHER COMPONENTS DESCRIPTION  */
  @Prop() ariaLiveValue: 'polite' | 'assertive' | 'off' = 'polite';

  /** NEEDS TO BE ALIGNED WITH THE OTHER COMPONENTS DESCRIPTION  */
  @Prop() ariaAtomicValue: boolean = false;

  @State() show = true;

  @Element() host: HostElement;

  /** Sends unique banner identifier when the close button is pressed */
  @Event({
    eventName: 'sddsBannerCloseEvent',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  sddsBannerCloseEvent: EventEmitter<any>;

  /** Hides the banner. */
  @Method()
  async hideBanner() {
    this.show = false;
    this.sddsBannerCloseEvent.emit({
      bannerId: this.bannerId,
    });
    return {
      bannerId: this.bannerId,
      visible: false,
    };
  }

  /** Shows the banner */
  @Method()
  async showBanner() {
    this.show = true;
    this.sddsBannerCloseEvent.emit({
      bannerId: this.bannerId,
    });
    return {
      bannerId: this.bannerId,
      visible: true,
    };
  }

  connectedCallback() {
    if (this.type === 'error') {
      this.icon = 'error';
    } else if (this.type === 'information') {
      this.icon = 'info';
    }
  }

  render() {
    return (
      <Host
        role="banner"
        aria-hidden={`${!this.show}`}
        aria-live={this.ariaLiveValue}
        aria-atomic={this.ariaAtomicValue}
        class={`${this.type} ${this.show ? 'show' : 'hide'}`}
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
            <a class={`banner-link`} href={this.linkHref}>
              {this.linkText}
            </a>
          )}
        </div>
        {!this.persistent && (
          <div class={`banner-close`}>
            <button
              onClick={() => {
                this.show = false;
                this.sddsBannerCloseEvent.emit({
                  bannerId: this.bannerId,
                });
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
