import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-inline-menu-dropdown',
  styleUrl: 'header-inline-menu-dropdown.scss',
  shadow: true,
})
export class SddsHeaderInlineMenuDropdown {
  @Prop() childList: Array<{
    type: 'button' | 'link';
    text: string;
    href: string;
  }> = [];

  render() {
    return (
      <Host>
        {this.childList.map((child) => {
          <sdds-header-inline-menu-item
            type={child.type}
            text={child.text}
            href={child.href}
          ></sdds-header-inline-menu-item>;
        })}
      </Host>
    );
  }
}
