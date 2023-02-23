import { Component, h, State, Host, Element, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-button',
  styleUrl: 'side-menu-button.scss',
  shadow: true,
})
export class SddsSideMenuButton {
  @Element() host: HTMLSddsSideMenuButtonElement;

  /** If it should appear selected. */
  @Prop() selected: boolean = false;

  /** If it should appear active. Can be used when the button is
   * triggering a dropdown, and the dropdown is open, for example. */
  @Prop() active: boolean = false;

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
        <li
          class={{
            'state--selected': this.selected,
            'state--active': this.active,
            'state--collapsed': this.collapsed,
          }}
        >
          <button>
            <slot name="icon"></slot>
            {!this.collapsed && <slot></slot>}
          </button>
        </li>
      </Host>
    );
  }
}
