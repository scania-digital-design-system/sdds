import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-dropdown-list-link',
  styleUrl: 'header-dropdown-list-link.scss',
  shadow: true,
})
export class HeaderDropdownListLink {
  @Prop() selected: boolean = false;

  @Prop() href!: string;

  // 'noopener' is a security measure for legacy browsers that prevents
  // the opened page from getting access to the original page when using
  // target='_blank'.
  @Prop() rel: string = 'noopener';

  @Prop() target: string;

  render() {
    return (
      <Host role="listitem">
        <a
          part="a"
          href={this.href}
          rel={this.rel}
          target={this.target}
          class={{
            'state--selected': this.selected,
          }}
        >
          <slot></slot>
        </a>
      </Host>
    );
  }
}
