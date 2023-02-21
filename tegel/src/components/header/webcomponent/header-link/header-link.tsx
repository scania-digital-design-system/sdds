import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-link',
  styleUrl: 'header-link.scss',
  shadow: true,
})
export class HeaderLink {
  @Prop() selected: boolean = false;

  @Prop() href!: string;

  // 'noopener' is a security measure for legacy browsers that prevents
  // the opened page from getting access to the original page when using
  // target='_blank'.
  @Prop() rel: string = 'noopener';

  @Prop() target: string;

  render() {
    return (
      <Host>
        <sdds-core-header-item
          class={{
            'state--selected': this.selected,
          }}
        >
          <a part="a" href={this.href} rel={this.rel} target={this.target}>
            <slot />
          </a>
        </sdds-core-header-item>
      </Host>
    );
  }
}
