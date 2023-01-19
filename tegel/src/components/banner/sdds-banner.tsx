import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sdds-banner',
  styleUrl: 'sdds-banner.scss',
  shadow: true,
})
export class SddsBanner {
  /** Name of the icon for the component. */
  @Prop() icon: string;

  /** Header text. */
  @Prop() header: string;

  /** Subheader text. */
  @Prop() subheader: string;

  /** Link text. */
  @Prop() linkText: string;

  /** Href for the link */
  @Prop() linkHref: string;

  /** State of the banner */
  @Prop() state: 'error' | 'information' | 'none' = 'none';

  /** ID used for internal table functionality and events, must be unique.
   *
   * **NOTE**: If you're listening for banner close events you need to set this ID yourself to identify the banner, as the default ID is random and will be different every time.
   */
  @Prop() bannerId: string = crypto.randomUUID();

  @State() show = true;

  /** Sends unique banner identifier when the close button is pressed */
  @Event({
    eventName: 'bannerCloseEvent',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  bannerCloseEvent: EventEmitter<any>;

  render() {
    return (
      <Host class={`${this.state} ${this.show ? 'show' : 'hide'}`}>
        {this.icon && (
          <div class={`banner-icon ${this.state}`}>
            <sdds-icon name={this.icon} size="20px"></sdds-icon>
          </div>
        )}
        <div class={`banner-content ${this.state} ${!this.icon ? 'no-icon' : ''}`}>
          {this.header && <span class={`banner-header`}>{this.header}</span>}
          {this.subheader && <span class={`banner-subheader`}>{this.subheader}</span>}
          {this.linkText && this.linkHref && (
            <a class={`banner-link`} href={this.linkHref}>
              {this.linkText}
            </a>
          )}
        </div>
        <div class={`banner-close`}>
          <button
            onClick={() => {
              this.show = false;
              this.bannerCloseEvent.emit({
                bannerId: this.bannerId,
              });
            }}
          >
            <sdds-icon name="cross" size="20px"></sdds-icon>
          </button>
        </div>
      </Host>
    );
  }
}
