import { Component, h, Host, Prop, Element, State, Listen } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-item',
  styleUrl: 'side-menu-item.scss',
  shadow: true,
})
export class SddsSideMenuItem {
  @Prop() position: 'top' | 'bottom' = 'top';

  @Prop() type: 'button' | 'link' | 'user-profile' = 'link';

  @Prop() href: string = '#';

  @Prop() text: string = '';

  @Prop() avatarImg: string = 'https://www.svgrepo.com/show/170303/avatar.svg';

  @Prop() avatarImgAlt: string = '';

  @Prop() avatarHeader: string = '';

  @Prop() avatarSubheader: string = '';

  @Prop() icon: string = '';

  @State() collapsed: boolean = false;

  @Element() host: HTMLElement;

  sideMenuEl: HTMLSddsSideMenuElement;

  connectedCallback() {
    this.sideMenuEl = this.host.closest('sdds-side-menu');
    this.collapsed = this.sideMenuEl.collapsed;
  }

  @Listen('collapseSideMenuEvent', { target: 'body' })
  collapseSideMenuEventHandeler(event: CustomEvent<any>) {
    this.collapsed = event.detail.collapsed;
  }

  render() {
    return (
      <Host class={`sdds-side-menu-item-${this.collapsed ? 'collapsed' : 'full-width'}`}>
        {this.position === 'top' ? (
          <li class={`sdds-side-menu-item-${this.type} top`}>
            {this.position === 'top' &&
              ((this.type === 'button' && (
                <button>
                  {this.icon !== '' && <sdds-icon size="24px" name={this.icon}></sdds-icon>}
                  {!this.collapsed && this.text}
                </button>
              )) ||
                (this.type === 'link' && (
                  <a href={this.href}>
                    {this.icon !== '' && <sdds-icon size="24px" name={this.icon}></sdds-icon>}
                    {!this.collapsed && this.text}
                  </a>
                )))}
          </li>
        ) : (
          <li class={`sdds-side-menu-item-${this.type} bottom`}>
            {this.type === 'button' && (
              <button>
                {this.icon !== '' && <sdds-icon size="24px" name={this.icon}></sdds-icon>}
                {!this.collapsed && this.text}
              </button>
            )}
            {this.type === 'link' && <a href={this.href}>{!this.collapsed && this.text}</a>}
            {this.type === 'user-profile' &&
              (this.collapsed ? (
                <div class="sdds-side-menu-user-profile-collapsed">
                  <img
                    class="sdds-side-menu-user-profile-image"
                    src={this.avatarImg}
                    alt={this.avatarImgAlt}
                  />
                </div>
              ) : (
                <div class="sdds-side-menu-user-profile">
                  <img
                    class="sdds-side-menu-user-profile-image"
                    src={this.avatarImg}
                    alt={this.avatarImgAlt}
                  />
                  <div class="sdds-side-menu-user-profile-info">
                    <div class="sdds-side-menu-user-profile-header">{this.avatarHeader}</div>
                    <div class="sdds-side-menu-user-profile-subheader">{this.avatarSubheader}</div>
                  </div>
                </div>
              ))}
          </li>
        )}
      </Host>
    );
  }
}
