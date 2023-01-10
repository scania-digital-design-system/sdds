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

  type:
    | 'dropdown-child'
    | 'launcher-list-child'
    | 'launcher-grid-child'
    | 'mobile-menu-top-child'
    | 'mobile-menu-bottom-child';

  // Correct lifecycle state?
  connectedCallback() {
    console.log(this.host, this.host.parentElement.slot);

    if (this.host.parentElement.slot === 'mobile-menu-top') {
      // If mobile menu direct child
      this.type = 'mobile-menu-top-child';
    }
    if (this.host.parentElement.slot === 'mobile-menu-bottom') {
      // If mobile menu direct child
      this.type = 'mobile-menu-bottom-child';
    }

    if (
      this.host.parentElement.parentElement.tagName === 'SDDS-HEADER-DROPDOWN' &&
      this.host.parentElement.parentElement.parentElement.slot ===
        ('mobile-menu-top' || 'mobile-menu-bottom')
    ) {
      this.type = 'dropdown-child';
      if (this.active) {
        this.host.closest('sdds-header-dropdown').active = true;
      }
    }

    // If dropdown child
    if (this.host.parentElement.slot === 'dropdown-menu') {
      this.type = 'dropdown-child';
    }
    // If launcher child.
    if (this.host.parentElement.tagName === 'SDDS-HEADER-LAUNCHER') {
      console.log(this.host);
      this.type =
        this.host.closest('sdds-header-launcher').variant === 'grid'
          ? 'launcher-grid-child'
          : 'launcher-list-child';
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
