import { Component, Host, h, Listen, Element, State } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-dropdown-list',
  styleUrl: 'side-menu-dropdown-list.scss',
  shadow: true,
})
export class SideMenuDropdownList {
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
        <div
          role="list"
          class={{
            'state--collapsed': this.collapsed,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
