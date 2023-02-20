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
        <sdds-header-button style={{ 'border-left': 'none' }}>
          <sdds-icon
            style={{ 'margin-left': '-4px', 'position': 'relative', 'left': '2px' }}
            name="burger"
            size="20px"
          ></sdds-icon>
        </sdds-header-button>
      </Host>
    );
  }
}
