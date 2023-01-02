import { Component, h, Prop, State, Element, Listen, Host } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-link',
  styleUrl: 'sdds-side-menu-link.scss',
  shadow: true,
})
export class SddsSideMenuLink {
  /** Icon for the side menu item */
  @Prop() icon: string = '';

  /** Href for side menu item that are links */
  @Prop() href: string = '#';

  @State() collapsed: boolean = false;

  @Element() host: HTMLElement;

  sideMenuEl: HTMLSddsSideMenuElement;

  position: string;

  isDropdownChild: boolean = false;

  connectedCallback() {
    this.sideMenuEl = this.host.closest('sdds-side-menu');
    this.collapsed = this.sideMenuEl.collapsed;
    this.position = this.host.parentElement.slot;
    if (this.host.parentElement.tagName === 'SDDS-SIDE-MENU-DROPDOWN') {
      this.isDropdownChild = true;
    }
  }

  @Listen('collapseSideMenuEvent', { target: 'body' })
  collapseSideMenuEventHandeler(event: CustomEvent<any>) {
    this.collapsed = event.detail.collapsed;
  }

  render() {
    return (
      <Host>
        <li class={`${this.isDropdownChild ? 'dropdown-item' : ''}`}>
          <a
            href={this.href}
            class={`${this.position} ${this.collapsed ? 'collapsed' : 'full-width'}`}
          >
            {this.icon !== '' && <sdds-icon name={this.icon} size="24px"></sdds-icon>}
            {!this.collapsed && <slot></slot>}
            {!this.collapsed || (this.isDropdownChild && <slot></slot>)}
          </a>
        </li>
      </Host>
    );
  }
}
