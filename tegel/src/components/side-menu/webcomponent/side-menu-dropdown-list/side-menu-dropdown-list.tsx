import { Component, Host, h, Listen, Element, State } from '@stencil/core';
import { CollapsedEvent } from '../side-menu';

@Component({
  tag: 'sdds-side-menu-dropdown-list',
  styleUrl: 'side-menu-dropdown-list.scss',
  shadow: true,
})
export class SideMenuDropdownList {
  @Element() host: HTMLElement;

  @State() collapsed: boolean = false;

  private sideMenuEl: HTMLSddsSideMenuElement;

  @Listen('sddsSideMenuCollapsed', { target: 'body' })
  collapsedSideMenuEventHandler(event: CustomEvent<CollapsedEvent>) {
    this.collapsed = event.detail.collapsed;
  }

  connectedCallback() {
    this.sideMenuEl = this.host.closest('sdds-side-menu');
    this.collapsed = this.sideMenuEl.collapsed;
  }

  render() {
    return (
      <Host role="list">
        <div
          class={{
            'state-collapsed': this.collapsed,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
