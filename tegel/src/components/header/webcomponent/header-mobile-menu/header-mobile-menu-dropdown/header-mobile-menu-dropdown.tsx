import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-mobile-menu-dropdown',
  styleUrl: 'header-mobile-menu-dropdown.scss',
  shadow: true,
})
export class SddsHeaderMobileMenuDropdown {
  @Prop() text: string = '';

  @Prop() active: boolean = false;

  @Prop() open: boolean = false;

  handleClick = () => {
    this.open = !this.open;
  };

  render() {
    return (
      <Host>
        <li
          class={`${this.open ? 'sdds-mobile-menu-dropdown-open' : ''} ${this.active && 'active'}$`}
        >
          <button onClick={() => this.handleClick()}>
            {this.text}
            <sdds-icon name="chevron_down" size="16px"></sdds-icon>
          </button>
        </li>
        {this.open && <slot></slot>}
      </Host>
    );
  }
}
