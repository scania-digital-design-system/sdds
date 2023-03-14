import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-header-hamburger',
  styleUrl: 'header-hamburger.scss',
  shadow: true,
})
export class HeaderHamburger {
  render() {
    return (
      <Host>
        <sdds-header-button>
          <sdds-icon name="burger" size="20px"></sdds-icon>
        </sdds-header-button>
      </Host>
    );
  }
}
