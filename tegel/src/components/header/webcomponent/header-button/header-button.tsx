import { Component, h, Element, Prop, Host } from '@stencil/core';

@Component({
  tag: 'sdds-header-button',
  styleUrl: 'header-button.scss',
  shadow: true,
})
export class HeaderButton {
  @Prop() active: boolean = false;

  @Prop() divider: string;

  @Element() host: HTMLElement;

  sideMenuEl: HTMLSddsSideMenuElement;

  position: string;

  type: 'dropdown-child' | 'launcher-child' | null = null;

  connectedCallback() {
    if (this.host.parentElement.tagName === 'SDDS-HEADER-DROPDOWN') {
      this.type = 'dropdown-child';
    } else if (this.host.parentElement.tagName === 'SDDS-HEADER-LAUNCHER') {
      this.type = 'launcher-child';
    }
  }

  render() {
    return (
      <Host>
        {this.divider && this.type === 'launcher-child' && (
          <div class="divider">{this.divider}</div>
        )}
        <li class={`${this.type}`}>
          <button class={`${this.active ? 'active' : ''}`}>
            <slot></slot>
          </button>
        </li>
      </Host>
    );
  }
}
