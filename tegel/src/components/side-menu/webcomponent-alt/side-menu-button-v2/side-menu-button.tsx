import { Component, h, State, Host, Element, Listen } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-button-v2',
  styleUrl: 'side-menu-button.scss',
  shadow: true,
})
export class SddsSideMenuButton {
  @Element() host: HTMLSddsSideMenuButtonV2Element;

  @State() collapsed: boolean = false;

  sideMenuEl: HTMLSddsSideMenuElement;

  connectedCallback() {
    this.sideMenuEl = this.host.closest('sdds-side-menu');
    this.collapsed = this.sideMenuEl.collapsed;
  }

  @Listen('tegelCollapsedSideMenu', { target: 'body' })
  collapsedSideMenuEventHandeler(event: CustomEvent<any>) {
    this.collapsed = event.detail.collapsed;
  }

  render() {
    return (
      <Host>
        <li class={''}>
          <button class={`${this.collapsed ? 'collapsed' : 'full-width'}`}>
            <slot name="icon"></slot>
            {!this.collapsed && <slot></slot>}
          </button>
        </li>
      </Host>
    );
  }
}
