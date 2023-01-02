import { Component, h, Host, Prop, Element, State, Listen } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-item',
  styleUrl: 'side-menu-item.scss',
  shadow: true,
})
export class SddsSideMenuItem {
  /** Type of side menu item. */
  @Prop() type: 'button' | 'link' | 'user-profile' = 'link';

  /** Text for the side menu item */
  @Prop() text: string = '';

  /** Icon for the side menu item */
  @Prop() icon: string = '';

  /** Href for side menu item that are links */
  @Prop() href: string = '#';

  /** Image for side menu items that are 'user-profile' */
  @Prop() avatarImg: string = 'https://www.svgrepo.com/show/170303/avatar.svg';

  /** Alt for image for side menu items that are 'user-profile' */
  @Prop() avatarImgAlt: string = '';

  /** Header for image for side menu items that are 'user-profile' */
  @Prop() avatarHeader: string = '';

  /** Subheader for image for side menu items that are 'user-profile' */
  @Prop() avatarSubheader: string = '';

  @State() collapsed: boolean = false;

  @State() position: string;

  @Element() host: HTMLElement;

  sideMenuEl: HTMLSddsSideMenuElement;

  connectedCallback() {
    this.sideMenuEl = this.host.closest('sdds-side-menu');
    this.collapsed = this.sideMenuEl.collapsed;
    this.position = this.host.parentElement.slot;
  }

  @Listen('collapseSideMenuEvent', { target: 'body' })
  collapseSideMenuEventHandeler(event: CustomEvent<any>) {
    this.collapsed = event.detail.collapsed;
  }

  render() {
    return (
      <Host class={`sdds-side-menu-item-${this.collapsed ? 'collapsed' : 'full-width'}`}>
        <li class={`sdds-side-menu-item-${this.type} ${this.position}`}>
          {this.type === 'button' && (
            <button>
              {this.icon !== '' && <sdds-icon size="24px" name={this.icon}></sdds-icon>}
              {!this.collapsed && this.text}
            </button>
          )}
          {this.type === 'link' && (
            <a href={this.href}>
              {this.icon !== '' && <sdds-icon size="24px" name={this.icon}></sdds-icon>}
              {!this.collapsed && this.text}
            </a>
          )}
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
      </Host>
    );
  }
}
