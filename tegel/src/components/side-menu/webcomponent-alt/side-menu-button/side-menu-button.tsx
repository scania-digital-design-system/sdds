import { Component, h, State, Host } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-button-v2',
  styleUrl: 'side-menu-button.scss',
  shadow: true,
})
export class SddsSideMenuButton {
  @State() collapsed: boolean = false;

  render() {
    return (
      <Host>
        <li class={''}>
          <button class={`${this.collapsed ? 'collapsed' : 'full-width'}`}>
            <slot name="icon"></slot>
            <slot></slot>
          </button>
        </li>
      </Host>
    );
  }
}
