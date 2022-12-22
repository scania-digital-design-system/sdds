import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'sdds-header-inline-menu',
  styleUrl: 'header-inline-menu.scss',
  shadow: true,
})
export class SddsHeaderInlineMenu {
  @State() mobileMenuOpen: boolean = false;

  handleClick = () => {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  };

  render() {
    return (
      <Host class={`mobile-menu-${this.mobileMenuOpen ? 'open' : 'closed'}`}>
        <button
          onClick={() => this.handleClick()}
          class={`sdds-header-inline-menu-mobile mobile-menu-${
            this.mobileMenuOpen ? 'open' : 'closed'
          }`}
        >
          {this.mobileMenuOpen ? (
            <sdds-icon name="cross" size="20px"></sdds-icon>
          ) : (
            <sdds-icon name="burger" size="20px"></sdds-icon>
          )}
        </button>
        <ul class={`sdds-header-mobile-menu-${this.mobileMenuOpen ? 'open' : 'closed'}`}>
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
