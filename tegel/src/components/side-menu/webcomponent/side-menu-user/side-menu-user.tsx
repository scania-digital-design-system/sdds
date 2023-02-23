import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-user',
  styleUrl: 'side-menu-user.scss',
  shadow: true,
})
export class SideMenuUser {
  /** The heading text. */
  @Prop() heading!: string;

  /** The subheading text. */
  @Prop() subheading: string;

  /** The image source. */
  @Prop() imageSrc: string;

  /** The image alt text. */
  @Prop() imageAlt: string;

  render() {
    return (
      <Host role="listitem">
        <sdds-side-menu-user-image src={this.imageSrc} alt={this.imageAlt}>
          <slot name="image"></slot>
        </sdds-side-menu-user-image>
        <sdds-side-menu-user-label
          heading={this.heading}
          subheading={this.subheading}
        ></sdds-side-menu-user-label>
      </Host>
    );
  }
}
