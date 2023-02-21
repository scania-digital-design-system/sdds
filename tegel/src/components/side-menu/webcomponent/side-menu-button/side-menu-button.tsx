import { Component, h, State, Host, Element, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-button',
  styleUrl: 'side-menu-button.scss',
  shadow: true,
})
export class SddsSideMenuButton {
  @Element() host: HTMLSddsSideMenuButtonElement;

  /** Gives the appearance of a selected button */
  @Prop() selected: boolean = false;

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
