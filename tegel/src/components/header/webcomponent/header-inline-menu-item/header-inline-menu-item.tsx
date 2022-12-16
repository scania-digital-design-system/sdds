import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-inline-menu-item',
  styleUrl: 'header-inline-menu-item.scss',
  shadow: true,
})
export class SddsHeaderInlineMenuItem {
  @Prop() type: 'button' | 'link' = 'button';

  @Prop() text: string = '';

  @Prop() href: string = '';

  render() {
    return (
      <Host>
        {this.type === 'button' && <button>{this.text}</button>}
        {this.type === 'link' && <a href={this.href}>{this.text}</a>}
      </Host>
    );
  }
}
