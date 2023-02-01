import { Component, h, Prop, State, Element, Listen, Host } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-dropdown-v1',
  styleUrl: 'side-menu-dropdown.scss',
  shadow: true,
})
export class SddsSideMenuDropdown {
  /** Open state for the dropdown. */
  @Prop() open: boolean = false;

  @Prop() selected: boolean = false;

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
    this.open = false;
  }

  handleClick = () => {
    this.open = !this.open;
  };

  render() {
    return (
      <Host class={`${this.open ? 'open' : 'closed'}`}>
        <li
          class={`${this.open ? 'expanded' : 'contracted'} ${
            this.collapsed ? 'collapsed' : 'full-width'
          }`}
        >
          {this.collapsed ? (
            <button
              class={`${this.position} ${this.collapsed ? 'collapsed' : 'full-width'} ${
                this.selected ? 'selected' : ''
              }  ${this.open ? 'expanded' : 'contracted'}`}
            >
              <sdds-icon name={this.collapsed ? 'kebab' : 'chevron_down'} size="24px"></sdds-icon>
            </button>
          ) : (
            <button
              class={`${this.position} ${this.collapsed ? 'collapsed' : 'full-width'} ${
                this.selected ? 'selected' : ''
              }  ${this.open ? 'expanded' : 'contracted'}`}
              onClick={() => {
                this.handleClick();
              }}
            >
              <slot></slot>
            </button>
          )}
        </li>
        <ul
          class={`dropdown-${this.open ? 'open' : 'closed'} ${
            this.collapsed ? 'collapsed' : 'full-width'
          }`}
          onClick={() => {
            this.handleClick();
          }}
        >
          <slot name="children"></slot>
        </ul>
      </Host>
    );
  }
}
