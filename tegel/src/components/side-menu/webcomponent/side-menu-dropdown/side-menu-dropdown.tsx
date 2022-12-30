import { Component, h, Host, Prop, Listen, State } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-dropdown',
  styleUrl: 'side-menu-dropdown.scss',
  shadow: true,
})
export class SddsSideMenuDropdown {
  @Prop() text: string = '';

  @Prop() open: boolean = false;

  @State() collapsed: boolean = false;

  @Listen('collapseSideMenuEvent', { target: 'body' })
  collapseSideMenuEventHandeler(event: CustomEvent<any>) {
    this.collapsed = event.detail.collapsed;
  }

  render() {
    return (
      <Host>
        <li
          onMouseEnter={() => {
            if (this.collapsed) {
              this.open = !this.open;
            }
          }}
          onMouseLeave={() => {
            if (this.collapsed) {
              this.open = !this.open;
            }
          }}
          class={`side-menu-${this.collapsed ? 'collapsed' : 'open'} dropdown-${
            this.open ? 'expanded' : 'closed'
          }`}
        >
          <button
            onClick={() => {
              if (!this.collapsed) {
                this.open = !this.open;
              }
            }}
          >
            {!this.collapsed && this.text}
            <sdds-icon
              class={this.open ? 'dropdown-expanded' : 'dropdown-closed'}
              name={this.collapsed ? 'kebab' : 'chevron_down'}
              size="16px"
            ></sdds-icon>
          </button>
        </li>
        <ul
          class={`sdds-side-menu-dropdown-list dropdown-${this.open ? 'expanded' : 'closed'}`}
          onMouseEnter={() => {
            if (this.collapsed) {
              this.open = !this.open;
            }
          }}
          onMouseLeave={() => {
            if (this.collapsed) {
              this.open = !this.open;
            }
          }}
        >
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
