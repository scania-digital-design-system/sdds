import { Component, Host, h, Prop, State, Element, Listen } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-user',
  styleUrl: 'side-menu-user.scss',
  shadow: true,
})
export class SddsSideMenuUser {
  /** Image for side menu items that are 'user-profile' */
  @Prop() image: string = 'https://www.svgrepo.com/show/170303/avatar.svg';

  /** Alt for image for side menu items that are 'user-profile' */
  @Prop() imageAlt: string = '';

  /** Header for image for side menu items that are 'user-profile' */
  @Prop() header: string = '';

  /** Subheader for image for side menu items that are 'user-profile' */
  @Prop() subheader: string = '';

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
      <Host class={`${this.collapsed ? 'collapsed' : 'full-width'}`}>
        <img src={this.image} alt={this.imageAlt} />
        {!this.collapsed && (
          <div class="header-wrapper">
            <div class="header">{this.header}</div>
            <div class="subheader">{this.subheader}</div>
          </div>
        )}
      </Host>
    );
  }
}
