import { Component, h, State, Host, Element, Listen, Prop } from '@stencil/core';
import { CollapsedEvent } from '../side-menu';

@Component({
  tag: 'sdds-side-menu-button',
  styleUrl: 'side-menu-button.scss',
  shadow: true,
})
export class SddsSideMenuButton {
  @Element() host: HTMLSddsSideMenuButtonElement;

  /** If the button should appear selected. */
  @Prop() selected: boolean = false;

  /** If the button should appear active. Can be used when the button is
   * triggering a dropdown, and the dropdown is open, for example. */
  @Prop() active: boolean = false;

  @State() collapsed: boolean = false;

  sideMenuEl: HTMLSddsSideMenuElement;

  connectedCallback() {
    // closest() will return null if side-menu-button is inside a shadowRoot that
    // does not contain a side-menu. This is the case for the side-menu-dropdown.
    this.sideMenuEl = this.host.closest('sdds-side-menu');
    this.collapsed = this.sideMenuEl?.collapsed;
  }

  @Listen('sddsSideMenuCollapsed', { target: 'body' })
  collapsedSideMenuEventHandeler(event: CustomEvent<CollapsedEvent>) {
    this.collapsed = event.detail.collapsed;
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'component': true,
            'state-selected': this.selected,
            'state-active': this.active,
            'state-collapsed': this.collapsed,
          }}
        >
          <button>
            <slot name="icon"></slot>
            {!this.collapsed && <slot></slot>}
          </button>
        </div>
      </Host>
    );
  }
}
