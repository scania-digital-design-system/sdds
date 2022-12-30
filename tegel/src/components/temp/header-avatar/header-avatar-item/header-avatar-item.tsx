import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-avatar-item',
  styleUrl: 'header-avatar-item.scss',
  shadow: true,
})
export class SddsHeaderAvatarItem {
  @Prop() type: 'button' | 'link' | 'category' = 'button';

  @Prop() text: string = '';

  @Prop() href: string = '';

  render() {
    return (
      <Host>
        <li>
          {this.type === 'button' && <button onClick={() => {}}>{this.text}</button>}
          {this.type === 'link' && (
            <a onClick={() => {}} href={this.href}>
              {this.text}
            </a>
          )}
        </li>
      </Host>
    );
  }
}
