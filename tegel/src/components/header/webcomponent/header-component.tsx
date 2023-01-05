import {
  Component,
  h,
  Host,
  Prop,
  Element,
  Listen,
  Event,
  EventEmitter,
  Method,
} from '@stencil/core';

@Component({
  tag: 'sdds-header',
  styleUrl: 'header-component.scss',
  shadow: true,
})
export class SddsHeader {
  /** The name that is displayed in the header */
  @Prop() siteName: string = 'Application';

  /** Href for the header icon */
  @Prop() iconHref: string = '#';

  @Prop() mobileMenuOpen: boolean = true;

  @Element() host: HTMLElement;

  @Event({
    eventName: 'closeAllEvent',
    bubbles: true,
    composed: true,
    cancelable: true,
  })
  closeAllEvent: EventEmitter;

  @Listen('childOpenedEvent', { target: 'body' })
  handleChildOpenedEvent() {
    this.closeAllEvent.emit();
    this.mobileMenuOpen = false;
  }

  @Method()
  async closeChildren() {
    this.closeAllEvent.emit();
  }

  handleClick = () => {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.closeAllEvent.emit();
  };

  render() {
    return (
      <Host>
        <button
          class={`mobile-menu-button ${this.mobileMenuOpen ? 'open' : 'closed'}`}
          onClick={() => {
            this.handleClick();
          }}
        >
          <sdds-icon name={this.mobileMenuOpen ? 'cross' : 'burger'} size="24px"></sdds-icon>
        </button>
        <div class="header-app-name">{this.siteName}</div>
        <nav class="nav-content">
          {this.mobileMenuOpen && (
            <nav class="mobile-menu">
              <ul class="mobile-menu-top">
                <slot name="mobile-menu-top"></slot>
              </ul>
              <ul class="mobile-menu-bottom">
                <slot name="mobile-menu-bottom"></slot>
              </ul>
            </nav>
          )}
          <ul class="inline-menu">
            <slot name="inline-menu"></slot>
          </ul>
          <ul class="toolbar">
            <slot name="toolbar"></slot>
          </ul>
        </nav>
        <div class="header-logo">
          <a href={this.iconHref}></a>
        </div>
      </Host>
    );
  }
}
