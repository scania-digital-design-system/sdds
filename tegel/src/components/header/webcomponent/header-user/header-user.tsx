import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'sdds-header-user',
  styleUrl: 'header-user.scss',
  shadow: true,
})
export class HeaderUser {
  /** Image src for the component. */
  @Prop() img: string;

  /** Image alt for the component. */
  @Prop() imgAlt: string;

  /** Header text */
  @Prop() header: string;

  /** Subheader text */
  @Prop() subheader: string;

  /** Makes the component 84px tall */
  @Prop() tall: boolean = false;

  @Element() host: HTMLElement;

  type: 'dropdown-child' | 'launcher-child' | 'mobile-menu-top-child' | 'mobile-menu-bottom-child';

  connectedCallback() {
    if (this.host.parentElement.tagName === 'SDDS-HEADER-DROPDOWN') {
      this.type = 'dropdown-child';
      if (this.host.parentElement.parentElement.slot === 'mobile-menu-top') {
        this.type = 'mobile-menu-top-child';
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
      <li class={`${this.type} ${this.tall ? 'tall' : ''}`}>
        <div class="user-box">
          {this.img && <img src={this.img} alt={this.imgAlt} />}
          <div class="user-content">
            <div class="header">{this.header}</div>
            <div class="subheader">{this.subheader}</div>
          </div>
        </div>
      </li>
    );
  }
}
