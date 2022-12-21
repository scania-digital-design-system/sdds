import { Component, h, Host, Prop, Element } from '@stencil/core';

@Component({
  tag: 'sdds-header-avatar',
  styleUrl: 'header-avatar.scss',
  shadow: true,
})
export class SddsHeaderAvatar {
  @Prop() open: boolean = false;

  @Prop() avatarImg: string = 'https://www.svgrepo.com/show/170303/avatar.svg';

  @Prop() avatarImgAlt: string = '';

  @Prop() avatarName: string;

  @Prop() avatarSubheading: string;

  @Element() el: HTMLElement;

  handleClick = () => {
    this.open = !this.open;
  };

  render() {
    return (
      <Host>
        <button
          class={`sdds-avatar-${this.open ? 'open' : 'closed'}`}
          onClick={() => this.handleClick()}
        >
          <img src={this.avatarImg} alt={this.avatarImgAlt} />
        </button>
        {this.open && (
          <div>
            <ul>
              <li>
                <div class="sdds-avatar-info">
                  <p class="sdds-avatar-name">{this.avatarName}</p>
                  <p class="sdds-avatar-subheading">{this.avatarSubheading}</p>
                </div>
              </li>
              <slot></slot>
            </ul>
          </div>
        )}
      </Host>
    );
  }
}
