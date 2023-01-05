import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'sdds-header-link',
  styleUrl: 'header-link.scss',
  shadow: true,
})
export class HeaderLink {
  @Prop() active: boolean = false;

  /** Href for the link */
  @Prop() href: string = '';

  /** Target for the link */
  @Prop() target: string = '_self';

  @Element() host: HTMLElement;

  type: 'dropdown-child' | 'launcher-child' | 'mobile-menu-top-child' | 'mobile-menu-bottom-child';

  connectedCallback() {
    if (this.host.parentElement.tagName === 'SDDS-HEADER-DROPDOWN') {
      this.type = 'dropdown-child';
      if (this.host.parentElement.parentElement.slot === 'mobile-menu-top') {
        this.type = 'mobile-menu-top-child';
        if (this.active) {
          this.host.closest('sdds-header-dropdown').active = true;
        }
      }
    } else if (this.host.parentElement.tagName === 'SDDS-HEADER-LAUNCHER') {
      this.type = 'launcher-child';
    } else if (this.host.parentElement.slot === 'mobile-menu-top') {
      this.type = 'mobile-menu-top-child';
    } else if (this.host.parentElement.slot === 'mobile-menu-bottom') {
      this.type = 'mobile-menu-bottom-child';
    }
  }

  render() {
    return (
      <li class={`${this.type}`}>
        <a class={`${this.active ? 'active' : ''}`} href={this.href} target={this.target}>
          <slot></slot>
        </a>
      </li>
    );
  }
}
