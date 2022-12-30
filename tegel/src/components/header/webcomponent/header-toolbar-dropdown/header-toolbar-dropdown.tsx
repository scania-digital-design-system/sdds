import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-toolbar-dropdown',
  styleUrl: 'header-toolbar-dropdown.scss',
  shadow: true,
})
export class SddsHeader {
  @Prop() open: boolean = false;

  @Prop() icon: string = 'bento';

  @Prop() avatar: boolean = false;

  @Prop() avatarImg: string = 'https://www.svgrepo.com/show/170303/avatar.svg';

  @Prop() avatarImgAlt: string = '';

  @Prop() href: string = '';

  @Prop() fullHeight: boolean = false;

  @Prop() showOnMobile: boolean = false;

  handleClick = () => {
    this.open = !this.open;
  };

  render() {
    return (
      <li class={`${this.open ? 'open' : 'closed'} ${this.showOnMobile ? '' : 'hide-mobile'}`}>
        <button
          onClick={() => {
            this.open = !this.open;
          }}
        >
          {this.avatar ? (
            <img src={this.avatarImg} alt={this.avatarImgAlt} />
          ) : (
            <sdds-icon name={this.icon} size="20px"></sdds-icon>
          )}
        </button>
        <ul
          class={`${this.fullHeight ? 'full-height' : ''} dropdown-${
            this.open ? 'open' : 'closed'
          }`}
        >
          <slot></slot>
        </ul>
      </li>
    );
  }
}
