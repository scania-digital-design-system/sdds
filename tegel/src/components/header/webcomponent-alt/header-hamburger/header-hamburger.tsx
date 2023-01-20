import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-hamburger',
  styleUrl: 'header-hamburger.scss',
  shadow: true,
})
export class HeaderHamburger {
  @Prop({ reflect: true }) persistent: boolean;

  render() {
    return (
      <Host>
        <sdds-header-button-v2 style={{ 'border-left': 'none' }}>
          <sdds-icon
            style={{ 'margin-left': '-4px', 'position': 'relative', 'left': '2px' }}
            name="burger"
            size="20px"
          ></sdds-icon>
        </sdds-header-button-v2>
      </Host>
    );
  }
}
