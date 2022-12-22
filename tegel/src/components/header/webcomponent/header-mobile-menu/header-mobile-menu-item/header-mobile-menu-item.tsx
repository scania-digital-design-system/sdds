import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-mobile-menu-item',
  styleUrl: 'header-mobile-menu-item.scss',
  shadow: true,
})
export class SddsHeaderMobileMenuItem {
  @Prop() text: string = '';

  @Prop() active: boolean = false;

  @Prop() type: 'button' | 'link' = 'button';

  @Prop() href: string;

  render() {
    return (
      <li class={this.active && 'active'}>
        {this.type === 'button' && <button>{this.text}</button>}
        {this.type === 'link' && <a href={this.href}>{this.text}</a>}
      </li>
    );
  }
}
