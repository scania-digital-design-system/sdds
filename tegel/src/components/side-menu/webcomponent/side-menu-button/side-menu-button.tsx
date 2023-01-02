import { Component, h, Prop, State, Element, Listen } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-button',
  styleUrl: 'side-menu-button.scss',
  shadow: true,
})
export class SddsSideMenuButton {
  /** Icon for the side menu item */
  @Prop() icon: string = '';

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
      <li class={`${this.isDropdownChild ? 'dropdown-item' : ''}`}>
        <button class={`${this.position} ${this.collapsed ? 'collapsed' : 'full-width'}`}>
          {this.icon !== '' && <sdds-icon name={this.icon} size="24px"></sdds-icon>}
          {!this.collapsed && <slot></slot>}
          {!this.collapsed || (this.isDropdownChild && <slot></slot>)}
        </button>
      </li>
    );
  }
}
