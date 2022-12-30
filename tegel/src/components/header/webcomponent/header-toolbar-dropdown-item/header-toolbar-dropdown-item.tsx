import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-toolbar-dropdown-item',
  styleUrl: 'header-toolbar-dropdown-item.scss',
  shadow: true,
})
export class SddsHeaderToolbarDropdownItem {
  @Prop() type: 'button' | 'link' | 'category' | 'avatar' = 'button';

  @Prop() text: string = '';

  @Prop() href: string = '';

  @Prop() avatarHeading: string;

  @Prop() avatarSubheading: string;

  @Prop() avatarImg: string = 'https://www.svgrepo.com/show/170303/avatar.svg';

  @Prop() avatarImgAlt: string = '';

  render() {
    return (
      <li class={`${this.type}`}>
        {this.type === 'category' && <div class={this.type}>{this.text}</div>}
        {this.type === 'button' && <button>{this.text}</button>}
        {this.type === 'link' && <a href={this.href}>{this.text}</a>}
        {this.type === 'avatar' && (
          <div class={this.type}>
            <img src={this.avatarImg} alt={this.avatarImgAlt} />
            <div class={'avatar-info'}>
              <span class="heading">{this.avatarHeading}</span>
              <span class="subheading">{this.avatarSubheading}</span>
            </div>
          </div>
        )}
      </li>
    );
  }
}
