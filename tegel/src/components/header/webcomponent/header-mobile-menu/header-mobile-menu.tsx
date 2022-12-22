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
      <Host class={`sdds-mobile-menu-${this.open ? 'open' : 'closed'}`}>
        <button onClick={() => this.handleClick()}>
          {this.open ? (
            <sdds-icon name="cross" size="20px"></sdds-icon>
          ) : (
            <sdds-icon name="burger" size="20px"></sdds-icon>
          )}
        </button>
        <ul class={this.open ? 'open' : 'closed'}>
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
