import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-mobile-menu',
  styleUrl: 'header-mobile-menu.scss',
  shadow: true,
})
export class SddsHeaderMobileMenu {
  @Prop() open: boolean = false;

  handleClick = () => {
    this.open = !this.open;
  };

  render() {
    return (
      <Host class={this.open ? 'sdds-mobile-menu-open' : ''}>
        <button onClick={() => this.handleClick()}>
          <sdds-icon name="burger" size="20px"></sdds-icon>
        </button>
      </Host>
    );
  }
}
