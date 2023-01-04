import { Component, h, Prop, State, Element, Listen, Host } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-button',
  styleUrl: 'side-menu-button.scss',
  shadow: true,
})
export class SddsSideMenuButton {
  /** Icon for the side menu item */
  @Prop() icon: string = '';

  /** Sets the button as into a selected state */
  @Prop() selected: boolean = false;

  @State() collapsed: boolean = false;

  @Element() host: HTMLElement;

  dropdownEl: any;

  sideMenuEl: HTMLSddsSideMenuElement;

  position: string;

  isDropdownChild: boolean = false;

  connectedCallback() {
    this.sideMenuEl = this.host.closest('sdds-side-menu');
    this.collapsed = this.sideMenuEl.collapsed;
    this.position = this.host.parentElement.slot;
    if (this.host.parentElement.parentElement.tagName === 'SDDS-SIDE-MENU-DROPDOWN') {
      this.isDropdownChild = true;
      if (this.selected) {
        this.dropdownEl = this.host.parentElement.parentElement;
        this.dropdownEl.selected = true;
      }
    }
  }

  @Listen('collapseSideMenuEvent', { target: 'body' })
  collapseSideMenuEventHandeler(event: CustomEvent<any>) {
    this.collapsed = event.detail.collapsed;
  }

  render() {
    return (
      <Host>
        <li class={`${this.isDropdownChild ? 'dropdown-item' : ''}`}>
          <button
            class={`${this.position} ${this.collapsed ? 'collapsed' : 'full-width'} ${
              this.selected ? 'selected' : ''
            }`}
          >
            <slot></slot>
          </button>
        </li>
      </Host>
    );
  }
}
