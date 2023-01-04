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
      <li class={`${this.type}`}>
        <a class={`${this.active ? 'active' : ''}`} href={this.href} target={this.target}>
          <slot></slot>
        </a>
      </li>
    );
  }
}
