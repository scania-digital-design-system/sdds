import { Component, Element, h, Host, Listen, State } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-collapse-button',
  styleUrl: 'side-menu-collapse-button.scss',
  shadow: true,
})
export class SideMenuCollapseButton {
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
          class={{
            'wrapper': true,
            'state--collapsed': this.collapsed,
          }}
        >
          <sdds-side-menu-button-v2
            class={{
              button: true,
            }}
          >
            {/* TODO use a proper icon instead of rotating wrong icon */}
            <sdds-icon class="icon" name="download" size="20" slot="icon" />
            Collapse
          </sdds-side-menu-button-v2>
        </div>
      </Host>
    );
  }
}
