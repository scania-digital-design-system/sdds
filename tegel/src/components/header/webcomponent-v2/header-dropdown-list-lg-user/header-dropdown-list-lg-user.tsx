import { Component, h, Prop, Element, Host } from '@stencil/core';

@Component({
  tag: 'sdds-header-dropdown-list-lg-user',
  styleUrl: 'header-dropdown-list-lg-user.scss',
  shadow: true,
})
export class HeaderDropdownListLgUser {
  /** Image URL. */
  @Prop() imageUrl: string;

  /** Image alt text. */
  @Prop() imageAlt: string;

  /** Heading, usually the users first name and last name. */
  @Prop() heading: string;

  /** Subheading. */
  @Prop() subheading: string;

  @Element() host: HTMLElement;

  render() {
    return (
      <Host role="listitem">
        <div class="user-box">
          {this.imageUrl && <img src={this.imageUrl} alt={this.imageAlt} />}
          <slot name="image"></slot>
          <div class="user-content">
            <div class="header">
              {this.heading}
              <slot name="heading"></slot>
            </div>
            <div class="subheader">
              {this.subheading}
              <slot name="subheading"></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
