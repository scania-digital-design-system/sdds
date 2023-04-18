import { Component, Element, h, Host, Listen, State } from '@stencil/core';
import { CollapsedEvent } from '../side-menu';

@Component({
  tag: 'sdds-side-menu-collapse-button',
  styleUrl: 'side-menu-collapse-button.scss',
  shadow: true,
})
export class SideMenuCollapseButton {
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
      <Host role="button" tabindex="0">
        <div
          class={{
            'wrapper': true,
            'state-collapsed': this.collapsed,
          }}
        >
          <sdds-side-menu-item
            class={{
              button: true,
            }}
          >
            <a>
              <svg
                class="icon"
                slot="icon"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 1.975a1 1 0 0 1 1 1v20.3l9.311-9.312a1 1 0 0 1 1.415 1.414l-9.887 9.887a2.6 2.6 0 0 1-3.677 0l-9.887-9.887a1 1 0 1 1 1.414-1.414L15 23.274V2.975a1 1 0 0 1 1-1ZM5.188 28.001a1 1 0 0 0 0 2h21.62a1 1 0 1 0 0-2H5.188Z"
                  fill="currentColor"
                />
              </svg>
              Collapse
            </a>
          </sdds-side-menu-item>
        </div>
      </Host>
    );
  }
}
