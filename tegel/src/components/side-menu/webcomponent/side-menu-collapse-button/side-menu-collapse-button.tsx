import { Component, Element, h, Host, Listen, State } from '@stencil/core';
import { CollapsedEvent } from '../side-menu';

@Component({
  tag: 'sdds-side-menu-collapse-button',
  styleUrl: 'side-menu-collapse-button.scss',
  shadow: true,
})
export class SideMenuCollapseButton {
  @Element() host: HTMLSddsSideMenuButtonElement;

  @State() collapsed: boolean = false;

  sideMenuEl: HTMLSddsSideMenuElement;

  @Listen('sddsSideMenuCollapsed', { target: 'body' })
  collapsedSideMenuEventHandeler(event: CustomEvent<CollapsedEvent>) {
    this.collapsed = event.detail.collapsed;
  }

  connectedCallback() {
    this.sideMenuEl = this.host.closest('sdds-side-menu');
    this.collapsed = this.sideMenuEl.collapsed;
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'wrapper': true,
            'state--collapsed': this.collapsed,
          }}
        >
          <sdds-side-menu-button
            class={{
              button: true,
            }}
          >
            {/* TODO use a proper icon instead of rotating wrong icon */}
            <sdds-icon class="icon" name="download" size="20" slot="icon" />
            Collapse
          </sdds-side-menu-button>
        </div>
      </Host>
    );
  }
}
