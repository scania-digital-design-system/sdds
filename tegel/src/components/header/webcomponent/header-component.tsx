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
  State,
} from '@stencil/core';

@Component({
  tag: 'sdds-header',
  styleUrl: 'header-component.scss',
  shadow: true,
})
export class SddsHeader {
  /** The name that is displayed in the header */
  @Prop() appName: string = 'Application';

  /** Href for the header icon */
  @Prop() iconHref: string = '#';

  /** Adds a mobilemenu button to the header on smaller screens */
  @Prop() mobileMenu: boolean = true;

  /** The ID of the side menu that should act as mobile menu */
  @Prop() sideMenuId: string;

  @State() mobileMenuOpen: boolean = false;

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
  }

  @Method()
  async closeChildren() {
    this.closeAllEvent.emit();
  }

  render() {
    return (
      <Host>
        {this.mobileMenu && (
          <button
            class={`mobile-menu-button ${this.mobileMenuOpen ? 'open' : 'closed'}`}
            onClick={() => {
              this.mobileMenuOpen = !this.mobileMenuOpen;
            }}
          >
            <sdds-icon name={this.mobileMenuOpen ? 'cross' : 'burger'} size="20px"></sdds-icon>
          </button>
        )}
        <div class="header-app-name">{this.appName}</div>
        <nav class="nav-content">
          {/*  {this.mobileMenu && this.mobileMenuOpen && (
            <nav class="mobile-menu">
              <ul class="mobile-menu-top">
                <slot name="mobile-menu-top"></slot>
              </ul>
              <ul class="mobile-menu-bottom">
                <slot name="mobile-menu-bottom"></slot>
              </ul>
            </nav>
          )} */}
          <ul class="header-left">
            <slot name="header-left"></slot>
          </ul>
          <ul class="header-right">
            <slot name="header-right"></slot>
          </ul>
        </nav>
        <div class="header-logo">
          <a href={this.iconHref}></a>
        </div>
        {this.mobileMenuOpen && <slot name="mobile-menu"></slot>}
      </Host>
    );
  }
}
