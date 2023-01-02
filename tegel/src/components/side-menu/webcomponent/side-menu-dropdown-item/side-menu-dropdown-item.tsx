import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-dropdown-item',
  styleUrl: 'side-menu-dropdown-item.scss',
  shadow: true,
})
export class SddsSideMenuDropdownItem {
  /** Text for the side menu dropdown item */
  @Prop() text: string = '';

  /** Type of side menu dropdown item. */
  @Prop() type: 'button' | 'link' | 'user-profile' = 'link';

  /** Href for side menu dropdown item that are links */
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
