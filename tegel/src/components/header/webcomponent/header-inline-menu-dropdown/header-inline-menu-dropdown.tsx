import { Component, h, Host, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'sdds-header-inline-menu-dropdown',
  styleUrl: 'header-inline-menu-dropdown.scss',
  shadow: true,
})
export class SddsHeaderInlineMenuDropdown {
  @Prop() text: string = '';

  @Prop() dropdownItems: {
    type: 'button' | 'link';
    text: string;
    href: string;
  }[] = [];

  @State() open: boolean = false;

  @Element() el: HTMLElement;

  handleClick = () => {
    this.open = !this.open;
  };

  render() {
    return (
      <Host>
        <li class={this.open && 'open'}>
          <button
            id="test"
            onClick={() => {
              this.handleClick();
            }}
          >
            {this.text}
            <sdds-icon name="chevron_down" size="16px"></sdds-icon>
          </button>
          <ul class="sdds-header-dropdown-menu">{this.open && <slot />}</ul>
        </li>
      </Host>
    );
  }
}
