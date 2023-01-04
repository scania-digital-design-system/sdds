import { Component, h, Prop } from '@stencil/core';

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

  render() {
    return (
      <li class={`${this.tall ? 'tall' : ''}`}>
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
