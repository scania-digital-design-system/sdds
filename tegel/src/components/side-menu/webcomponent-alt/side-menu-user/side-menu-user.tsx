import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-side-menu-user-v2',
  styleUrl: 'side-menu-user.scss',
  shadow: true,
})
export class SideMenuUser {
  @Prop() heading!: string;

  @Prop() subheading: string;

  @Prop() imageSrc: string;

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
