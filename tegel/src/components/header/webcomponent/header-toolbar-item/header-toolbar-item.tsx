import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-toolbar-item',
  styleUrl: 'header-toolbar-item.scss',
  shadow: true,
})
export class SddsHeaderToolbarItem {
  @Prop() open: boolean = false;

  @Prop() type: 'button' | 'link' = 'button';

  @Prop() icon: string = 'truck';

  @Prop() href: string = '';

  @Prop() showOnMobile: boolean = false;

  handleClick = () => {
    this.open = !this.open;
  };

  render() {
    return (
      <li class={`${this.open ? 'open' : 'closed'} ${this.showOnMobile ? '' : 'hide-mobile'}`}>
        {this.type === 'link' && (
          <a href={this.href}>
            <sdds-icon name={this.icon} size="20px"></sdds-icon>
          </a>
        )}
        {this.type === 'button' && (
          <button
            onClick={() => {
              this.open = !this.open;
            }}
          >
            <sdds-icon name={this.icon} size="20px"></sdds-icon>
          </button>
        )}
      </li>
    );
  }
}
