import { Component, h, Host, Prop, Element } from '@stencil/core';

@Component({
  tag: 'sdds-header-launcher',
  styleUrl: 'header-launcher.scss',
  shadow: true,
})
export class SddsHeaderLauncher {
  @Prop() open: boolean = false;

  @Element() el: HTMLElement;

  handleClick = () => {
    this.open = !this.open;
  };

  render() {
    return (
      <Host>
        <button class={this.open && 'sdds-launcher-open'} onClick={() => this.handleClick()}>
          <sdds-icon name="bento" size="20px"></sdds-icon>
        </button>
        <ul class={this.open ? 'sdds-launcher-open' : ''}>
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
