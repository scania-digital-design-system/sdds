import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-user',
  styleUrl: 'header-user.scss',
  shadow: true,
})
export class HeaderUser {
  @Prop() img: string;

  @Prop() imgAlt: string;

  @Prop() header: string;

  @Prop() subheader: string;

  render() {
    return (
      <li>
        <img src={this.img} alt={this.imgAlt} />
        <div class="user-content">
          <div class="header">{this.header}</div>
          <div class="subheader">{this.subheader}</div>
        </div>
      </li>
    );
  }
}
