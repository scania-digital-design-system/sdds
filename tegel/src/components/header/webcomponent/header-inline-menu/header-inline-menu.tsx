import { Component, h, Host, State, Element } from '@stencil/core';

@Component({
  tag: 'sdds-header-inline-menu',
  styleUrl: 'header-inline-menu.scss',
  shadow: true,
})
export class SddsHeaderInlineMenu {
  @State() mobileMenuOpen: boolean = false;

  @Element() host: HTMLElement;

  sideMenuEl: HTMLSddsSideMenuElement;

  connectedCallback() {
    this.sideMenuEl = document.querySelector('sdds-side-menu');
    this.sideMenuEl.classList.toggle('hide');
  }

  handleClick = () => {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.sideMenuEl.classList.toggle('hide');
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
        <ul class={'inline-ul'}>
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
