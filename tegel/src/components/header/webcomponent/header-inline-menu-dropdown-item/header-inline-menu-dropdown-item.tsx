import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-inline-menu-dropdown-item',
  styleUrl: 'header-inline-menu-dropdown-item.scss',
  shadow: true,
})
export class SddsHeaderInlineMenuDropdownItem {
  @Prop() text: string = '';

  @Prop() active: boolean = false;

  @Prop() type: 'button' | 'link' = 'button';

  @Prop() href: string;

  render() {
    return (
      <Host>
        <li class={this.active && 'active'}>
          {this.type === 'button' && <button>{this.text}</button>}
          {this.type === 'link' && <a href={this.href}>{this.text}</a>}
        </li>
      </Host>
    );
  }
}
