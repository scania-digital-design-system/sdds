import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-dropdown-item',
  styleUrl: 'side-menu-dropdown-item.scss',
  shadow: true,
})
export class SddsSideMenuDropdownItem {
  @Prop() text: string = '';

  @Prop() type: 'button' | 'link' = 'link';

  @Prop() href: string = '#';

  render() {
    return (
      <li class={``}>
        {this.type === 'link' && <a href={this.href}>{this.text}</a>}
        {this.type === 'button' && <button>{this.text}</button>}
      </li>
    );
  }
}
