import { Component, h, Prop, State, Element, Listen, Host } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-dropdown',
  styleUrl: 'sdds-side-menu-dropdown.scss',
  shadow: true,
})
export class SddsSideMenuDropdown {
  /** Open state for the dropdown. */
  @Prop() open: boolean = false;

  @State() collapsed: boolean = false;

  @Element() host: HTMLElement;

  sideMenuEl: HTMLSddsSideMenuElement;

  position: string;

  connectedCallback() {
    this.sideMenuEl = this.host.closest('sdds-side-menu');
    this.collapsed = this.sideMenuEl.collapsed;
    this.position = this.host.parentElement.slot;
  }

  @Listen('collapseSideMenuEvent', { target: 'body' })
  collapseSideMenuEventHandeler(event: CustomEvent<any>) {
    this.collapsed = event.detail.collapsed;
  }

  handleClick = () => {
    this.open = !this.open;
  };

  render() {
    return (
      <Host class={`${this.open ? 'open' : 'closed'}`}>
        <li class={`${this.open ? 'expanded' : 'contracted'}`}>
          {this.collapsed ? (
            <button
              class={`${this.position} ${this.collapsed ? 'collapsed' : 'full-width'}  ${
                this.open ? 'expanded' : 'contracted'
              }`}
              onClick={() => {
                this.handleClick();
              }}
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
              <sdds-icon name={this.collapsed ? 'kebab' : 'chevron_down'} size="24px"></sdds-icon>
            </button>
          ) : (
            <button
              class={`${this.position} ${this.collapsed ? 'collapsed' : 'full-width'}  ${
                this.open ? 'expanded' : 'contracted'
              }`}
              onClick={() => {
                this.handleClick();
              }}
            >
              <slot name="label"></slot>
              <sdds-icon name={this.collapsed ? 'kebab' : 'chevron_down'} size="24px"></sdds-icon>
            </button>
          )}
        </li>
        <ul
          class={`dropdown-${this.open ? 'open' : 'closed'} ${
            this.collapsed ? 'collapsed' : 'full-width'
          }`}
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
          onClick={() => {
            this.handleClick();
          }}
        >
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
